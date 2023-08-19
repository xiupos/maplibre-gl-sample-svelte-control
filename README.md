# maplibre-gl-sample-svelte-control

This is a sample project using [Svelte](https://svelte.dev/) that shows how to add a Control to MapLibre GL JS. [demo](https://xiupos.github.io/maplibre-gl-sample-svelte-control/)

![Screenshot](img/screenshot.png)

## Installation

```bash
pnpm add xiupos/maplibre-gl-sample-svelte-control
```

## Usege

```js
// Import the plugin
import { SampleControl } from 'maplibre-gl-sample-svelte-control';
import 'maplibre-gl-sample-svelte-control/dist/style.css';

// const map = new Map({ ... });

map.on('load', () => {
  // Add sample control
  const Sample = new SampleControl({ text: 'Custom text' });
  map.addControl(Sample);
});
```

## Credits

This project is based on [the MapLibre GL JS documentation](https://maplibre.org/maplibre-gl-js/docs/) and [the Svelte documentation](https://svelte.dev/docs/).

## License

This project is licensed under the MIT License.
