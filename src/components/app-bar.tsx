import { AppBar, Link, Toolbar } from "@mui/material";
import Spacer from "./spacer";
import MusixAppBarSearch from "./app-bar-search";

export const MusixAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" variant="h6" sx={{ mr: 2, color: "white" }}>
          Music
        </Link>
        <Spacer />
        {/* <MusixAppBarSearch /> */}
      </Toolbar>
    </AppBar>
  );
}

export default MusixAppBar;
