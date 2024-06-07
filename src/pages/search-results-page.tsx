import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Album } from "../types";
import MusixAlbum from "../components/album/album";
import { Box, CircularProgress } from "@mui/material";
import MusixAlbumSkeleton from "../components/album/album-skeleton";
import _ from "lodash";
import AlbumCard from "../components/album/album-card";
import { ALBUM_3 } from "../test-data";

const search = async (
  query: string | null,
  abortSignal?: AbortSignal
): Promise<Album[]> => {
  if (query === null) return [];

  const response = await axios.get(
    `https://music-api.tom.lan/search/albums?q=${query}`,
    {
      signal: abortSignal,
    }
  );

  return response.data;
};

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
  });

  // if (isPending) {
  // return (
  //   <CircularProgress sx={{ m: "auto" }} />
  // );
  return (
    <Grid
      container
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
      }}
      spacing={2}
    >
      {_.times(1, (index) => (
        <Grid key={index} xs={6} sm={4} md={3} lg={2} overflow="hidden">
          <MusixAlbum album={ALBUM_3} />
        </Grid>
      ))}
      {_.times(1, (index) => (
        <Grid key={index} xs={6} sm={4} md={3} lg={2} overflow="hidden">
          <AlbumCard />
        </Grid>
      ))}
      {_.times(1, (index) => (
        <Grid key={index} xs={6} sm={4} md={3} lg={2} overflow="hidden">
          <MusixAlbumSkeleton />
        </Grid>
      ))}
    </Grid>
  );
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }

  // return (
  //   <Grid
  //     container
  //     sx={{
  //       p: { xs: 2, sm: 3, md: 4 },
  //     }}
  //   >
  //     {albums.map((album) => (
  //       <Grid key={album.id} xs={6} sm={4} md={3} lg={2} overflow="hidden">
  //         <MusixAlbum album={album} hideType={false} />
  //       </Grid>
  //     ))}
  //   </Grid>
  // );
};

export default SearchResultsPage;
