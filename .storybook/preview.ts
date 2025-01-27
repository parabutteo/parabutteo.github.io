import type { Preview } from "@storybook/react";
import i18n from '../src/app/i18n/i18n';
import "../src/app/styles/common.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n,
  },
};

export default preview;
