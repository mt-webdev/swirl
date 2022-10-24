// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-arrow-right",
})
export class FlipIconArrowRight {
  @Prop() size: FlipIconSize = 24;

  render() {
    return (
      <svg
        class="flip-icon"
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${this.size} ${this.size}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M7.46667 12.8667C7.32222 12.7222 7.24733 12.5445 7.242 12.3333C7.23622 12.1222 7.30555 11.9445 7.45 11.8L10.4833 8.76668H3.36667C3.15555 8.76668 2.97511 8.69157 2.82533 8.54135C2.67511 8.39157 2.6 8.21113 2.6 8.00002C2.6 7.7889 2.67511 7.60846 2.82533 7.45868C2.97511 7.30846 3.15555 7.23335 3.36667 7.23335H10.4833L7.45 4.20002C7.30555 4.05557 7.23622 3.87779 7.242 3.66668C7.24733 3.45557 7.32222 3.27779 7.46667 3.13335C7.61111 3.00002 7.78889 2.93335 8 2.93335C8.21111 2.93335 8.38889 3.00002 8.53333 3.13335L12.8667 7.46668C12.9444 7.53335 13 7.61379 13.0333 7.70802C13.0667 7.80268 13.0833 7.90002 13.0833 8.00002C13.0833 8.10002 13.0667 8.19446 13.0333 8.28335C13 8.37224 12.9444 8.45557 12.8667 8.53335L8.53333 12.8667C8.38889 13.0111 8.21111 13.0807 8 13.0753C7.78889 13.0696 7.61111 13 7.46667 12.8667V12.8667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 24 && (
          <Fragment>
            <path
              d="M11.2 19.2999C10.9833 19.0832 10.871 18.8166 10.863 18.4999C10.8543 18.1832 10.9583 17.9166 11.175 17.6999L15.725 13.1499H5.05C4.73333 13.1499 4.46267 13.0372 4.238 12.8119C4.01267 12.5872 3.9 12.3166 3.9 11.9999C3.9 11.6832 4.01267 11.4126 4.238 11.1879C4.46267 10.9626 4.73333 10.8499 5.05 10.8499H15.725L11.175 6.2999C10.9583 6.08324 10.8543 5.81657 10.863 5.4999C10.871 5.18324 10.9833 4.91657 11.2 4.6999C11.4167 4.4999 11.6833 4.3999 12 4.3999C12.3167 4.3999 12.5833 4.4999 12.8 4.6999L19.3 11.1999C19.4167 11.2999 19.5 11.4206 19.55 11.5619C19.6 11.7039 19.625 11.8499 19.625 11.9999C19.625 12.1499 19.6 12.2916 19.55 12.4249C19.5 12.5582 19.4167 12.6832 19.3 12.7999L12.8 19.2999C12.5833 19.5166 12.3167 19.6209 12 19.6129C11.6833 19.6042 11.4167 19.4999 11.2 19.2999V19.2999Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M13.0667 22.5166C12.8139 22.2639 12.6828 21.9527 12.6735 21.5833C12.6634 21.2139 12.7847 20.9027 13.0375 20.65L18.3458 15.3416H5.89167C5.52223 15.3416 5.20645 15.2102 4.94434 14.9473C4.68145 14.6852 4.55 14.3694 4.55 14C4.55 13.6305 4.68145 13.3147 4.94434 13.0526C5.20645 12.7897 5.52223 12.6583 5.89167 12.6583H18.3458L13.0375 7.34997C12.7847 7.09719 12.6634 6.78608 12.6735 6.41663C12.6828 6.04719 12.8139 5.73608 13.0667 5.4833C13.3194 5.24997 13.6306 5.1333 14 5.1333C14.3694 5.1333 14.6806 5.24997 14.9333 5.4833L22.5167 13.0666C22.6528 13.1833 22.75 13.3241 22.8083 13.489C22.8667 13.6546 22.8958 13.825 22.8958 14C22.8958 14.175 22.8667 14.3402 22.8083 14.4958C22.75 14.6514 22.6528 14.7972 22.5167 14.9333L14.9333 22.5166C14.6806 22.7694 14.3694 22.8911 14 22.8818C13.6306 22.8717 13.3194 22.75 13.0667 22.5166V22.5166Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
