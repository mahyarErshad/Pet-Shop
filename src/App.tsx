import React from "react";

// MUI Utils
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Style/Theme/theme";

// CSS
import "./Style/ResetCSS/reset.css";

// Components
import HeaderLoggedOut from "./components/Header/HeaderLoggedOut/HeaderLoggedOut";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderLoggedOut />
      </ThemeProvider>
    </>
  );
}

export default App;
