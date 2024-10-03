import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";

import imagenPrueba from "../../public/IcProtectionLight.png";
import line from "../../public/Line.png";

export const PlanCard = ({ plan }) => {
 const theme = useTheme();

 const navigate = useNavigate();

 const handleNavigation = () => {
  navigate("/resume", {
   state: { planName: plan.name, planPrice: plan.price },
  });
 };

 return (
  <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    p: "2rem",

    borderRadius: "1.7rem",
    border: 1,
    maxWidth: "274px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.9)",
   }}
  >
   <Box sx={{ display: "flex", gap: "1.5rem" }}>
    <Typography
     sx={{
      fontWeight: "700",
      textTransform: "none",
      alignSelf: { xs: "center", sm: "start" },
      textAlign: "left",
     }}
     component="h6"
     variant="h6"
    >
     {plan.name}
    </Typography>
    <Box
     component="img"
     alt="step 1"
     src={imagenPrueba}
     sx={{ alignSelf: "start", mt: { xs: "1.3rem", sm: "0.2rem" } }}
    />
   </Box>

   <Box>
    <Typography
     sx={{ fontSize: "0.6rem", color: "#7c81a1", fontWeight: "900" }}
    >
     COSTO DEL PLAN
    </Typography>
    <Typography sx={{ fontWeight: "700" }}>${plan.price} al mes</Typography>
   </Box>

   <Box component="img" src={line} alt="" sx={{ width: "13rem", my: "1rem" }} />

   <Box sx={{ display: "flex", fontSize: "0.8rem" }}>
    <Typography
     component="p"
     variant="p"
     sx={{
      position: "relative",
      paddingLeft: "1rem",
      fontSize: "0.8rem",
      "&::before": {
       content: '"•"',
       fontSize: "1rem",
       position: "absolute",
       left: 0,
       top: -3,
      },
     }}
    >
     {plan.description[0]}
    </Typography>
   </Box>

   <Box sx={{ display: "flex", fontSize: "0.8rem", mt: "1.5rem" }}>
    <Typography
     component="p"
     variant="p"
     sx={{
      position: "relative",
      paddingLeft: "1rem",
      fontSize: "0.8rem",
      "&::before": {
       content: '"•"',
       fontSize: "1rem",
       position: "absolute",
       left: 0,
       top: -3,
      },
     }}
    >
     {plan.description[1]}
    </Typography>
   </Box>

   <Box sx={{ display: "flex", fontSize: "0.8rem", mt: "1.5rem" }}>
    <Typography
     component="p"
     variant="p"
     sx={{
      position: "relative",
      paddingLeft: "1rem",
      fontSize: "0.8rem",
      "&::before": {
       content: '"•"',
       fontSize: "1rem",
       position: "absolute",
       left: 0,
       top: -3,
      },
     }}
    >
     {plan.description[2]}
    </Typography>
   </Box>

   <Button
    sx={{
     textTransform: "none",
     mt: "auto",
     backgroundColor: theme.palette.secondary.main,
     fontWeight: "bold",
     color: "white",
     borderRadius: "1rem",
     py: "0.5rem",
    }}
    onClick={handleNavigation}
   >
    Seleccionar Plan
   </Button>
  </Box>
 );
};
