import { CotizaLayout } from "./layouts/CotizaLayout";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const CotizaApp = () => {
 return (
  <AppTheme>
   <CotizaLayout>
    <AppRouter />
   </CotizaLayout>
  </AppTheme>
 );
};
