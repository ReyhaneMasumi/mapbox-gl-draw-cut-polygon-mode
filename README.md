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
npm install mapbox-gl-draw-cut-polygon-mode
```

or use CDN:

```html
<script src="https://unpkg.com/mapbox-gl-draw-cut-polygon-mode"></script>
```

## Usage

```js
import mapboxGl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import defaultDrawStyle from "@mapbox/mapbox-gl-draw/src/lib/theme";

import CutPolygonMode, {
  drawStyles as cutPolygonDrawStyles,
} from "mapbox-gl-draw-cut-polygon-mode";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-91.874, 42.76],
  zoom: 12,
});

const draw = new MapboxDraw({
  modes: {
    ...CutPolygonMode(MapboxDraw.modes),
  },
  styles: [...cutPolygonDrawStyles(defaultDrawStyle)],
  userProperties: true,
  displayControlsDefault: false,
});

map.addControl(draw);

// when mode drawing should be activated
draw.changeMode("cut_polygon");
```

> The syntax used here is because `mapbox-gl-draw-cut-polygon-mode` needs to modify the modes object and also the `styles` object passed to the `mapbox-gl-draw` becuase this package uses [`mapbox-gl-draw-passing-mode`](https://github.com/mhsattarian/mapbox-gl-draw-passing-mode) underneath (and adds this to modes object) and also needs to modify the styles to show the selected feature.

also, take a look at the [**example**](https://github.com/ReyhaneMasumi/mapbox-gl-draw-cut-polygon-mode/blob/main/demo/src/App.js) in the `demo` directory.

### note

There is an issue in `mapbox-gl-draw` which causes multi-features to have the same properties object and therefor if you `uncombine` a multi-feature and try to split one of the pieces the whole multi-feature gets highlighted as the selected feature.

### Upgrade from version 1

```diff

import mapboxGl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
+ import defaultDrawStyle from "@mapbox/mapbox-gl-draw/src/lib/theme";

- import SplitPolygonMode from 'mapbox-gl-draw-split-polygon-mode';
- import mapboxGlDrawPassingMode from 'mapbox-gl-draw-passing-mode';

+ import SplitPolygonMode, {
+   drawStyles as cutPolygonDrawStyles,
+ } from "mapbox-gl-draw-split-polygon-mode";


draw = new MapboxDraw({
- modes: Object.assign(MapboxDraw.modes, {
-   splitPolygonMode: CutPolygonMode,
-   passing_mode_line_string: mapboxGlDrawPassingMode(
-     MapboxDraw.modes.draw_polygon
-   ),
- }),
+ modes: {
+   ...SplitPolygonMode(MapboxDraw.modes),
+ },

+ styles: [...cutPolygonDrawStyles(defaultDrawStyle)],
  userProperties: true,
});

- draw.changeMode('cutPolygonMode');
+ draw.changeMode("cut_polygon");

```

## Development

use the command `npm run dev`. it will take advantage of `vite` to watch, serve, and build the package and the demo.

## License

MIT © [ReyhaneMasumi](LICENSE)
