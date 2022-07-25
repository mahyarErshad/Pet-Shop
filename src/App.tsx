import React from "react";

// MUI Utils
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Style/Theme/theme";

// Components
import Header from "./components/Header/Header/Header";
import Main from "./components/Body/Main/Main/Main";
import Footer from "./components/Footer/Main/Footer";

//pages
import Register from "./pages/Register/Register/Register";
import NotFound from "./pages/NotFound/NotFound";

// CSS
import "./Style/ResetCSS/reset.css";
import "./Style/global/style.css";

// utils
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./pages/Loading/Loading";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
