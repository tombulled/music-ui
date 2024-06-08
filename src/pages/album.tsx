import LaunchIcon from "@mui/icons-material/Launch";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../state/hooks";
import { addAlbum } from "../state/slices/library";
import Spacer from "../components/utils/spacer";

enum AlbumType {
  Album = "Album",
  EP = "EP",
  Single = "Single",
}

interface Image {
  height: number;
  width: number;
  url: string;
}

interface Artist {
  id: string | null;
  name: string;
}

interface AlbumTrack {
  id: string;
  name: string;
  duration: string;
}

interface Album {
  id: string;
  name: string;
  type: AlbumType;
  artists: Artist[];
  year: number;
  description: string | null;
  artwork: Image[];
  tracks: AlbumTrack[];
}

const get_album = async (
  albumId: string | undefined,
  abortSignal?: AbortSignal
): Promise<Album | undefined> => {
  if (albumId === undefined) return undefined;

  const response = await axios.get(
    `https://music-api.tom.lan/album/${albumId}`,
    {
      signal: abortSignal,
    }
  );

  return response.data;
};

export const AlbumPage = () => {
  const dispatch = useAppDispatch();

  const { id: albumId } = useParams();

  const {
    isPending,
    isError,
    data: album,
    error,
  } = useQuery({
    queryKey: ["album", albumId],
    queryFn: ({ signal }) => get_album(albumId, signal),
  });

  if (isPending) {
    return <CircularProgress sx={{ m: "auto" }} />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (album === undefined) {
    return <span>Bug: album is undefined</span>;
  }

  return (
    <Stack direction="column" p={5} spacing={5}>
      <Stack direction="row" spacing={5}>
        <img
          src={album.artwork[album.artwork.length - 1].url}
          style={{
            height: "270px",
            width: "270px",
            borderRadius: "10px",
          }}
        />
        <Stack direction="column" sx={{ flexGrow: 1 }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Box
              sx={{ width: "100%", marginTop: "auto", marginBottom: "auto" }}
            >
              <Typography variant="h4">{album.name}</Typography>
              {album.artists.map((artist, index) => (
                <Fragment key={index}>
                  {index > 0 && <span style={{ marginRight: "5px" }}>,</span>}
                  <Link
                    href={`/artist/${artist.id}`}
                    variant="h5"
                    sx={{ textDecoration: "none" }}
                  >
                    {artist.name}
                  </Link>
                </Fragment>
              ))}
              <Typography variant="body1">{album.description}</Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="small"
              startIcon={<PlayArrowIcon />}
              disabled
            >
              Play
            </Button>
            <Button
              variant="contained"
              size="small"
              startIcon={<LibraryAddIcon />}
              onClick={() => dispatch(addAlbum(album))}
            >
              Save to Library
            </Button>
            <Button
              variant="contained"
              size="small"
              startIcon={<LaunchIcon />}
              onClick={() =>
                window
                  .open(
                    `https://music.youtube.com/browse/${album.id}`,
                    "_blank"
                  )
                  ?.focus()
              }
            >
              Go to Album
            </Button>
            <Spacer />
            <IconButton size="small" color="primary">
              <MoreHorizIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <List>
        {album.tracks.map((track, index) => (
          <ListItem
            key={index}
            disablePadding
            secondaryAction={
              <Typography>{track.duration}</Typography>
              // <IconButton edge="end">
              //   <MoreHorizIcon />
              // </IconButton>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Typography>{index + 1}</Typography>
              </ListItemIcon>
              <ListItemText primary={track.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default AlbumPage;
