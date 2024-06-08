import { Stack, ToggleButton, ToggleButtonGroup, MenuItem, Select, Box, Link } from "@mui/material";
import { Chip } from "@mui/material-next";
import Grid from "@mui/material/Unstable_Grid2";
import MusixAlbum from "../components/album/album";
import Spacer from "../components/spacer";
import { Album, ShortArtist } from "../types";
import { AlbumType } from "../enums";
import { useAppSelector } from "../app/hooks";
import { selectLibraryAlbums } from "../state/library";
import AlbumCard from "../components/album/album-card";

// // Artists
// const ARTIST_AQUILO: ShortArtist = {
//   id: "UCItuxDxh9AO1P2Miiso_0tg",
//   name: "Aquilo",
// }

// const LIBRARY_ALBUMS: Album[] = [
//   // Aquilo
//   {
//     id: "MPREb_vKw4Fd9gh9I",
//     name: "A Safe Place To Be",
//     artists: [ARTIST_AQUILO],
//     year: 2021,
//     type: AlbumType.Album,
//     artwork: [
//       {
//         width: 544,
//         height: 544,
//         url: "/sample/album.png",
//         // url: "https://lh3.googleusercontent.com/0P7O4MwnfvioWlJHK0SWpUNnuTS84ocKALc_QWc3-iRPqjSo1SXLdhjffYeRbua_6jEsibsKZqj4lQBnpg=w544-h544-l90-rj",
//       },
//     ],
//   },
//   {
//     id: "MPREb_OwIRC1XI65e",
//     name: "ii (Reworks)",
//     artists: [ARTIST_AQUILO],
//     year: 2018,
//     type: AlbumType.Album,
//     artwork: [
//       {
//         width: 1200,
//         height: 1200,
//         url: "/sample/album.png",
//         // url: "https://lh3.googleusercontent.com/rL9MUSE1mM6lzKRFK1XUI0FBVwkMTenF8aD-ouiGg_59CzroeVa3XckghI9KSZ6jDLkeAi_2PPAY2GI=w544-h544-l90-rj",
//       },
//     ],
//   },
//   {
//     id: "MPREb_XEoOYtkwx3X",
//     name: "ii",
//     artists: [ARTIST_AQUILO],
//     year: 2017,
//     type: AlbumType.Album,
//     artwork: [
//       {
//         width: 1200,
//         height: 1200,
//         url: "/sample/album.png",
//         // url: "https://lh3.googleusercontent.com/8n5aw6RqUbj_wTmxBmR3K0UalR2dvGZiYgoBWZ_SNjLykIa0WuR92PJggqnZTfhI8isIPjJTNwuw5ZXiGw=w544-h544-l90-rj",
//       },
//     ],
//   },
//   {
//     id: "MPREb_eHA1ouWw7fU",
//     name: "Silhouettes",
//     artists: [ARTIST_AQUILO],
//     year: 2017,
//     type: AlbumType.Album,
//     artwork: [
//       {
//         width: 1200,
//         height: 1200,
//         url: "/sample/album.png",
//         // url: "https://lh3.googleusercontent.com/tmSfq1JAnBrQWmgT3jMEoxf9f4rc3LQ8niHcka_CTgQ8-u2DRMULoS2FFiDIja_N-0P08m5bPKHnlxY5Zw=w544-h544-l90-rj",
//       },
//     ],
//   },
//   {
//     id: "MPREb_jidnV9IQWEC",
//     name: "Midnight (Live EP)",
//     artists: [ARTIST_AQUILO],
//     year: 2016,
//     type: AlbumType.Album,
//     artwork: [
//       {
//         width: 1200,
//         height: 1200,
//         url: "/sample/album.png",
//         // url: "https://lh3.googleusercontent.com/qtlSk3ArpvNpLhCar9LCb_cv5wwCCqG1ZlFORXqKarbbzWQZEMFRohgWT1-pfQC5owe2ebrbFfxOzt-_=w544-h544-l90-rj",
//       },
//     ],
//   },
//   {
//     id: "MPREb_XFFIeGiBHtn",
//     name: "Calling Me",
//     artists: [ARTIST_AQUILO],
//     year: 2015,
//     type: AlbumType.Album,
//     artwork: [
//       {
//         width: 1200,
//         height: 1200,
//         url: "/sample/album.png",
//         // url: "https://lh3.googleusercontent.com/DzUugHIKg-aFMvTjXKjhNZ-eEcDYWFdZWJNxTLjx6An8or2WQ0n1CuLR856iDBlEAX8r7Ezg5x5qKq4=w544-h544-l90-rj",
//       },
//     ],
//   },
// ]

export const LibraryPage = () => {
  const albums: Album[] = useAppSelector(selectLibraryAlbums);

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
        {/* <Chip label="Songs" onClick={() => { }} disabled />
        <Chip label="Albums" onClick={() => { }} disabled />
        <Chip label="Artists" onClick={() => { }} disabled /> */}
        <Spacer />
        <Select value="foo" size="small" disabled>
          <MenuItem value="foo">Recently saved</MenuItem>
          <MenuItem value="bar">A to Z</MenuItem>
          <MenuItem value="baz">Z to A</MenuItem>
        </Select>
      </Stack>

      <Grid
        container
        // columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        // rowSpacing={{ xs: 2, sm: 3, md: 4 }}
        // height="250px"
      >
        {albums.map(album => (
          <Grid key={album.id} xs={6} sm={4} md={3} lg={2} overflow="hidden">
            {/* <div
              style={{
                height: "168px",
                width: "100%",
                backgroundColor: "pink"
              }}
            /> */}
            <AlbumCard album={album} />
            {/*<MusixAlbum
              album={album}
              hideType
              // id={album.id}
              // title={(
              //   <Link href={`/album/${album.id}`} sx={{ textDecoration: "none" }}>
              //     {album.name}
              //   </Link>
              // )}
              // subtitle={(
              //   <Link href={`/artist/${album.artist.id}`} sx={{ textDecoration: "none", color: "inherit" }}>
              //     {album.artist.name}
              //   </Link>
              // )}
              // artwork={album.artwork}
              // height="100%"
              // width="100%"
          // />*/}
          </Grid>
        ))}
      </Grid>

      {/* <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      /> */}
    </Stack>
  );
}

export default LibraryPage;
