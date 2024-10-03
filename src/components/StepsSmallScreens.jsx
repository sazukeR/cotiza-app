import { useTheme } from "@emotion/react";
import { useAuthStore } from "../hooks/useAuthStore";
import { usePlans } from "../hooks/usePlans";

import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import pogress from "../../public/atoms_stepper_progress.png";

export const StepsSmallScreens = () => {
 const { startLogout } = useAuthStore();
 const { clearPlans } = usePlans();
 const theme = useTheme();

 return (
  <Box
   display="flex"
   sx={{
    py: "0.5rem",
    justifyContent: "center",
    gap: "1rem",
    width: "100%",
    backgroundColor: theme.palette.transparent.main,
   }}
  >
   <IconButton
    sx={{
     border: "2px solid",
     borderColor: { xs: "#A9AFD9" },
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
      fontWeight: "bold",
      color: { xs: "#A9AFD9" },
     }}
    />
   </IconButton>

   <Typography
    variant="p"
    sx={{ fontSize: "0.7rem", alignSelf: "center", fontWeight: "900" }}
   >
    PASO 1 DE 2
   </Typography>

   <Box
    component="img"
    alt="step 1"
    src={pogress}
    sx={{ height: "0.4rem", alignSelf: "center", width: "10rem" }}
   />
  </Box>
 );
};
