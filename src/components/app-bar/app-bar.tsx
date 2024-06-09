import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import LibraryIcon from "@mui/icons-material/LibraryMusic";
import { AppBar, Button, Link, Stack, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Spacer from "../utils/spacer";
import MusixAppBarSearch from "./app-bar-search";

export const MusixAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      {/* <MusicNote sx={{ display: "flex" }} /> */}
      <Link
        variant="h6"
        noWrap
        component={RouterLink}
        to="/"
        sx={{
          mr: 2,
          color: "inherit",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
        }}
      >
        MUSIX
      </Link>
      <Stack direction="row" spacing={2}>
        <Button
          sx={{ my: 2, color: "white" }}
          startIcon={<HomeIcon />}
          component={RouterLink}
          to="/"
        >
          Home
        </Button>
        <Button
          sx={{ my: 2, color: "white" }}
          startIcon={<ExploreIcon />}
          component={RouterLink}
          to="/explore"
        >
          Explore
        </Button>
        <Button
          sx={{ my: 2, color: "white" }}
          startIcon={<LibraryIcon />}
          component={RouterLink}
          to="library"
        >
          Library
        </Button>
      </Stack>
      <Spacer />
      <MusixAppBarSearch />
    </Toolbar>
  </AppBar>
);

export default MusixAppBar;
