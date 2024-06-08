import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";
import { Album } from "../../types";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "4px", transform: "scale(1.2)" }}
  >
    •
  </Box>
);

export interface AlbumCardProps {
  album: Album;
}

export const AlbumCard = (props: AlbumCardProps) => {
  // Props
  const album: Album = props.album;

  // Derived from Props
  const albumHref: string = `/album/${album.id}`;
  const artworkUrl = album.artwork[album.artwork.length - 1].url;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "10px",
        padding: 1,
        ":hover": {
          backgroundColor: grey[200],
        },
      }}
    >
      <Link component={RouterLink} to={albumHref}>
        <CardMedia
          component="img"
          image={artworkUrl}
          sx={{
            borderRadius: "10px",
          }}
        />
      </Link>
      <CardContent sx={{ px: 0, py: 1, "&:last-child": { pb: 0 } }}>
        <Link
          component={RouterLink}
          to={albumHref}
          variant="subtitle1"
          color="primary"
        >
          {album.name}
        </Link>
        <Typography variant="subtitle2" color="text.secondary">
          {album.year}{bull}{album.type}{bull}{album.artists[0].name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
