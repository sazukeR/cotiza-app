import { useLocation, useNavigate } from "react-router-dom";

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
 const location = useLocation();

 const currentPath = location.pathname;

 const isOnSpecificPage =
  currentPath === "/cotiza" || currentPath === "/resume";

 const navigate = useNavigate();

 const handleNavigation = () => {
  navigate("/auth/login ");
 };

 return (
  <>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     height: "100vh",
     m: "0px",
     backgroundColor: "#fafafb",
     backgroundImage: {
      xs: !isOnSpecificPage
       ? `radial-gradient(circle, #00F4E2 10%, transparent 40%), 
     radial-gradient(circle, #00FF7F 1%, transparent 50%)`
       : "",
      sm: !isOnSpecificPage
       ? `radial-gradient(circle, #00F4E2 1%, transparent 50%), 
                      radial-gradient(circle, #00FF7F 1%, transparent 50%)`
       : "",
     },
     backgroundRepeat: "no-repeat",
     backgroundPosition: {
      xs: "-300px 400px, 400px -200px",
      sm: "-600px -150%, 600px 90%",
     },
     backgroundSize: { xs: "500px", sm: "1000px 1000px" },
    }}
   >
    <AppBar
     position="static"
     color="transparent"
     sx={{ boxShadow: "none", px: "3%" }}
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
