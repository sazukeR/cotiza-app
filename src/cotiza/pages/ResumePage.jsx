import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { StepsLargeScreens } from "../../components/StepsLargeScreens";
import { Box } from "@mui/system";
import { lightGreen } from "@mui/material/colors";

import line from "../../../public/Line.png";
import msn from "../../../public/ic_family.png";

export const ResumePage = () => {
 const { user } = useSelector((state) => state.auth);

 const isScreenLarge = useMediaQuery("(min-width:600px)");

 const location = useLocation();
 const { planName, planPrice } = location.state || {};

 return (
  <Grid container>
   <Grid item xs={12}>
    {isScreenLarge ? <StepsLargeScreens /> : <></>}
   </Grid>

   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     width: "100%",
     alignItems: { xs: "center", sm: "flex-start" },
     ml: { sm: "4rem" },
    }}
   >
    <Box
     sx={{
      display: "flex",
      flexDirection: "column",
     }}
    >
     <Typography
      component="h1"
      variant="h1"
      sx={{
       fontSize: "2.7rem",
       fontWeight: "700",
       mt: "5rem",
      }}
     >
      Resumen del seguro
     </Typography>
    </Box>

    <Box
     sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "",
      width: "90%",
      maxWidth: "900px",
      p: "2rem",
      borderRadius: "1.7rem",
      mt: "1rem",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.9)",
     }}
    >
     <Typography
      component="span"
      variant="span"
      sx={{
       fontSize: "0.8rem",
       fontWeight: "700",
      }}
     >
      PRECIOS CALCULADOS PARA
     </Typography>

     <Box
      sx={{
       display: "flex",
       justifySelf: "center",
       mt: "1rem",

       backgroundColor: lightGreen,
      }}
     >
      <Box component="img" alt="step 1" src={msn} sx={{ width: "2rem" }} />
      <Typography
       sx={{ fontWeight: "700", ml: "1rem" }}
       component="h5"
       variant="h5"
      >
       {user.name} {user.lastName}
      </Typography>
     </Box>

     <Box
      component="img"
      src={line}
      alt=""
      sx={{
       width: "99%",
       my: "2rem",
       alignItems: "center",
       height: { sm: "0.2rem" },
      }}
     />

     <Typography sx={{ fontWeight: "700" }}>Responsable de pago</Typography>

     <Typography>DNI: {user.noDoc}</Typography>

     <Typography>Celular: {user.cel}</Typography>

     <br />

     <Typography sx={{ fontWeight: "700" }}>Plan elegido</Typography>

     <Typography>{planName}</Typography>

     <Typography>{planPrice}</Typography>
    </Box>
   </Box>
  </Grid>
 );
};
