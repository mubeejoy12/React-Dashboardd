import { CssBaseline, ThemeProvider, Grid, useMediaQuery } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./assets/scenes/global/Topbar";
import Sidebar from "./assets/scenes/global/Sidebar";
import Dashboard from "./assets/scenes/Dashboard";
import Team from "./assets/scenes/team";
import Contact from "./assets/scenes/contacts";
import Invoices from "./assets/scenes/invoices";
import Calender from "./assets/scenes/calender";
import Faq from "./assets/scenes/faq";
import Bar from "./assets/scenes/bar";
import Pie from "./assets/scenes/pie";
import Line from "./assets/scenes/line";
import Geography from "./assets/scenes/geography";
import Form from "./assets/scenes/form";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container style={{ height: "100vh" }}>
          {!isMobile && (
            <Grid item xs={2} style={{ height: "100%" }}>
              <Sidebar />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={10}
            style={{ height: "100%", overflowY: "auto" }}
          >
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calendar" element={<Calender />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/geography" element={<Geography />} />
              {/* Add other routes here */}
            </Routes>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
