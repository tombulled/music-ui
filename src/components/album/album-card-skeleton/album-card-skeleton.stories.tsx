import { ThemeProvider } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { theme } from "../../../theme";
import AlbumCardSkeleton from "./album-card-skeleton";

const meta: Meta<typeof AlbumCardSkeleton> = {
  title: "Album Card Skeleton",
  component: AlbumCardSkeleton,
};

export default meta;
type Story = StoryObj<typeof AlbumCardSkeleton>;

export const Primary: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ width: "215px" }}>
        <AlbumCardSkeleton />
      </div>
    </ThemeProvider>
  ),
};
