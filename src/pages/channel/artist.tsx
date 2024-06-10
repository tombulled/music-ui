import { Box, Button, IconButton, Link, Stack, Typography } from "@mui/material";
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { ALBUM_3, CHANNEL } from "../../test-data"
import ArtistPageHeader from "../../components/artist/artist-page-header";
import { grey } from "@mui/material/colors";
import AlbumCard from "../../components/album/album-card/album-card";
import Spacer from "../../components/utils/spacer";

interface Thumbnail {
  height: number
  width: number
  url: string
}

interface Artist {
  id: string
  title: string
  description: string
  thumbnails: Thumbnail[]
}

export const ArtistPage = () => {
  const location = useLocation()

  const path: string = location.pathname
  const channelId: string = path.split("/")[2]

  const [channel, setChannel] = useState<Artist | null>(null)

  if (channel === null) {
    // fetch(`http://127.0.0.1:8081/channel/${channelId}`)
    //   .then(response => response.json())
    //   .then(channel => setChannel(channel))
    setChannel(CHANNEL)

    return null
  }

  const thumbnail: Thumbnail = channel.thumbnails[channel.thumbnails.length - 1]

  return (
    <Stack direction="column" p={5} spacing={5}>
      <ArtistPageHeader
        image={thumbnail.url}
      />

      <Stack direction="column" spacing={2}>
        <Stack direction="row" alignItems="center">
          <Link href="#" variant="h5" sx={{ textDecoration: "none", fontWeight: "bold" }}>
            Albums
          </Link>
          <Spacer />
          <Link href="#" variant="subtitle2" sx={{ textDecoration: "none", fontWeight: "bold" }}>
            Show all
          </Link>
        </Stack>

        <Stack direction="row" spacing={2}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{width: "168px"}}>
              <AlbumCard
                // title="A Safe Place To Be"
                // // subtitle="Album • 2021"
                // artwork="/sample/album.png"
                album={ALBUM_3}
                hideArtists
              />
            </div>
          ))}
        </Stack>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Stack direction="row" alignItems="center">
          <Link href="#" variant="h5" sx={{ textDecoration: "none", fontWeight: "bold" }}>
            Similar Artists
          </Link>
          <Spacer />
          <Link href="#" variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Show all
          </Link>
        </Stack>

        <Stack direction="row" spacing={2}>
          {[1, 2, 3, 4].map(i => (
            <Stack key={i} direction="column" p={2} sx={{ backgroundColor: grey[100], borderRadius: "10px", alignItems: "center" }}>
              <img
                src="https://m.media-amazon.com/images/I/51l3v2RMiMS._SX354_SY354_BL0_QL100_.jpg"
                height="168px"
                width="168px"
                style={{
                  borderRadius: "100%",
                  marginBottom: "10px",
                }}
              />
              <Link href="#" variant="subtitle1" sx={{ textDecoration: "none" }}>
                SYML
              </Link>
              {/* <Typography variant="subtitle2">
                Artist
              </Typography> */}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ArtistPage
