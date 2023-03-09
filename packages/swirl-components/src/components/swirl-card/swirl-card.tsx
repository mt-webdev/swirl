import { Component, Element, h, Host, Prop } from "@stencil/core";
import classnames from "classnames";

/**
 * @slot slot - The card contents
 */
@Component({
  shadow: true,
  styleUrl: "swirl-card.css",
  tag: "swirl-card",
})
export class SwirlCard {
  @Element() el: HTMLElement;

  @Prop() as?: string = "div";
  @Prop() elevated?: boolean;
  @Prop() highlighted?: boolean;
  @Prop() href?: string;
  @Prop() imageAspectRatio?: string;
  @Prop() interactive?: boolean;
  @Prop() linkTarget?: string;
  @Prop() swirlAriaLabel?: string;

  render() {
    const Tag = Boolean(this.href) ? "a" : this.as;

    const hasImage = Boolean(this.el.querySelector('[slot="image"]'));

    const className = classnames("card", {
      "card--elevated": this.elevated,
      "card--has-image": hasImage,
      "card--highlighted": this.highlighted,
      "card--interactive": this.interactive || this.href,
    });

    return (
      <Host>
        <Tag
          aria-label={this.swirlAriaLabel}
          class={className}
          href={this.href}
          rel={
            Boolean(this.href) && this.linkTarget === "_blank"
              ? "noreferrer"
              : undefined
          }
          target={this.linkTarget}
        >
          <div
            class="card__image"
            style={{ aspectRatio: this.imageAspectRatio }}
          >
            <slot name="image"></slot>
          </div>
          <div class="card__body">
            <div class="card__content">
              <slot name="content"></slot>
            </div>
          </div>
        </Tag>
      </Host>
    );
  }
}
