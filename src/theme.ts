import { createTheme } from "@mui/material";
import { orange, grey, red } from "@mui/material/colors";

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     // main: grey[800],
  //     // main: red[800],
  //     // main: "#ff3a5f",
  //     main: "#d60017"
  //   },
  // },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
