import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import MusixAppBar from "./components/app-bar/app-bar";
import SnackBar from "./components/snackbar/snackbar";

export const Root = () => (
  <Stack direction="column" sx={{ height: "100%", width: "100%" }}>
    <MusixAppBar />
    <Box sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
    <SnackBar />
  </Stack>
);

export default Root;
