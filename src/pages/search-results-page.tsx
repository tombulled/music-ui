import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Album } from "../types";
import MusixAlbum from "../components/album/album";

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
          <MusixAlbum album={album} hideType />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResultsPage;
