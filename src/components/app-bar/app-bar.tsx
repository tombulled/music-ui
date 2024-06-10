import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import LibraryIcon from "@mui/icons-material/LibraryMusic";
import { AppBar, Button, Link, Stack, Toolbar } from "@mui/material";
import { NavLink, Link as RouterLink } from "react-router-dom";
import Spacer from "../utils/spacer";
import MusixAppBarSearch from "./app-bar-search";

export const MusixAppBar = () => (
  <AppBar position="static">
    <Toolbar>
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
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "inherit",
          })}
          to="/"
        >
          <Button sx={{ color: "inherit" }} startIcon={<HomeIcon />}>
            Home
          </Button>
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "inherit",
          })}
          to="/explore"
        >
          <Button sx={{ color: "inherit" }} startIcon={<ExploreIcon />}>
            Explore
          </Button>
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "inherit",
          })}
          to="/library"
        >
          <Button sx={{ color: "inherit" }} startIcon={<LibraryIcon />}>
            Library
          </Button>
        </NavLink>
      </Stack>
      <Spacer />
      <MusixAppBarSearch />
    </Toolbar>
  </AppBar>
);

export default MusixAppBar;
