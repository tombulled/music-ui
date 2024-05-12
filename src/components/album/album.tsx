import { Link, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export interface AlbumProps {
  title?: JSX.Element | string
  subtitle?: JSX.Element | string
  artwork?: string
}

export const Album = (props: AlbumProps) => {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: grey[200],
        borderRadius: "10px",
        width: "max-content",
        padding: 2,
      }}
    >
      <img
        src={props.artwork}
        height="168px"
        width="168px"
        style={{
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />
      {props.title && (
        <Link href="#" variant="subtitle1" sx={{ textDecoration: "none" }}>
          {props.title}
        </Link>
      )}
      {props.subtitle && (
        <Typography variant="subtitle2">
          {props.subtitle}
        </Typography>
      )}
    </Stack>
  );
}

export default Album;
