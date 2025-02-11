import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";
import classnames from "classnames";

export type SwirlPaginationVariant = "default" | "simple" | "advanced";

@Component({
  shadow: true,
  styleUrl: "swirl-pagination.css",
  tag: "swirl-pagination",
})
export class SwirlPagination {
  @Prop() accessibleNextButtonLabel?: string = "Next page";
  @Prop() accessiblePrevButtonLabel?: string = "Previous page";
  @Prop() nextButtonLabel?: string = "Next";
  @Prop() pageLabel?: string = "out of";
  @Prop() prevButtonLabel?: string = "Prev";
  @Prop() label!: string;
  @Prop() page!: number;
  @Prop() pages!: number;
  @Prop() pageSelectLabel?: string = "Select a page";
  @Prop() variant?: SwirlPaginationVariant = "default";

  @Event() setPage: EventEmitter<number>;

  private onPrevButtonClick = () => {
    const prevPage = Math.max(this.page - 1, 1);

    if (this.page === prevPage) {
      return;
    }

    this.setPage.emit(prevPage);
  };

  private onNextButtonClick = () => {
    const nextPage = Math.min(this.page + 1, this.pages);

    if (this.page === nextPage) {
      return;
    }

    this.setPage.emit(nextPage);
  };

  private onSelect = (event: Event) => {
    const page = +(event.target as HTMLSelectElement).value;

    if (this.page === page) {
      return;
    }

    this.setPage.emit(page);
  };

  render() {
    const hideButtonLabels = this.variant !== "advanced";
    const showPageLabel = this.variant !== "simple";
    const showDropDown = this.variant === "advanced";

    const ariaPageLabel = `${this.page} ${this.pageLabel} ${this.pages}`;

    const className = classnames(
      "pagination",
      `pagination--variant-${this.variant}`
    );

    return (
      <Host>
        <nav aria-label={this.label} class={className}>
          <ul class="pagination__list" part="pagination__list">
            <li class="pagination__list-item">
              <swirl-button
                class="pagination__prev-button"
                disabled={this.page <= 1}
                swirlAriaLabel={this.accessiblePrevButtonLabel}
                hideLabel={hideButtonLabels}
                icon="<swirl-icon-chevron-left></swirl-icon-chevron-left>"
                intent="primary"
                label={this.prevButtonLabel}
                onClick={this.onPrevButtonClick}
              ></swirl-button>
            </li>
            {showPageLabel ? (
              <li class="pagination__list-item">
                <span>
                  {showDropDown ? (
                    <span
                      aria-current="page"
                      class="pagination__advanced-label"
                    >
                      <span class="pagination__page-select-container">
                        <select
                          aria-label={this.pageSelectLabel}
                          class="pagination__page-select"
                          onChange={this.onSelect}
                        >
                          {new Array(this.pages)
                            .fill(undefined)
                            .map((_, index) => index + 1)
                            .map((page) => (
                              <option
                                selected={this.page === page}
                                value={String(page)}
                              >
                                {page}
                              </option>
                            ))}
                        </select>
                        <swirl-icon-expand-more
                          aria-hidden="true"
                          class="pagination__page-select-icon"
                          size={16}
                        ></swirl-icon-expand-more>
                      </span>
                      <span aria-hidden="true">
                        {this.pageLabel} {this.pages}
                      </span>
                    </span>
                  ) : (
                    <span aria-current="page">{ariaPageLabel}</span>
                  )}
                </span>
              </li>
            ) : (
              <li class="pagination__list-item">
                <swirl-visually-hidden>
                  <span aria-current="page">{ariaPageLabel}</span>
                </swirl-visually-hidden>
              </li>
            )}
            <li class="pagination__list-item">
              <swirl-button
                class="pagination__next-button"
                disabled={this.page >= this.pages}
                swirlAriaLabel={this.accessibleNextButtonLabel}
                hideLabel={hideButtonLabels}
                icon="<swirl-icon-chevron-right></swirl-icon-chevron-right>"
                iconPosition="end"
                intent="primary"
                label={this.nextButtonLabel}
                onClick={this.onNextButtonClick}
              ></swirl-button>
            </li>
          </ul>
        </nav>
      </Host>
    );
  }
}
