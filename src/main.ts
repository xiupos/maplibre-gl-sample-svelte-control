import type { Map, IControl } from 'maplibre-gl';
import SampleControlComponent from './SampleControl.svelte';

// Type for options
interface Options {
  text: string;
};

// Default options
const defaultOptions: Options = {
  text: 'Hello, world!',
};

export class SampleControl implements IControl {
  private text: string;
  private container!: HTMLDivElement;
  private map: Map | null;

  constructor(options?: Options) {
    this.text = options?.text || defaultOptions.text;
    this.map = null;
  };

  onAdd(map: Map) {
    this.container = document.createElement('div');
    this.map = map;

    new SampleControlComponent({
      target: this.container,
      props: {
        map: this.map,
        text: this.text,
      }
    });

    // Add the control
    return this.container;
  };

  onRemove() {
    // Refly the container
    this.container.parentNode?.removeChild(this.container);
    this.map = null;
  };
};
