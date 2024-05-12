import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Spacer from "../spacer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

export interface ArtistPageHeaderProps {
  image: string
}

export const ArtistPageHeader = (props: ArtistPageHeaderProps) => {
  return (
    <Stack direction="row" spacing={5}>
      <img
        src={props.image}
        style={{
          height: "270px",
          width: "270px",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
      <Stack direction="column" sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", marginTop: "auto", marginBottom: "auto" }}>
            <Typography variant="h4">
              {"Aquilo"}
            </Typography>
            <Typography variant="body1" sx={{ textDecoration: "none" }}>
              {"Aquilo, consisting of Ben Fletcher and Tom Higham, grew up in Silverdale, a coastal Lake District village in the North of England."}
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            size="small"
            startIcon={<PlayArrowIcon />}
          >
            Play
          </Button>
          <Spacer />
          <IconButton size="small" color="primary">
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ArtistPageHeader;
