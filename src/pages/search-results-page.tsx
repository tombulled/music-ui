import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import _ from "lodash";
import { PropsWithChildren } from "react";
import { useSearchParams } from "react-router-dom";
import AlbumCardSkeleton from "../components/album/album-card-skeleton/album-card-skeleton";
import { Album } from "../types";
import AlbumCard from "../components/album/album-card/album-card";
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

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const GridItem = ({ children }: PropsWithChildren) => (
    <Grid xs={6} sm={4} md={3} lg={2} overflow="hidden">
      {children}
    </Grid>
  );

  return (
    <Grid
      container
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {isPending
        ? _.times(10, (index) => (
            <GridItem key={index}>
              <AlbumCardSkeleton />
            </GridItem>
          ))
        : albums.map((album) => (
            <GridItem>
              <AlbumCard album={album} />
            </GridItem>
          ))}
    </Grid>
  );
};

export default SearchResultsPage;
