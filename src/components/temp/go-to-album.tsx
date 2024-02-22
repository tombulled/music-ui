import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GoToAlbum = () => {
  const navigate = useNavigate()
  
  const [albumId, setAlbumId] = useState<string>("")

  const onSubmit = () => {
    navigate(`/album/${albumId}`)
  }

  return (
    <Box>
      <Typography>
        Go to Album
      </Typography>

      <TextField
        label="Album ID"
        variant="outlined"
        onChange={event => setAlbumId(event.target.value)}
      />

      <Button onClick={onSubmit}>Submit</Button>
    </Box>
  )
}

export default GoToAlbum
