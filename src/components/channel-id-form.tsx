import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChannelIdForm = () => {
  const navigate = useNavigate()
  
  const [channelId, setChannelId] = useState<string>("")

  const onSubmit = () => {
    navigate(`/channel/${channelId}`)
  }

  return (
    <Box>
      <Typography>
        Go to Channel
      </Typography>

      <TextField
        label="Channel ID"
        variant="outlined"
        onChange={event => setChannelId(event.target.value)}
      />

      <Button onClick={onSubmit}>Submit</Button>
    </Box>
  )
}

export default ChannelIdForm
