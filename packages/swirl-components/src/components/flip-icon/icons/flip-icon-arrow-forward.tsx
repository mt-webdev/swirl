// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-arrow-forward",
})
export class FlipIconArrowForward {
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
              d="M6.4916 13.1114L11.1661 8.45076C11.2216 8.38603 11.2632 8.31668 11.2909 8.2427C11.3187 8.16872 11.3325 8.09012 11.3325 8.00689C11.3325 7.92367 11.3187 7.84507 11.2909 7.77109C11.2632 7.69711 11.2216 7.62776 11.1661 7.56303L6.4916 2.88856C6.34365 2.7406 6.16092 2.66663 5.94343 2.66663C5.7263 2.66663 5.54376 2.74523 5.39581 2.90243C5.2386 3.05039 5.16 3.2283 5.16 3.43618C5.16 3.64443 5.2386 3.82715 5.39581 3.98435L9.41835 8.00689L5.39581 12.0294C5.24785 12.1774 5.17387 12.3553 5.17387 12.5632C5.17387 12.7714 5.25248 12.9542 5.40968 13.1114C5.55763 13.2593 5.73574 13.3333 5.94398 13.3333C6.15186 13.3333 6.3344 13.2593 6.4916 13.1114Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 24 && (
          <Fragment>
            <path
              d="M9.73739 19.6671L16.7491 12.6762C16.8323 12.5791 16.8947 12.4751 16.9363 12.3641C16.978 12.2531 16.9988 12.1352 16.9988 12.0104C16.9988 11.8856 16.978 11.7677 16.9363 11.6567C16.8947 11.5457 16.8323 11.4417 16.7491 11.3446L9.73739 4.3329C9.51546 4.11097 9.24137 4 8.91513 4C8.58944 4 8.31563 4.1179 8.0937 4.35371C7.85789 4.57564 7.73999 4.84251 7.73999 5.15433C7.73999 5.4667 7.85789 5.74079 8.0937 5.97659L14.1275 12.0104L8.0937 18.0442C7.87176 18.2661 7.7608 18.533 7.7608 18.8448C7.7608 19.1572 7.8787 19.4313 8.1145 19.6671C8.33643 19.889 8.60359 20 8.91596 20C9.22778 20 9.50159 19.889 9.73739 19.6671Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M11.3603 22.9449L19.5406 14.7889C19.6377 14.6756 19.7105 14.5542 19.7591 14.4248C19.8076 14.2953 19.8319 14.1577 19.8319 14.0121C19.8319 13.8665 19.8076 13.7289 19.7591 13.5994C19.7105 13.47 19.6377 13.3486 19.5406 13.2353L11.3603 5.05501C11.1014 4.79609 10.7816 4.66663 10.401 4.66663C10.021 4.66663 9.70158 4.80418 9.44266 5.07928C9.16755 5.33821 9.03 5.64956 9.03 6.01334C9.03 6.37778 9.16755 6.69755 9.44266 6.97265L16.4821 14.0121L9.44266 21.0515C9.18373 21.3105 9.05427 21.6218 9.05427 21.9856C9.05427 22.35 9.19182 22.6698 9.46693 22.9449C9.72585 23.2038 10.0375 23.3333 10.402 23.3333C10.7657 23.3333 11.0852 23.2038 11.3603 22.9449Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
