[![NPM](https://img.shields.io/npm/v/mapbox-gl-draw-cut-polygon-mode.svg)](https://www.npmjs.com/package/mapbox-gl-draw-cut-polygon-mode)
![Develop](https://github.com/reyhanemasumi/mapbox-gl-draw-cut-polygon-mode/workflows/Develop/badge.svg)
![Release](https://github.com/reyhanemasumi/mapbox-gl-draw-cut-polygon-mode/workflows/Release/badge.svg)

# mapbox-gl-draw-cut-polygon-mode

A custom mode for [MapboxGL-Draw](https://github.com/mapbox/mapbox-gl-draw) to cut polygons
> Check [mapbox-gl-draw-split-polygon-mode](https://github.com/ReyhaneMasumi/mapbox-gl-draw-split-polygon-mode) For splitting polygons.

## [DEMO](https://reyhanemasumi.github.io/mapbox-gl-draw-cut-polygon-mode/)

![A Gif showing demo usage](demo/public/demo.gif)

## Install

```bash
npm install mapbox-gl-draw-cut-polygon-mode mapbox-gl-draw-passing-mode
```
or use CDN:

```html
<script src='https://unpkg.com/mapbox-gl-draw-cut-polygon-mode'></script>
```

## Usage

```js
import mapboxGl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import CutPolygonMode from "mapbox-gl-draw-cut-polygon-mode";
import mapboxGlDrawPassingMode from 'mapbox-gl-draw-passing-mode';

const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-91.874, 42.76], // starting position
  zoom: 12, // starting zoom
});

const draw = new MapboxDraw({
  userProperties: true,
  displayControlsDefault: false,
  modes: Object.assign(MapboxDraw.modes, {
    cutPolygonMode: CutPolygonMode,
    passing_mode_polygon: mapboxGlDrawPassingMode(
      MapboxDraw.modes.draw_polygon
    ),
  }),
});
map.addControl(draw);

// when mode drawing should be activated
draw.changeMode("cutPolygonMode");
```

## [Example](https://github.com/ReyhaneMasumi/mapbox-gl-draw-cut-polygon-mode/blob/main/demo/src/App.js)

## License

MIT © [ReyhaneMasumi](LICENSE)
