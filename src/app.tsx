import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material"
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" variant="h6" sx={{ mr: 2, color: "white" }}>
            Music
          </Link>
          {/* <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Channels
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              BAR
            </Button>
          </Box> */}
        </Toolbar>
      </AppBar>

      <Box>
        <RouterProvider router={router} />
      </Box>
    </Box>
  )
}

export default App