import { useTheme } from "@emotion/react";
import { useAuthStore } from "../hooks/useAuthStore";
import { usePlans } from "../hooks/usePlans";
import { useLocation } from "react-router-dom";

import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export const StepsLargeScreens = () => {
 const theme = useTheme();

 const { startLogout } = useAuthStore();
 const { clearPlans } = usePlans();

 const location = useLocation();

 const currentPath = location.pathname;

 const isOnSpecificPage = currentPath === "/cotiza";

 return (
  <>
   <Box
    display="flex"
    sx={{
     py: "0.5rem",
     justifyContent: "center",
     gap: "1rem",
     width: "100%",
     backgroundColor: theme.palette.purpleLight.main,
    }}
    position="relative"
   >
    <IconButton
     sx={{
      border: "2px solid",
      borderColor: { xs: "#A9AFD9" },
      width: "1.5rem",
      height: "1.5rem",
      color: { xs: isOnSpecificPage ? "white" : "" },
      backgroundColor: { xs: isOnSpecificPage ? "#4F4FFF" : "" },
     }}
    >
     <Typography>1</Typography>
    </IconButton>

    <Typography
     variant="p"
     sx={{ fontSize: "0.7rem", alignSelf: "center", fontWeight: "900" }}
    >
     Planes y coberturas
    </Typography>
    <Typography
     sx={{
      color: { xs: isOnSpecificPage ? "#4F4FFF" : "" },
     }}
    >
     - - - -
    </Typography>
    <IconButton
     sx={{
      border: "2px solid",
      borderColor: { xs: "#A9AFD9" },
      width: "1.5rem",
      height: "1.5rem",
      color: { xs: !isOnSpecificPage ? "white" : "" },
      backgroundColor: { xs: !isOnSpecificPage ? "#4F4FFF" : "" },
     }}
    >
     <Typography>2</Typography>
    </IconButton>
    <Typography
     variant="p"
     sx={{ fontSize: "0.7rem", alignSelf: "center", fontWeight: "900" }}
    >
     Resumen
    </Typography>
   </Box>
   <Box
    sx={{
     position: "absolute",
     top: "9rem",
     left: "4rem",
     display: { xs: "none", md: "block" },
    }}
   >
    <IconButton
     sx={{
      border: "1px solid",
      borderColor: "#4F4FFF",
      width: "1.5rem",
      height: "1.5rem",
     }}
     onClick={() => {
      startLogout();
      clearPlans();
     }}
    >
     <ArrowBackIosNewRoundedIcon
      sx={{
       width: "1rem",
       color: "#4F4FFF",
      }}
     />
    </IconButton>
    <Typography
     variant="a"
     component="a"
     sx={{
      ml: "0.7rem",
      fontSize: "0.7rem",
      color: "#4F4FFF",
      display: { xs: "none", md: "inline" },
      fontWeight: "700",
     }}
    >
     VOLVER
    </Typography>
   </Box>
  </>
 );
};
