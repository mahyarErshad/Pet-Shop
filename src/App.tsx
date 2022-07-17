import React from "react";

// MUI Utils
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Style/Theme/theme";

// CSS
import "./Style/ResetCSS/reset.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Hello World</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
