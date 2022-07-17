import React from "react";

// MUI Utils
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Style/Theme/theme";

// Components
import HeaderLoggedOut from "./components/Header/HeaderLoggedOut/HeaderLoggedOut";

// CSS
import "./Style/ResetCSS/reset.css";

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
