import { Box, Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { ALBUM_THUMBNAIL } from "../test-data"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

const Spacer = () => <Box flexGrow={1} />

export const AlbumPage = () => {
  return (
    <Stack direction="column" p={5} spacing={5}>
      <Stack direction="row" spacing={5}>
        <img
          src={ALBUM_THUMBNAIL}
          style={{
            height: "270px",
            width: "270px",
            borderRadius: "10px",
          }}
        />
        <Stack direction="column" sx={{ flexGrow: 1 }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", marginTop: "auto", marginBottom: "auto" }}>
              <Typography variant="h5">Philophobia</Typography>
              <Typography variant="h5" color="primary">Amber Run</Typography>
              <Typography variant="subtitle2">ALTERNATIVE - 2019</Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="small" startIcon={<PlayArrowIcon />}>
              Play
            </Button>
            <Spacer />
            <IconButton size="small" color="primary">
              <MoreHorizIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <List>
        {["Leader Countdown", "Neon Circus", "No One Gets Out Alive"].map((song, index) => (
          <ListItem
            key={index}
            disablePadding
            secondaryAction={
              <IconButton edge="end">
                <MoreHorizIcon />
              </IconButton>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Typography>{index + 1}</Typography>
              </ListItemIcon>
              <ListItemText primary={song} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default AlbumPage
