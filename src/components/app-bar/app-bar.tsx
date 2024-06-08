import { AppBar, IconButton, Toolbar, Link } from "@mui/material";
import Spacer from "../utils/spacer";
import MusixAppBarSearch from "./app-bar-search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export const MusixAppBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          variant="h6"
          sx={{ mr: 2, color: "white" }}
          component={RouterLink}
          to="/"
        >
          Music
        </Link>
        <Spacer />
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={() => navigate("/library")}
        >
          <LibraryMusicIcon />
        </IconButton>
        {/* <MusixAppBarSearch /> */}
      </Toolbar>
    </AppBar>
  );
};

export default MusixAppBar;
