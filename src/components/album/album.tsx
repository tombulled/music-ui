import { Link, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const TEMP_IMAGE_URL: string = "https://m.media-amazon.com/images/I/51l3v2RMiMS._SX354_SY354_BL0_QL100_.jpg";

export interface AlbumProps {
  title: string
  subtitle: string
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
        src={TEMP_IMAGE_URL}
        height="168px"
        width="168px"
        style={{
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />
      <Link href="#" variant="subtitle1" sx={{ textDecoration: "none" }}>
        {props.title}
      </Link>
      <Typography variant="subtitle2">
        {props.subtitle}
      </Typography>
    </Stack>
  );
}

export default Album;
