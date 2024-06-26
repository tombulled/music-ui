import type { Preview } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <Story />
    </MemoryRouter>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
