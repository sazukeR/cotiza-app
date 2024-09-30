import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const pinkTheme = createTheme({

  palette: {
        primary: {
          main: "#03050F"
        },
        secondary: {
          main: "#FF1C44"
        },
        error: {
          main: red.A400
        }
  }
})