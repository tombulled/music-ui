import Grid from "@mui/material/Unstable_Grid2";
import MusixAlbum from "../components/album/album";
import { AlbumType } from "../enums";
import { Album, ShortAlbum, ShortArtist } from "../types";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

// Artists
const ARTIST_AQUILO: ShortArtist = {
  id: "UCItuxDxh9AO1P2Miiso_0tg",
  name: "Aquilo",
};

const ALBUMS: Album[] = [
  // Aquilo
  {
    id: "MPREb_vKw4Fd9gh9I",
    name: "A Safe Place To Be",
    artist: ARTIST_AQUILO,
    year: 2021,
    type: AlbumType.Album,
    artwork: [
      {
        width: 544,
        height: 544,
        url: "https://lh3.googleusercontent.com/0P7O4MwnfvioWlJHK0SWpUNnuTS84ocKALc_QWc3-iRPqjSo1SXLdhjffYeRbua_6jEsibsKZqj4lQBnpg=w544-h544-l90-rj",
      },
    ],
  },
  {
    id: "MPREb_OwIRC1XI65e",
    name: "ii (Reworks)",
    artist: ARTIST_AQUILO,
    year: 2018,
    type: AlbumType.Album,
    artwork: [
      {
        width: 1200,
        height: 1200,
        url: "https://lh3.googleusercontent.com/rL9MUSE1mM6lzKRFK1XUI0FBVwkMTenF8aD-ouiGg_59CzroeVa3XckghI9KSZ6jDLkeAi_2PPAY2GI=w544-h544-l90-rj",
      },
    ],
  },
  {
    id: "MPREb_XEoOYtkwx3X",
    name: "ii",
    artist: ARTIST_AQUILO,
    year: 2017,
    type: AlbumType.Album,
    artwork: [
      {
        width: 1200,
        height: 1200,
        url: "https://lh3.googleusercontent.com/8n5aw6RqUbj_wTmxBmR3K0UalR2dvGZiYgoBWZ_SNjLykIa0WuR92PJggqnZTfhI8isIPjJTNwuw5ZXiGw=w544-h544-l90-rj",
      },
    ],
  },
  {
    id: "MPREb_eHA1ouWw7fU",
    name: "Silhouettes",
    artist: ARTIST_AQUILO,
    year: 2017,
    type: AlbumType.Album,
    artwork: [
      {
        width: 1200,
        height: 1200,
        url: "https://lh3.googleusercontent.com/tmSfq1JAnBrQWmgT3jMEoxf9f4rc3LQ8niHcka_CTgQ8-u2DRMULoS2FFiDIja_N-0P08m5bPKHnlxY5Zw=w544-h544-l90-rj",
      },
    ],
  },
  {
    id: "MPREb_jidnV9IQWEC",
    name: "Midnight (Live EP)",
    artist: ARTIST_AQUILO,
    year: 2016,
    type: AlbumType.Album,
    artwork: [
      {
        width: 1200,
        height: 1200,
        url: "https://lh3.googleusercontent.com/qtlSk3ArpvNpLhCar9LCb_cv5wwCCqG1ZlFORXqKarbbzWQZEMFRohgWT1-pfQC5owe2ebrbFfxOzt-_=w544-h544-l90-rj",
      },
    ],
  },
  {
    id: "MPREb_XFFIeGiBHtn",
    name: "Calling Me",
    artist: ARTIST_AQUILO,
    year: 2015,
    type: AlbumType.Album,
    artwork: [
      {
        width: 1200,
        height: 1200,
        url: "https://lh3.googleusercontent.com/DzUugHIKg-aFMvTjXKjhNZ-eEcDYWFdZWJNxTLjx6An8or2WQ0n1CuLR856iDBlEAX8r7Ezg5x5qKq4=w544-h544-l90-rj",
      },
    ],
  },
];

const search = async (
  query: string | null,
  abortSignal?: AbortSignal
): Promise<Album[]> => {
  if (query === null) return [];

  const response = await axios.get(
    `http://localhost:8080/search/albums?q=${query}`,
    {
      signal: abortSignal,
    }
  );

  return response.data;
};

// const search2 = async (
//   query: string | null,
//   abortSignal?: AbortSignal
// ): Promise<ShortAlbum[]> => {
//   if (query === null) {
//     return [];
//   }

//   return axios
//     .get(`http://localhost:8080/search/albums?q=${query}`, {
//       signal: abortSignal,
//     })
//     .then((response) => response.data);
// };

export const SearchResultsPage = () => {
  // Query Params
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const {
    isPending,
    isError,
    data: albums,
    error,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: ({ signal }) => search(query, signal),
    // queryFn: ({ signal }) =>
    //   query !== null
    //     ? axios
    //         .get(`http://localhost:8080/search/albums?q=${query}`, { signal })
    //         .then((response) => response.data)
    //     : [],
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Grid
      container
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {albums.map((album) => (
        <Grid key={album.id} xs={6} sm={4} md={3} lg={2} overflow="hidden">
          {/* <MusixAlbum album={album} hideType /> */}
          <p>{album.name}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResultsPage;
