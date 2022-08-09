import { Config } from '@stencil/core';

export const config: Config = {
  namespace: "swirl-components",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      file: "components.json",
      type: "docs-json",
    },
  ],
};
