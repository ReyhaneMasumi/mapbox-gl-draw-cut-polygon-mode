import { geojsonTypes, updateActions, events } from "@mapbox/mapbox-gl-draw/src/constants";
import difference from "@turf/difference";

const SplitPolygonMode = {};

SplitPolygonMode.onSetup = function () {
  let main = this.getSelected()
    .filter((f) => f.type === "Polygon" || f.type === "MultiPolygon")
    .map((f) => f.toGeoJSON());

  if (main.length < 1) {
    throw new Error(
      "Please select a feature/features (Polygon or MultiPolygon) to split!"
    );
  }

  return {
    main,
  };
};

SplitPolygonMode.toDisplayFeatures = function (state, geojson, display) {
  display(geojson);

  this.changeMode("passing_mode_polygon", (cuttingpolygon) => {
    state.main.forEach((feature, idx) => {
      if (
        feature.geometry.type === geojsonTypes.POLYGON ||
        feature.geometry.type === geojsonTypes.MULTI_POLYGON
      ) {
        let afterCut = difference(feature, cuttingpolygon);
        let newF = this.newFeature(afterCut);
        newF.id = feature.id;
        this.deleteFeature(feature.id);
        this.addFeature(newF);
        this.fireUpdate();
      } else {
        console.info("The feature is not Polygon/MultiPolygon!");
      }
    });
  });
};

SplitPolygonMode.fireUpdate = function() {
    this.map.fire(events.UPDATE, {
        action: updateActions.CHANGE_COORDINATES,
        features: this.getSelected().map(f => f.toGeoJSON())
    });
};
SplitPolygonMode.onMouseOut = function(state) {
  // As soon as you mouse leaves the canvas, update the feature
  // if (state.dragMoving) {
      this.fireUpdate();
  // }
};

SplitPolygonMode.onTouchEnd = SplitPolygonMode.onMouseUp = function(state) {
  // if (state.dragMoving) {
      this.fireUpdate();
  // }
  // this.stopDragging(state);
};

export default SplitPolygonMode;
