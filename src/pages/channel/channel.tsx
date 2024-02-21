import { Box, Button, IconButton, Link, Stack, Typography } from "@mui/material";
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { CHANNEL } from "../../test-data"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

interface Thumbnail {
  height: number
  width: number
  url: string
}

interface Channel {
  id: string
  title: string
  description: string
  thumbnails: Thumbnail[]
}

const Spacer = () => <Box flexGrow={1} />

export const ChannelPage = () => {
  const location = useLocation()

  const path: string = location.pathname
  const channelId: string = path.split("/")[2]

  const [channel, setChannel] = useState<Channel | null>(null)

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
      <Stack direction="row" spacing={5}>
        <img
          src={thumbnail.url}
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
                {channel.title}
              </Typography>
              <Typography variant="body1" sx={{textDecoration: "none"}}>
                {channel.description}
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
    </Stack>
  )
}

export default ChannelPage
