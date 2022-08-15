// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from '@stencil/core';

export type FlipIconSize = 16 | 24 | 28;

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-search",
})
export class FlipIconSearch {
  @Prop() size: FlipIconSize = 24;

  render() {
    return (
      <svg
        class="flip-icon"
        fill="none"
        height={this.size}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && <Fragment><path d="m12.533 13.617-3.7-3.7a4.218 4.218 0 0 1-1.15.616 4.065 4.065 0 0 1-1.383.234c-1.233 0-2.278-.431-3.133-1.292-.856-.861-1.284-1.908-1.284-3.142 0-1.233.428-2.28 1.284-3.142.855-.86 1.9-1.291 3.133-1.291s2.28.43 3.142 1.291c.86.862 1.291 1.909 1.291 3.142 0 .49-.075.95-.224 1.384A3.82 3.82 0 0 1 9.9 8.85l3.717 3.733c.133.134.2.303.2.509 0 .205-.073.38-.217.525a.735.735 0 0 1-.541.216.682.682 0 0 1-.526-.216ZM6.3 9.233c.811 0 1.5-.28 2.067-.842.566-.56.85-1.247.85-2.058 0-.81-.284-1.497-.85-2.058A2.831 2.831 0 0 0 6.3 3.433c-.811 0-1.497.28-2.058.842-.561.561-.842 1.247-.842 2.058 0 .811.28 1.497.842 2.058.56.562 1.247.842 2.058.842Z" fill="currentColor"/></Fragment>}
        {this.size === 24 && <Fragment><path d="m18.8 20.425-5.55-5.55c-.5.383-1.075.692-1.725.925-.65.233-1.342.35-2.075.35-1.85 0-3.417-.646-4.7-1.938C3.467 12.921 2.825 11.35 2.825 9.5c0-1.85.642-3.421 1.925-4.713C6.033 3.496 7.6 2.85 9.45 2.85s3.421.646 4.713 1.937C15.454 6.079 16.1 7.65 16.1 9.5a6.3 6.3 0 0 1-.337 2.075 5.73 5.73 0 0 1-.913 1.7l5.575 5.6c.2.2.3.454.3.763 0 .308-.108.57-.325.787a1.102 1.102 0 0 1-.812.325c-.325 0-.588-.108-.788-.325ZM9.45 13.85c1.217 0 2.25-.421 3.1-1.263.85-.841 1.275-1.87 1.275-3.087S13.4 7.254 12.55 6.412c-.85-.841-1.883-1.262-3.1-1.262s-2.246.42-3.087 1.262C5.521 7.254 5.1 8.283 5.1 9.5s.421 2.246 1.263 3.087c.841.842 1.87 1.263 3.087 1.263Z" fill="currentColor"/></Fragment>}
        {this.size === 28 && <Fragment><path d="m21.933 23.83-6.475-6.476a7.375 7.375 0 0 1-2.012 1.08 7.109 7.109 0 0 1-2.421.408c-2.158 0-3.986-.754-5.483-2.261-1.498-1.507-2.246-3.34-2.246-5.498 0-2.158.748-3.99 2.246-5.498 1.497-1.507 3.325-2.26 5.483-2.26 2.158 0 3.991.753 5.498 2.26 1.507 1.507 2.26 3.34 2.26 5.498a7.36 7.36 0 0 1-.393 2.421 6.685 6.685 0 0 1-1.065 1.984l6.504 6.533c.233.233.35.53.35.89s-.126.665-.379.918-.569.38-.947.38c-.38 0-.686-.127-.92-.38Zm-10.908-7.672c1.42 0 2.625-.49 3.617-1.473.991-.982 1.487-2.182 1.487-3.602s-.496-2.62-1.487-3.602c-.992-.982-2.198-1.473-3.617-1.473-1.42 0-2.62.491-3.602 1.473-.982.982-1.473 2.183-1.473 3.602 0 1.42.491 2.62 1.473 3.602.982.982 2.183 1.473 3.602 1.473Z" fill="currentColor"/></Fragment>}
      </svg>
    );
  }
}
