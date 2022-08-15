// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from '@stencil/core';

export type FlipIconSize = 16 | 24 | 28;

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-group-assign",
})
export class FlipIconGroupAssign {
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
        {this.size === 16 && <Fragment><g clip-path="url(#a)"><path d="M13.966 12c.023-.11.035-.221.035-.333v-1a2.473 2.473 0 0 0-.92-1.896c1.341.233 2.92.867 2.92 1.896v1a.327.327 0 0 1-.333.333h-1.702Zm-8.633 0a.667.667 0 0 1-.666-.667v-.666c0-1.334 2.666-2 4-2 1.333 0 4 .666 4 2v.666A.667.667 0 0 1 12 12H5.333ZM2.667 8.715V8h-2A.67.67 0 0 1 0 7.333a.667.667 0 0 1 .667-.666h2v-.712a.533.533 0 0 1 .909-.38l1.38 1.38a.533.533 0 0 1 0 .755l-1.38 1.38a.515.515 0 0 1-.372.157.536.536 0 0 1-.537-.534v.002Zm8.728-1.472c.389-.56.598-1.226.6-1.908a3.292 3.292 0 0 0-.6-1.908 2.001 2.001 0 0 1 1.37.06 1.99 1.99 0 0 1 1.228 1.848 1.992 1.992 0 0 1-2.597 1.906l-.002.002Zm-4.728-1.91a1.995 1.995 0 0 1 2-2 1.992 1.992 0 0 1 1.845 1.235c.1.242.15.503.148.765a1.991 1.991 0 0 1-1.993 2 2 2 0 0 1-2-2Z" fill="currentColor"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h16v16H0z"/></clipPath></defs></Fragment>}
        {this.size === 24 && <Fragment><g clip-path="url(#a)"><path d="M20.95 18c.034-.164.052-.332.052-.5V16a3.712 3.712 0 0 0-1.38-2.843c2.011.35 4.38 1.3 4.38 2.843v1.5a.493.493 0 0 1-.5.5h-2.553ZM8 18a1 1 0 0 1-1-1v-1c0-2 4-3 6-3s6 1 6 3v1a1 1 0 0 1-1 1H8Zm-4-4.928V12H1a1.006 1.006 0 0 1-1-1 1 1 0 0 1 1-1h3V8.933a.8.8 0 0 1 1.363-.57l2.07 2.07a.8.8 0 0 1 0 1.132l-2.07 2.069a.772.772 0 0 1-.556.236.804.804 0 0 1-.807-.8v.002Zm13.092-2.208c.584-.84.898-1.839.9-2.862a4.939 4.939 0 0 0-.9-2.861 3 3 0 0 1 .91-.138 2.986 2.986 0 0 1 2.988 3 2.986 2.986 0 0 1-1.842 2.77 2.99 2.99 0 0 1-2.054.09l-.002.001ZM10 8a2.993 2.993 0 0 1 3-3 2.98 2.98 0 0 1 2.12.878A2.984 2.984 0 0 1 15.99 8a2.985 2.985 0 0 1-.87 2.122A2.99 2.99 0 0 1 13 11a3 3 0 0 1-3-3Z" fill="currentColor"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs></Fragment>}
        {this.size === 28 && <Fragment><g clip-path="url(#a)"><path d="M24.44 21a2.79 2.79 0 0 0 .062-.583v-1.75a4.33 4.33 0 0 0-1.61-3.317c2.347.407 5.11 1.516 5.11 3.317v1.75a.574.574 0 0 1-.583.583H24.44ZM9.334 21a1.167 1.167 0 0 1-1.166-1.167v-1.166c0-2.334 4.666-3.5 7-3.5 2.333 0 7 1.166 7 3.5v1.166A1.166 1.166 0 0 1 21 21H9.333Zm-4.666-5.75V14h-3.5A1.173 1.173 0 0 1 0 12.833a1.166 1.166 0 0 1 1.167-1.166h3.5V10.42a.932.932 0 0 1 1.59-.664l2.416 2.414a.934.934 0 0 1 0 1.32l-2.416 2.415a.9.9 0 0 1-.65.276.936.936 0 0 1-.94-.933v.002Zm15.273-2.575a5.873 5.873 0 0 0 1.05-3.34 5.761 5.761 0 0 0-1.05-3.338 3.501 3.501 0 0 1 1.062-.16 3.484 3.484 0 0 1 3.487 3.5 3.488 3.488 0 0 1-4.546 3.336l-.003.002Zm-8.273-3.342a3.49 3.49 0 0 1 3.5-3.5 3.477 3.477 0 0 1 2.472 1.024 3.481 3.481 0 0 1 1.016 2.476 3.483 3.483 0 0 1-1.016 2.476 3.489 3.489 0 0 1-2.472 1.024 3.5 3.5 0 0 1-3.5-3.5Z" fill="currentColor"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h28v28H0z"/></clipPath></defs></Fragment>}
      </svg>
    );
  }
}
