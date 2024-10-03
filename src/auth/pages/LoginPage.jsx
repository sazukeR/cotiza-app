import { useTheme } from "@emotion/react";
import { useForm } from "../../hooks/useForm";
import {
 Box,
 Grid,
 Typography,
 TextField,
 Button,
 Select,
 MenuItem,
 FormControl,
 FormControlLabel,
 Checkbox,
 useMediaQuery,
 IconButton,
} from "@mui/material";
import useImageResponsive from "../../hooks/useImageResponsive";

import { useAuthStore } from "../../hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";

import logo from "../../../public/Vector.png";
import ldng2 from "../../../public/ldng2.png";
import { Title } from "../../components/Title";

const loginFormFields = {
 doc: "DNI",
 noDoc: "",
 cel: "",
};

export const LoginPage = () => {
 const isScreenLarge = useMediaQuery("(min-width:600px)");
 const { startLogin, errorMessage } = useAuthStore();

 const imagenPathGrande = ldng2;
 const imagenPathPequeno = ldng2;
 const imagenPath = useImageResponsive(imagenPathGrande, imagenPathPequeno);

 const theme = useTheme();

 const { doc, noDoc, cel, onInputChange } = useForm(loginFormFields);

 const onSubmit = (e) => {
  e.preventDefault();

  if (doc === "" || noDoc === "" || cel === "") {
   Swal.fire(
    "Error en la autenticacion",
    "Todos los campos son obligatorios",
    "error"
   );

   return;
  }

  startLogin(doc, noDoc, cel);
 };

 useEffect(() => {
  if (errorMessage !== undefined) {
   Swal.fire("Error en la autenticacion", errorMessage, "error");
  }
 }, [errorMessage]);

 return (
  <>
   <Grid
    container
    sx={{
     backgroundColor: theme.palette.transparent.main,
     maxWidth: "1400px",
     height: { xs: "86vh", sm: "85vh" },
    }}
   >
    <Grid
     item
     className="container-title"
     sx={{
      display: "flex",
      justifyContent: { xs: "space-between", sm: "flex-start" },
      flexDirection: { xs: "row", sm: "column" },
      mx: { xs: "8%", sm: "0" },
      mt: { sm: "1rem" },
      padding: "0px",
     }}
     xs={12}
     sm={6}
     alignItems="center"
    >
     {isScreenLarge ? <></> : <Title />}

     <Box
      component="img"
      sx={{
       maxWidth: "100%",
       minWidth: { xs: "auto", sm: "400px" },
       height: { xs: "80%", sm: "70%" },
       width: { xs: "50%", sm: "50%" },
      }}
      alt="The house from the offer."
      src={imagenPath}
     />
    </Grid>

    <Grid
     sx={{
      backgroundColor: theme.palette.transparent.main,
      order: 3,
      px: { xs: "2rem", sm: "2rem" },
     }}
     item
     xs={12}
     sm={6}
    >
     {isScreenLarge ? <Title /> : <></>}
     <Typography variant="p" component="p" sx={{ mb: 2, fontWeight: "bold" }}>
      Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
      asesoría. 100% online.
     </Typography>
     <form onSubmit={onSubmit}>
      <FormControl>
       <Grid container sx={{ maxWidth: "600px" }}>
        <Grid item xs={12} sx={{ mt: 0, display: "flex" }}>
         <Select
          labelId="select"
          id="simple-select"
          type="select"
          name="doc"
          value={doc}
          onChange={onInputChange}
          sx={{ width: "10rem" }}
         >
          <MenuItem value="DNI">DNI</MenuItem>
          <MenuItem value="CE">CE</MenuItem>
          <MenuItem value="Pasaporte">Pasaporte</MenuItem>
         </Select>
         <TextField
          label="Nro de documento"
          type="text"
          placeholder="471149"
          fullWidth
          name="noDoc"
          value={noDoc}
          onChange={onInputChange}
         />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
         <TextField
          label="Celular"
          type="text"
          placeholder="999888999"
          fullWidth
          name="cel"
          value={cel}
          onChange={onInputChange}
         />
        </Grid>

        <Grid item xs={12}>
         <FormControlLabel
          control={
           <Checkbox
            required
            sx={{
             color: "#C5C5C5",
             "&.Mui-checked": {
              color: "#000000",
             },
            }}
           />
          }
          label={
           <Typography variant="span" component="span">
            Acepto la Política de Privacidad
           </Typography>
          }
         />
        </Grid>
        <Grid item xs={12}>
         <FormControlLabel
          control={
           <Checkbox
            required
            sx={{
             color: "#C5C5C5",
             "&.Mui-checked": {
              color: "#000000",
             },
            }}
           />
          }
          label={
           <Typography variant="span" component="span">
            Acepto la Política Comunicaciones Comerciales
           </Typography>
          }
         />
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
         <Grid item xs={12} sm={6}>
          <Button
           type="submit"
           variant="contained"
           fullWidth
           sx={{ borderRadius: "30px", py: "1rem", fontWeight: "900" }}
          >
           Cotiza aquí
          </Button>
         </Grid>
        </Grid>
       </Grid>
      </FormControl>
     </form>
    </Grid>
   </Grid>
   <Box
    sx={{
     display: "flex",
     flexDirection: { xs: "column", sm: "row" },
     justifyContent: { xs: "center", sm: "space-between" },
     backgroundColor: theme.palette.primary.main,
     width: "100%",
     height: "70px",
     px: "2rem",
     pt: { xs: "2rem", sm: "1rem" },
    }}
   >
    <IconButton
     sx={{ height: "40px" }}
     size="large"
     display="flex"
     color="white"
     aria-label="menu"
    >
     <img src={logo} />
    </IconButton>

    <Typography
     sx={{
      color: "white",
      fontSize: "0.8rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: "1.5rem",
     }}
     variant="span"
     component="span"
    >
     © 2023 RIMAC Seguros y Reaseguros.
    </Typography>
   </Box>
  </>
 );
};
