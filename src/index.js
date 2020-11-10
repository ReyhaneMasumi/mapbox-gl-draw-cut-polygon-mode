import {
  geojsonTypes,
  modes,
  events,
} from '@mapbox/mapbox-gl-draw/src/constants';
import difference from '@turf/difference';

const CutPolygonMode = {
  onSetup: function () {
    let main = this.getSelected().map((f) => f.toGeoJSON());
    const state = {
      main,
    };
    return state;
  },

  onClick: function (state, e) {
    // console.log(
    //   'e',
    //   this.getFeature(e.featureTarget.properties.id).toGeoJSON()
    // );
    if (state.main.length > 0) {
      this.changeMode(modes.DRAW_POLYGON);
      let cut;
      this.map.once(events.CREATE, (e) => {
        cut = e.features[0];
        state.main.forEach((feature, idx) => {
          if (
            feature.geometry.type === geojsonTypes.POLYGON ||
            feature.geometry.type === geojsonTypes.MULTI_POLYGON
          ) {
            let afterCut = difference(feature, cut);
            let newF = this.newFeature(afterCut);
            newF.id = feature.id;
            this.addFeature(newF);
          } else {
            console.info('The feature is not Polygon/MultiPolygon!');
          }
        });
        this.deleteFeature([cut.id], { silent: true });
        this.exitMode();
      });
    } else {
      state.main = this.getFeature(e.featureTarget.properties.id).toGeoJSON();
      let cut;
      this.changeMode(modes.DRAW_POLYGON);
      this.map.once(events.CREATE, (e) => {
        cut = e.features[0];
        if (
          state.main.geometry.type === geojsonTypes.POLYGON ||
          state.main.geometry.type === geojsonTypes.MULTI_POLYGON
        ) {
          let afterCut = difference(state.main, cut);
          let newF = this.newFeature(afterCut);
          this.deleteFeature([cut.id], { silent: true });
          newF.id = state.main.id;
          this.addFeature(newF);
        } else {
          console.info('The feature is not Polygon/MultiPolygon!');
        }
        // console.info('Please Select a feature/features.');
        this.exitMode();
      });
      // this.exitMode();
    }
  },

  onTap: function (state, e) {
    if (state.main.length > 0) {
      this.changeMode(modes.DRAW_POLYGON);
      let cut;
      this.map.once(events.CREATE, (e) => {
        cut = e.features[0];
        state.main.forEach((feature, idx) => {
          if (
            feature.geometry.type === geojsonTypes.POLYGON ||
            feature.geometry.type === geojsonTypes.MULTI_POLYGON
          ) {
            let afterCut = difference(feature, cut);
            let newF = this.newFeature(afterCut);
            newF.id = feature.id;
            this.addFeature(newF);
          } else {
            console.info('The feature is not Polygon/MultiPolygon!');
          }
        });
        this.deleteFeature([cut.id], { silent: true });
        this.exitMode();
      });
    } else {
      state.main = this.getFeature(e.featureTarget.properties.id).toGeoJSON();
      let cut;
      this.changeMode(modes.DRAW_POLYGON);
      this.map.once(events.CREATE, (e) => {
        cut = e.features[0];
        if (
          state.main.geometry.type === geojsonTypes.POLYGON ||
          state.main.geometry.type === geojsonTypes.MULTI_POLYGON
        ) {
          let afterCut = difference(state.main, cut);
          let newF = this.newFeature(afterCut);
          this.deleteFeature([cut.id], { silent: true });
          newF.id = state.main.id;
          this.addFeature(newF);
        } else {
          console.info('The feature is not Polygon/MultiPolygon!');
        }
        this.exitMode();
      });
    }
  },

  toDisplayFeatures: function (state, geojson, display) {
    display(geojson);
  },

  onKeyUp: function (state, e) {
    if (e.keyCode === 27) return this.exitMode();
  },

  exitMode: function (state, e) {
    return this.changeMode(modes.SIMPLE_SELECT);
  },
};

export default CutPolygonMode;
