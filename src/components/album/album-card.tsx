import { Box, Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(1.2)" }}
  >
    •
  </Box>
);

export const AlbumCard = () => {
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
      <CardMedia
        component="img"
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        sx={{ borderRadius: "10px" }}
      />
      <CardContent sx={{ p: 1 }}>
        <Link href="#" variant="subtitle1" color="primary">
          Live From Space
        </Link>
        <Typography variant="subtitle2" color="text.secondary">
          2021 {bull} Album {bull} Mac Miller
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
