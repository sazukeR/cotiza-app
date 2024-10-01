import { Grid, Typography } from "@mui/material";

export const Title = () => {
 return (
  <Grid
   sx={{
    maxWidth: { xs: "200px", sm: "300px" },
    justifyContent: "center",
    mt: { xs: 0, sm: "1.5rem" },
    mr: { xs: "1rem" },
   }}
  >
   <Typography
    sx={{
     fontSize: "0.7rem",
     background: "linear-gradient(to bottom left,#00FF7F, #00F4E2 )",
     padding: "0.5rem",
     borderRadius: "4px",
     py: "2px",
    }}
    variant="span"
    component="span"
    fontWeight="900"
   >
    Seguro Salud Flexible
   </Typography>

   <Typography
    variant="h5"
    component="h5"
    sx={{
     fontSize: { xs: "1.7rem", sm: "2rem" },
     fontWeight: "900",
     mt: "0.4rem",
     mb: "0.4rem",
     lineHeight: "2.2rem",
    }}
   >
    Creado para ti y tu familia
   </Typography>
  </Grid>
 );
};
