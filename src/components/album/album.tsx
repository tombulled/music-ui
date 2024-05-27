import { Link, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Album } from "../../types";

export interface AlbumProps {
  album: Album;
  // id?: string;
  // title?: JSX.Element | string;
  // subtitle?: JSX.Element | string;
  // year?: number;
  // artwork?: string;
  // type?: AlbumType;
  // width?: string;
  // height?: string;

  hideType?: boolean;
  hideArtist?: boolean;
}

export const MusixAlbum = (props: AlbumProps) => {
  // Props
  const album: Album = props.album;
  const hideType: boolean = props.hideType ?? false;
  const hideArtist: boolean = props.hideArtist ?? false;

  // Derived from Props
  const albumHref: string = `/album/${album.id}`;
  const artistHref: string = `/artist/${album.artist.id}`;
  // const width: string = props.width ?? "168px";
  // const height: string = props.height ?? "max-content";

  // const subtitleSections: (string | number | undefined)[] = [];

  return (
    <Stack
      direction="column"
      sx={{
        // backgroundColor: grey[200],
        borderRadius: "10px",
        // width: "100%",
        // width: width,
        // height: height,
        // height: "max-content",
        // padding: 2,
        padding: 1,
        // minHeight: 0,
        // minWidth: 0,
        // flexGrow: 1,
        // minWidth: 0,
        ":hover": {
          backgroundColor: grey[200],
        },
      }}
    >
      <a href={albumHref}>
        <img
          src={album.artwork[0].url}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />
      </a>
      <Link href={albumHref} variant="subtitle1">
        {album.name}
      </Link>
      <Stack direction="row" spacing={1}>
        <Typography variant="subtitle2">{album.year}</Typography>
        {!hideType && (
          <>
            <Typography>{"•"}</Typography>
            <Typography variant="subtitle2">{album.type}</Typography>
          </>
        )}
        {!hideArtist && (
          <>
            <Typography>{"•"}</Typography>
            <Link
              variant="subtitle2"
              href={artistHref}
              sx={{ color: "inherit" }}
            >
              {album.artist.name}
            </Link>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default MusixAlbum;
