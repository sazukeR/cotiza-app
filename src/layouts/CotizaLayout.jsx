import { useNavigate } from "react-router-dom";

import logo from "../../public/Logo_RIMAC.svg";
import phone from "../../public/gl_phone-20x20.png";

import {
 Grid,
 Link,
 IconButton,
 Typography,
 Toolbar,
 Box,
 AppBar,
} from "@mui/material";

export const CotizaLayout = ({ children }) => {
 const navigate = useNavigate();

 const handleNavigation = () => {
  navigate("/auth/login ");
 };

 return (
  <>
   <Box
    sx={{
     flexGrow: 1,
     m: "auto",
     bgcolor: "#FAFBFF",
     maxWidth: "1400px",
    }}
   >
    <AppBar
     position="static"
     color="transparent"
     sx={{ boxShadow: "none", px: "8%" }}
    >
     <Toolbar>
      <Grid container display="flex" justifyContent="space-between">
       <Grid item>
        <IconButton
         onClick={handleNavigation}
         size="large"
         edge="start"
         color="inherit"
         aria-label="menu"
        >
         <img src={logo} />
        </IconButton>
       </Grid>

       <Grid item alignSelf="center" alignItems="center" display="flex">
        <Grid>
         <Typography
          component="a"
          alignSelf="center"
          fontSize="0.8rem"
          fontWeight="800"
          sx={{ display: { xs: "none", md: "block" } }}
         >
          ¡Compra por este medio!
         </Typography>
        </Grid>

        <Link
         sx={{ cursor: "pointer", textDecoration: "none" }}
         fontWeight="bold"
        >
         <IconButton>
          <img src={phone} />
         </IconButton>
         <Typography fontWeight={900} component="span">
          (01) 411 6001
         </Typography>
        </Link>
       </Grid>
      </Grid>
     </Toolbar>
    </AppBar>
    {children}
   </Box>
  </>
 );
};
