import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview"
import Daily from "scenes/daily";


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
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
            </Route>
          </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
