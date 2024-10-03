import { Box } from "@mui/material";

import { PlanCard } from "./PlanCard";

export const PlansList = ({ plansState }) => {
 return (
  <Box
   sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",

    maxWidth: "900px",

    m: "1rem",
    gap: "1rem",
   }}
  >
   {plansState?.map((plan) => (
    <PlanCard key={plan.name} plan={plan} />
   ))}
  </Box>
 );
};
