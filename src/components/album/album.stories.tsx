import { ThemeProvider } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { ALBUM_3 } from "../../test-data";
import { theme } from "../../theme";
import MusixAlbum from "./album";

const meta: Meta<typeof MusixAlbum> = {
  title: "Album",
  component: MusixAlbum,
};

export default meta;
type Story = StoryObj<typeof MusixAlbum>;

export const Primary: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ width: "168px" }}>
        <MusixAlbum album={ALBUM_3} />
      </div>
    </ThemeProvider>
  ),
};

// export const HideType: Story = {
//   render: () => (
//     <ThemeProvider theme={theme}>
//       <div style={{ width: "168px" }}>
//         <MusixAlbum album={ALBUM_3} hideType />
//       </div>
//     </ThemeProvider>
//   ),
// };
