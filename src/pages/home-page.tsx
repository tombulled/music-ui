import { Box, Chip, Stack, Typography } from "@mui/material"
import ChannelIdForm from "../components/temp/channel-id-form"
import GoToAlbum from "../components/temp/go-to-album"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const navigate = useNavigate()
  
  return (
    <Stack direction="column" p={5} spacing={5}>
      <ChannelIdForm />
      <GoToAlbum />
      <Box>
        <Typography>Channels</Typography>
        <Stack direction="row" spacing={2}>
          <Chip label="Amber Run" onClick={() => navigate("/channel/UCMO-CgAtd1jI2m2CrXcP2sQ")} />
          <Chip label="Aquilo" onClick={() => navigate("/channel/UCItuxDxh9AO1P2Miiso_0tg")} />
          <Chip label="Arctic Monkeys" onClick={() => navigate("/channel/UC8Yu1_yfN5qPh601Y4btsYw")} />
        </Stack>
      </Box>
      <Box>
        <Typography>Albums</Typography>
        <Stack direction="row" spacing={2}>
          <Chip label="Philophobia" onClick={() => navigate("/album/OLAK5uy_k-nVhxfuIQFO2ZE9EvqPKKM4__S3aOb_Y")} />
          <Chip label="Silhouettes" onClick={() => navigate("/album/OLAK5uy_khNLsz9s6ueH8YHdzORuy4PORu6tWvMrY")} />
        </Stack>
      </Box>
    </Stack>
  )
}

export default HomePage
