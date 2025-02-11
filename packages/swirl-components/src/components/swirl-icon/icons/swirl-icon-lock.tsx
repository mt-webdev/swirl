// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-lock",
})
export class SwirlIconLock {
  @Prop() size: SwirlIconSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const className = classnames("swirl-icon", `swirl-icon--size-${this.size}`);

    return (
      <svg
        class={className}
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M12 5.66667H11.3333V4.33333C11.3333 2.49333 9.83999 1 7.99999 1C6.15999 1 4.66666 2.49333 4.66666 4.33333V5.66667H3.99999C3.26666 5.66667 2.66666 6.26667 2.66666 7V13.6667C2.66666 14.4 3.26666 15 3.99999 15H12C12.7333 15 13.3333 14.4 13.3333 13.6667V7C13.3333 6.26667 12.7333 5.66667 12 5.66667ZM7.99999 11.6667C7.26666 11.6667 6.66666 11.0667 6.66666 10.3333C6.66666 9.6 7.26666 9 7.99999 9C8.73332 9 9.33332 9.6 9.33332 10.3333C9.33332 11.0667 8.73332 11.6667 7.99999 11.6667ZM5.99999 5.66667V4.33333C5.99999 3.22667 6.89332 2.33333 7.99999 2.33333C9.10666 2.33333 9.99999 3.22667 9.99999 4.33333V5.66667H5.99999Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M18 8.5H17V6.5C17 3.74 14.76 1.5 12 1.5C9.24 1.5 7 3.74 7 6.5V8.5H6C4.9 8.5 4 9.4 4 10.5V20.5C4 21.6 4.9 22.5 6 22.5H18C19.1 22.5 20 21.6 20 20.5V10.5C20 9.4 19.1 8.5 18 8.5ZM12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5C14 16.6 13.1 17.5 12 17.5ZM9 8.5V6.5C9 4.84 10.34 3.5 12 3.5C13.66 3.5 15 4.84 15 6.5V8.5H9Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M21 9.91667H19.8333V7.58333C19.8333 4.36333 17.22 1.75 14 1.75C10.78 1.75 8.16666 4.36333 8.16666 7.58333V9.91667H6.99999C5.71666 9.91667 4.66666 10.9667 4.66666 12.25V23.9167C4.66666 25.2 5.71666 26.25 6.99999 26.25H21C22.2833 26.25 23.3333 25.2 23.3333 23.9167V12.25C23.3333 10.9667 22.2833 9.91667 21 9.91667ZM14 20.4167C12.7167 20.4167 11.6667 19.3667 11.6667 18.0833C11.6667 16.8 12.7167 15.75 14 15.75C15.2833 15.75 16.3333 16.8 16.3333 18.0833C16.3333 19.3667 15.2833 20.4167 14 20.4167ZM10.5 9.91667V7.58333C10.5 5.64667 12.0633 4.08333 14 4.08333C15.9367 4.08333 17.5 5.64667 17.5 7.58333V9.91667H10.5Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
