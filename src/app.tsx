import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import MusixAppBar from "./components/app-bar";
import { grey } from "@mui/material/colors";

export const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MusixAppBar />
      <Box>
        <RouterProvider router={router} />
      </Box>
    </Box>
  );
};

export default App;
