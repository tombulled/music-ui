import { Stack } from "@mui/material";
import { Chip } from "@mui/material-next";
import Grid from "@mui/material/Unstable_Grid2";
import Album from "../components/album/album";

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
        pl={{ xs: 1, sm: 1.5, md: 2 }}
      >
        <Chip label="Playlists" onClick={() => { }} />
        <Chip label="Albums" onClick={() => { }} />
        <Chip label="Artists" onClick={() => { }} />
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
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default LibraryPage;
