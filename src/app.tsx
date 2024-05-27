import { Box, Stack } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import MusixAppBar from "./components/app-bar";
import { router } from "./router";

export const App = () => {
  return (
    <Stack direction="column" sx={{ height: "100%", width: "100%" }}>
      <MusixAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <RouterProvider router={router} />
      </Box>
    </Stack>
  );
};

export default App;
