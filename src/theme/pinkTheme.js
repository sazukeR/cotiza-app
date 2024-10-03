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
        },
        transparent: {
          main: "#00000000"
        },
        bgcolor1: {
          main: "#FAFBFF"
        },
        purpleLight: {
          main: "#EDEFFC"
        },
        purple: {
          main: "#4F4FFF"
        },
    },
    typography: {
      fontFamily: ["Lato", "Roboto"].join(","),
      
    }
})