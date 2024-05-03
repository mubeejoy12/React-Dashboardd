import "./App.css";
import Topbar from "./assets/scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <mian className="content">
            <Topbar />
          </mian>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
