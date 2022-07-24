import React from "react";

// MUI Utils
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Style/Theme/theme";

// Components
import Header from "./components/Header/Header/Header";
import Body from "./components/Body/Body/Body";
import Footer from "./components/Footer/Main/Footer";

// CSS
import "./Style/ResetCSS/reset.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
