import type { Meta, StoryObj } from "@storybook/react";
import Album from "./album";

const meta: Meta<typeof Album> = {
  title: "Album",
  component: Album,
};

export default meta;
type Story = StoryObj<typeof Album>;

export const Primary: Story = {
  render: () => (
    <Album
      title="A Safe Place To Be"
      // subtitle="Album • 2021"
      subtitle="2021 • Album"
      artwork="/sample/album.png"
    />
  ),
};
