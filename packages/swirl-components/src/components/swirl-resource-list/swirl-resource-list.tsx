import { Component, Element, h, Host, Prop } from "@stencil/core";

@Component({
  shadow: true,
  styleUrl: "swirl-resource-list.css",
  tag: "swirl-resource-list",
})
export class SwirlResourceList {
  @Element() el: HTMLElement;

  @Prop() label?: string;

  private focusedIndex = 0;
  private items: HTMLSwirlResourceListItemElement[];

  componentDidLoad() {
    this.collectItems();
  }

  private collectItems() {
    this.items = Array.from(
      this.el.querySelectorAll<HTMLSwirlResourceListItemElement>(
        "swirl-resource-list-item, swirl-resource-list-file-item"
      )
    ).filter((el) => el.isConnected);

    this.removeItemsFromTabOrder();
    this.enableItemFocus(this.items[this.focusedIndex]);
  }

  private removeItemsFromTabOrder() {
    this.items.forEach((item) =>
      item.shadowRoot
        ?.querySelector(
          ".resource-list-item__content, .resource-list-file-item"
        )
        ?.setAttribute("tabIndex", "-1")
    );
  }

  private enableItemFocus(
    item?: HTMLSwirlResourceListItemElement,
    focus?: boolean
  ) {
    if (!Boolean(item)) {
      return;
    }

    const interactiveElement = item.shadowRoot?.querySelector<HTMLElement>(
      ".resource-list-item__content, .resource-list-file-item"
    );

    if (!Boolean(interactiveElement)) {
      return;
    }

    interactiveElement.setAttribute("tabIndex", "0");

    if (focus) {
      interactiveElement.focus();
    }
  }

  private focusItemAtIndex(index: number) {
    this.removeItemsFromTabOrder();

    const item = this.items[index];

    if (!Boolean(item) || !item.isConnected) {
      return;
    }

    this.enableItemFocus(item, true);

    this.focusedIndex = index;
  }

  private onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.focusItemAtIndex((this.focusedIndex + 1) % this.items.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();

      const prevIndex =
        this.focusedIndex === 0 ? this.items.length - 1 : this.focusedIndex - 1;

      this.focusItemAtIndex(prevIndex);
    } else if (event.key === "Home") {
      event.preventDefault();

      this.focusItemAtIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();

      this.focusItemAtIndex(this.items.length - 1);
    }
  };

  private onSlotChange = () => {
    this.collectItems();
  };

  render() {
    return (
      <Host onKeyDown={this.onKeyDown}>
        <swirl-stack aria-label={this.label} role="grid">
          <slot onSlotchange={this.onSlotChange}></slot>
        </swirl-stack>
      </Host>
    );
  }
}
