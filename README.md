[![NPM](https://img.shields.io/npm/v/mapbox-gl-draw-cut-polygon-mode.svg)](https://www.npmjs.com/package/mapbox-gl-draw-cut-polygon-mode)
![Develop](https://github.com/reyhanemasumi/mapbox-gl-draw-cut-polygon-mode/workflows/Develop/badge.svg)
![Release](https://github.com/reyhanemasumi/mapbox-gl-draw-cut-polygon-mode/workflows/Release/badge.svg)

# mapbox-gl-draw-cut-polygon-mode

A custom mode for [MapboxGL-Draw](https://github.com/mapbox/mapbox-gl-draw) to cut polygons

## [DEMO](https://reyhanemasumi.github.io/mapbox-gl-draw-cut-polygon-mode/)

## Install

```bash
npm install mapbox-gl-draw-cut-polygon-mode
```

## Usage

```js
import mapboxGl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import CutPolygunMode from 'mapbox-gl-draw-cut-polygon-mode';

const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-91.874, 42.76], // starting position
  zoom: 12, // starting zoom
});

const draw = new MapboxDraw({
  userProperties: true,
  displayControlsDefault: false,
  modes: Object.assign(MapboxDraw.modes, {
    cutPolygunMode: CutPolygunMode,
  }),
});
map.addControl(draw);

// when mode drawing should be activated
draw.changeMode('cutPolygunMode');
```

## [Example](https://github.com/ReyhaneMasumi/mapbox-gl-draw-cut-polygon-mode/blob/main/demo/src/App.js)

## License

MIT © [ReyhaneMasumi](LICENSE)
