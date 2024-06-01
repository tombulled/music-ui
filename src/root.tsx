import { Box, Stack } from "@mui/material";
import { Outlet, RouterProvider } from "react-router-dom";
import MusixAppBar from "./components/app-bar";
import { router } from "./router";

export const Root = () => {
  return (
    <Stack direction="column" sx={{ height: "100%", width: "100%" }}>
      <MusixAppBar />
      <Box sx={{ flexGrow: 1 }}>
        {/* <RouterProvider router={router} /> */}
        {/* <p>Hello, World!</p> */}
        <Outlet />
      </Box>
    </Stack>
  );
};

export default Root;
