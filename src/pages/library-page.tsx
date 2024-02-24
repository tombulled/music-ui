import { Stack, ToggleButton, ToggleButtonGroup, MenuItem, Select } from "@mui/material";
import { Chip } from "@mui/material-next";
import Grid from "@mui/material/Unstable_Grid2";
import Album from "../components/album/album";
import Spacer from "../components/spacer";

export const LibraryPage = () => {
  return (
    <Stack
      direction="column"
      sx={{
        p: { xs: 2, sm: 3, md: 4 }
      }}
      spacing={2}
    >
      <Stack
        direction="row"
        spacing={2}
        px={{ xs: 1, sm: 1.5, md: 2 }}
      >
        <Chip label="Songs" onClick={() => { }} disabled />
        <Chip label="Albums" onClick={() => { }} disabled />
        <Chip label="Artists" onClick={() => { }} disabled />
        {/* <ToggleButtonGroup size="small" value="albums">
          <ToggleButton value="songs">Songs</ToggleButton>
          <ToggleButton value="albums">Albums</ToggleButton>
          <ToggleButton value="artists">Artists</ToggleButton>
        </ToggleButtonGroup> */}
        <Spacer />
        <Select value="foo" size="small" disabled>
          <MenuItem value="foo">Recently saved</MenuItem>
          <MenuItem value="bar">A to Z</MenuItem>
          <MenuItem value="baz">Z to A</MenuItem>
        </Select>
      </Stack>

      <Grid
        container
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        rowSpacing={{ xs: 2, sm: 3, md: 4 }}
      >
        {Array.from(Array(30).keys()).map(i => (
          <Grid key={i} xs={6} sm={4} md={3} lg={2}>
            <Album
              title="Room To Breathe"
              subtitle="Album"
              height="100%"
              width="100%"
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default LibraryPage;
