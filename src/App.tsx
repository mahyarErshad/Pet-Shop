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
import DeliveryMethods from "./pages/DeliveryMethods/DeliveryMethods";
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods";
import Loading from "./pages/Loading/Loading";
import Terms from "./pages/Terms/Terms";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Main/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";

// CSS
import "./Style/ResetCSS/reset.css";
import "./Style/global/style.css";

// utils
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/delivery-methods" element={<DeliveryMethods />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:breed" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            {/* for testing loading page */}
            <Route path="/cart" element={<Cart />} />
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
