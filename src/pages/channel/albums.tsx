import { useState } from "react"
import { useLocation } from "react-router-dom"
import { ALBUMS } from "../../test-data"
import Grid from "@mui/material/Unstable_Grid2"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

type AlbumType = "Album" | "EP" | "Single" | "Playlist"

interface Thumbnail {
  height: number
  width: number
  url: string
}

interface Album {
  browse_id: string
  playlist_id: string
  title: string
  type: AlbumType
  year: number | null
  thumbnails: Thumbnail[]
}

export const ChannelAlbumsPage = () => {
  const location = useLocation()

  const path: string = location.pathname
  const channelId: string = path.split("/")[2]

  const [albums, setAlbums] = useState<Album[] | null>(null)

  if (albums === null) {
    //   fetch(`http://127.0.0.1:8081/channel/${channelId}/albums`)
    //     .then(response => response.json())
    //     .then(albums => setAlbums(albums))
    setAlbums(ALBUMS)
  }

  if (albums === null) {
    return null
  }

  return (
    <Grid container spacing={2} sx={{m: 2}}>
      {albums.map(album => (
        <Grid key={album.browse_id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={album.thumbnails[album.thumbnails.length - 1].url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {album.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {album.type} - {album.year}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ChannelAlbumsPage