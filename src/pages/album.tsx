import { Box, Button, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { PLAYLIST } from "../test-data"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { useLocation } from "react-router-dom"
import { useState } from "react"

enum AlbumType {
  Album = "Album",
  EP = "EP",
  Single = "Single",
}

interface Image {
  height: number
  width: number
  url: string
}

interface Artist {
  id: string | null
  name: string
}

interface AlbumTrack {
  id: string
  name: string
  duration: string
}

interface Album {
  id: string
  name: string
  type: AlbumType
  artist: Artist
  year: number
  description: string | null
  artwork: Image[]
  tracks: AlbumTrack[]
}

const Spacer = () => <Box flexGrow={1} />

export const AlbumPage = () => {
  const location = useLocation()

  const path: string = location.pathname
  const albumId: string = path.split("/")[2]

  const [album, setAlbum] = useState<Album | null>(null)

  if (album === null) {
    fetch(`http://127.0.0.1:8081/album/${albumId}`)
      .then(response => response.json())
      .then(album => setAlbum(album))
    // setAlbum(PLAYLIST)
    return null
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
            <Box sx={{ width: "100%", marginTop: "auto", marginBottom: "auto" }}>
              <Typography variant="h4">
                {album.name}
              </Typography>
              <Link href={`/artist/${album.artist.id}`} variant="h5" sx={{textDecoration: "none"}}>
                {album.artist.name}
              </Link>
              <Typography variant="body1">
                {album.description}
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
  )
}

export default AlbumPage
