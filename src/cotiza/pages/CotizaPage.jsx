import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { StepsSmallScreens } from "../../components/StepsSmallScreens";
import { StepsLargeScreens } from "../../components/StepsLargeScreens";
import { ButtonOption } from "../../components/ButtonOption";
import { PlansList } from "../../components/plansList";
import { useSelector } from "react-redux";
import { usePlans } from "../../hooks/usePlans";

import protection1 from "../../../public/IcProtectionLight.png";
import protection2 from "../../../public/IcAddUserLight.png";

export const CotizaPage = () => {
 const { startForOther, startForMe } = usePlans();
 const { user } = useSelector((state) => state.auth);
 const { plansState, isForMeActive, isForOtherActive } = useSelector(
  (state) => state.plans
 );

 const isScreenLarge = useMediaQuery("(min-width:600px)");

 const listOptionsForButtons = [
  {
   img: protection1,
   title: "Para mi",
   desc: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
   func: startForMe,
   isActive: isForMeActive,
  },
  {
   img: protection2,
   title: "Para alguien más",
   desc:
    "Realiza una cotización para uno de tus familiares o cualquier persona.",
   func: startForOther,
   isActive: isForOtherActive,
  },
 ];

 return (
  <Grid container>
   <Grid item xs={12}>
    {isScreenLarge ? <StepsLargeScreens /> : <StepsSmallScreens />}
   </Grid>

   <Grid item xs={12}>
    <Box
     sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
     }}
    >
     <Box
      sx={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       width: "100%",
       maxWidth: "600px",
      }}
     >
      <Typography
       component="h1"
       variant="h1"
       sx={{
        textAlign: "center",
        textAlign: { xs: "start", sm: "center" },
        fontSize: "2.7rem",
        fontWeight: "700",
        mt: "5rem",
        ml: { xs: "2rem", sm: "1rem" },
       }}
      >
       {user.name} ¿Para quién deseas cotizar?
      </Typography>
      <Typography
       component="h6"
       variant="h6"
       sx={{
        width: "100%",
        textAlign: { xs: "", sm: "center" },
        fontSize: "1rem",
        ml: { xs: "4rem", sm: "2rem" },
       }}
      >
       Selecciona la opción que se ajuste más a tus necesidades.
      </Typography>

      <Box
       sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        gap: "2rem",
        mt: "1.5rem",
        width: "100%",
        maxWidth: { xs: "400px", sm: "600px" },
       }}
      >
       {listOptionsForButtons.map((option) => (
        <ButtonOption key={option.title} info={option} />
       ))}
      </Box>
     </Box>

     {isForMeActive || isForOtherActive ? (
      <PlansList plansState={plansState} />
     ) : (
      <></>
     )}
    </Box>
   </Grid>
  </Grid>
 );
};
