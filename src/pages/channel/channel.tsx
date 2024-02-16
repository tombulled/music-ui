import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CHANNEL } from "../../test-data";

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
  }

  if (channel === null) {
    return null
  }

  const thumbnail: Thumbnail = channel.thumbnails[channel.thumbnails.length - 1]

  return (
    <Box>
      <img
        src={thumbnail.url}
        style={{width: "100%"}}
      />
      <Typography variant="h3">
        {channel.title}
      </Typography>
      <Typography>
        {channel.description}
      </Typography>
    </Box>
  )
}

export default ChannelPage
