import { Dashboard } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {themeSettings} from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";


function App() {
  const mode = useSelector((state) => state.global.mode); //way to grab the state we created in theme.js
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme} >
        <CssBaseline />  {/*CssBaseline is sort of css reset added to the <head /> of your document.  */}
          <Routes>
            <Route element = { <Layout /> }>
              <Route path="/" element={<Navigate to="/dashboard" replace /> } />
              <Route path="/dashboard" element={<Dashboard /> } />
            </Route>
          </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
