import { Box, Button, Checkbox, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const ButtonOption = ({ info }) => {
 return (
  <Button
   sx={{
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    mx: "0.4rem",
    px: "1rem",
    pb: "2.3rem",
    borderRadius: "1.7rem",
    flexGrow: 1,
    flexBasis: "200px",
    border: { xs: info.isActive ? 2 : 0 },
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.9)",
   }}
   onClick={() => info.func()}
  >
   <Checkbox
    checked={info.isActive}
    icon={<RadioButtonUncheckedIcon />}
    checkedIcon={<CheckCircleIcon />}
    sx={{
     alignSelf: "end",
     "& .MuiSvgIcon-root": {
      fontSize: 28,
     },
     color: "#A9AFD9", // Color del checkbox no seleccionado
     "&.Mui-checked": {
      color: "#4CAF50", // Color verde cuando está seleccionado
     },
    }}
   />

   <Box
    sx={{
     display: "flex",
     flexDirection: { xs: "row", sm: "column" },
     alignSelf: "start",
     gap: { xs: "1rem", sm: "0.1rem" },
    }}
   >
    <Box
     component="img"
     alt="step 1"
     src={info.img}
     sx={{ alignSelf: "start" }}
    />

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
     {info.title}
    </Typography>
   </Box>

   <Typography
    sx={{
     textTransform: "none",
     textAlign: "left",
     fontSize: "0.8rem",
    }}
    component="h6"
    variant="h6"
   >
    {info.desc}
   </Typography>
  </Button>
 );
};
