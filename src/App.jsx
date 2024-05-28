import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./assets/scenes/global/Topbar";
import Dashboard from "./assets/scenes/Dashboard";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./assets/scenes/global/Sidebar";
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

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calendar" element={<Calender />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="pie" element={<Pie />} />
              <Route path="line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
