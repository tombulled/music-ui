import { Stack } from "@mui/material"
import ChannelIdForm from "../components/channel-id-form"
import GoToAlbum from "../components/go-to-album"

export const HomePage = () => {
  return (
    <Stack direction="column" p={5} spacing={5}>
      <ChannelIdForm />
      <GoToAlbum />
    </Stack>
  )
}

export default HomePage
