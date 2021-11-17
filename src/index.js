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
    let splited = []
    state.main.forEach((feature, idx) => {
      if (
        feature.geometry.type === geojsonTypes.POLYGON ||
        feature.geometry.type === geojsonTypes.MULTI_POLYGON
      ) {
        let afterCut = difference(feature, cuttingpolygon);
        let newF = this.newFeature(afterCut);
        newF.id = feature.id;
        splited.push(newF)
        this.addFeature(newF);
      } else {
        console.info("The feature is not Polygon/MultiPolygon!");
      }
    });
    this.fireUpdate(splited);
  });
};

SplitPolygonMode.fireUpdate = function(newF) {
    this.map.fire(events.UPDATE, {
        action: updateActions.CHANGE_COORDINATES,
        features: newF.toGeoJSON()
    });
};

export default SplitPolygonMode;
