import React from "react";

// MUI Utils
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Style/Theme/theme";

// Components
import Header from "./components/Header/Header/Header";
import Main from "./components/Body/Main/Main";

// CSS
import "./Style/ResetCSS/reset.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
