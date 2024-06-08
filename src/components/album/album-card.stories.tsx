import { ThemeProvider } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { ALBUM_3 } from "../../test-data";
import { theme } from "../../theme";
import AlbumCard from "./album-card";

const meta: Meta<typeof AlbumCard> = {
  title: "Album Card",
  component: AlbumCard,
};

export default meta;
type Story = StoryObj<typeof AlbumCard>;

export const Primary: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ width: "215px" }}>
        <AlbumCard album={ALBUM_3} />
      </div>
    </ThemeProvider>
  ),
};
