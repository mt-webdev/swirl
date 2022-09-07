// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-download",
})
export class FlipIconDownload {
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
              d="M7.99999 10.2333C7.89999 10.2333 7.80555 10.2167 7.71666 10.1833C7.62777 10.15 7.54444 10.0944 7.46666 10.0167L5.01666 7.56665C4.87222 7.42221 4.79999 7.24443 4.79999 7.03332C4.79999 6.82221 4.87222 6.64443 5.01666 6.49999C5.14999 6.36665 5.32488 6.29732 5.54133 6.29199C5.75822 6.28621 5.93888 6.34999 6.08333 6.48332L7.23333 7.64999V3.04999C7.23333 2.83888 7.30844 2.6611 7.45866 2.51665C7.60844 2.37221 7.78888 2.29999 7.99999 2.29999C8.2111 2.29999 8.39155 2.37221 8.54133 2.51665C8.69155 2.6611 8.76666 2.83888 8.76666 3.04999V7.64999L9.91666 6.48332C10.0611 6.34999 10.2418 6.28621 10.4587 6.29199C10.6751 6.29732 10.85 6.36665 10.9833 6.49999C11.1278 6.64443 11.2 6.82221 11.2 7.03332C11.2 7.24443 11.1278 7.42221 10.9833 7.56665L8.53333 10.0167C8.45555 10.0944 8.37222 10.15 8.28333 10.1833C8.19444 10.2167 8.09999 10.2333 7.99999 10.2333ZM3.91666 13.5833C3.49444 13.5833 3.13622 13.436 2.84199 13.1413C2.54733 12.8471 2.39999 12.4889 2.39999 12.0667V10.5833C2.39999 10.3722 2.47511 10.1944 2.62533 10.05C2.77511 9.90554 2.95555 9.83332 3.16666 9.83332C3.37777 9.83332 3.55555 9.90554 3.69999 10.05C3.84444 10.1944 3.91666 10.3722 3.91666 10.5833V12.0667H12.0667V10.5833C12.0667 10.3722 12.1418 10.1944 12.292 10.05C12.4418 9.90554 12.6222 9.83332 12.8333 9.83332C13.0444 9.83332 13.2222 9.90554 13.3667 10.05C13.5111 10.1944 13.5833 10.3722 13.5833 10.5833V12.0667C13.5833 12.4889 13.436 12.8471 13.1413 13.1413C12.8471 13.436 12.4889 13.5833 12.0667 13.5833H3.91666Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 24 && (
          <Fragment>
            <path
              d="M12 15.35C11.85 15.35 11.7083 15.325 11.575 15.275C11.4417 15.225 11.3167 15.1417 11.2 15.025L7.52501 11.35C7.30834 11.1333 7.20001 10.8667 7.20001 10.55C7.20001 10.2333 7.30834 9.96668 7.52501 9.75001C7.72501 9.55001 7.98734 9.44601 8.31201 9.43801C8.63734 9.42935 8.90834 9.52501 9.12501 9.72501L10.85 11.475V4.57501C10.85 4.25835 10.9627 3.99168 11.188 3.77501C11.4127 3.55835 11.6833 3.45001 12 3.45001C12.3167 3.45001 12.5873 3.55835 12.812 3.77501C13.0373 3.99168 13.15 4.25835 13.15 4.57501V11.475L14.875 9.72501C15.0917 9.52501 15.3627 9.42935 15.688 9.43801C16.0127 9.44601 16.275 9.55001 16.475 9.75001C16.6917 9.96668 16.8 10.2333 16.8 10.55C16.8 10.8667 16.6917 11.1333 16.475 11.35L12.8 15.025C12.6833 15.1417 12.5583 15.225 12.425 15.275C12.2917 15.325 12.15 15.35 12 15.35ZM5.87501 20.375C5.24167 20.375 4.70434 20.154 4.26301 19.712C3.82101 19.2707 3.60001 18.7333 3.60001 18.1V15.875C3.60001 15.5583 3.71267 15.2917 3.93801 15.075C4.16267 14.8583 4.43334 14.75 4.75001 14.75C5.06667 14.75 5.33334 14.8583 5.55001 15.075C5.76667 15.2917 5.87501 15.5583 5.87501 15.875V18.1H18.1V15.875C18.1 15.5583 18.2127 15.2917 18.438 15.075C18.6627 14.8583 18.9333 14.75 19.25 14.75C19.5667 14.75 19.8333 14.8583 20.05 15.075C20.2667 15.2917 20.375 15.5583 20.375 15.875V18.1C20.375 18.7333 20.154 19.2707 19.712 19.712C19.2707 20.154 18.7333 20.375 18.1 20.375H5.87501Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 17.9084C13.825 17.9084 13.6597 17.8792 13.5042 17.8209C13.3486 17.7625 13.2028 17.6653 13.0667 17.5292L8.77918 13.2417C8.5264 12.9889 8.40001 12.6778 8.40001 12.3084C8.40001 11.9389 8.5264 11.6278 8.77918 11.375C9.01251 11.1417 9.31857 11.0204 9.69735 11.011C10.0769 11.0009 10.3931 11.1125 10.6458 11.3459L12.6583 13.3875V5.33752C12.6583 4.96808 12.7898 4.65697 13.0527 4.40419C13.3148 4.15141 13.6306 4.02502 14 4.02502C14.3695 4.02502 14.6852 4.15141 14.9473 4.40419C15.2102 4.65697 15.3417 4.96808 15.3417 5.33752V13.3875L17.3542 11.3459C17.607 11.1125 17.9231 11.0009 18.3027 11.011C18.6815 11.0204 18.9875 11.1417 19.2208 11.375C19.4736 11.6278 19.6 11.9389 19.6 12.3084C19.6 12.6778 19.4736 12.9889 19.2208 13.2417L14.9333 17.5292C14.7972 17.6653 14.6514 17.7625 14.4958 17.8209C14.3403 17.8792 14.175 17.9084 14 17.9084ZM6.85418 23.7709C6.11529 23.7709 5.4884 23.513 4.97351 22.9974C4.45785 22.4825 4.20001 21.8556 4.20001 21.1167V18.5209C4.20001 18.1514 4.33146 17.8403 4.59435 17.5875C4.85646 17.3347 5.17223 17.2084 5.54168 17.2084C5.91112 17.2084 6.22223 17.3347 6.47501 17.5875C6.72779 17.8403 6.85418 18.1514 6.85418 18.5209V21.1167H21.1167V18.5209C21.1167 18.1514 21.2481 17.8403 21.511 17.5875C21.7731 17.3347 22.0889 17.2084 22.4583 17.2084C22.8278 17.2084 23.1389 17.3347 23.3917 17.5875C23.6445 17.8403 23.7708 18.1514 23.7708 18.5209V21.1167C23.7708 21.8556 23.513 22.4825 22.9973 22.9974C22.4825 23.513 21.8556 23.7709 21.1167 23.7709H6.85418Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
