import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { pinkTheme } from "./pinkTheme";

export const AppTheme = ({ children }) => {
 return (
  <ThemeProvider theme={pinkTheme}>
   <CssBaseline />

   {children}
  </ThemeProvider>
 );
};
