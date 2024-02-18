import { Box, Button, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { PLAYLIST } from "../test-data"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { useLocation } from "react-router-dom"
import { useState } from "react"

interface Thumbnail {
  height: number
  width: number
  url: string
}

interface PlaylistVideo {
  id: string
  title: string
  thumbnail: Thumbnail[]
  duration: number
}

interface Playlist {
  id: string
  title: string
  thumbnails: Thumbnail[]
  videos: PlaylistVideo[]
}

const Spacer = () => <Box flexGrow={1} />

export const AlbumPage = () => {
  const location = useLocation()

  const path: string = location.pathname
  const albumId: string = path.split("/")[2]

  const [album, setAlbum] = useState<Playlist | null>(null)

  if (album === null) {
    // fetch(`http://127.0.0.1:8081/playlist/${albumId}`)
    //   .then(response => response.json())
    //   .then(album => setAlbum(album))
    setAlbum(PLAYLIST)
    return null
  }

  return (
    <Stack direction="column" p={5} spacing={5}>
      <Stack direction="row" spacing={5}>
        <img
          src={album.thumbnails[album.thumbnails.length - 1].url}
          style={{
            height: "270px",
            width: "270px",
            borderRadius: "10px",
          }}
        />
        <Stack direction="column" sx={{ flexGrow: 1 }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", marginTop: "auto", marginBottom: "auto" }}>
              <Typography variant="h5">
                {album.title}
              </Typography>
              {/* <Link href="#" variant="h5" sx={{textDecoration: "none"}}>
                {album.channel_name}
              </Link> */}
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

      <List>
        {album.videos.map((video, index) => (
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
              <ListItemText primary={video.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default AlbumPage
