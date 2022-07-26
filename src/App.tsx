import React, { useEffect } from "react";

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
import Terms from "./pages/Terms/Terms";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Main/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Bill from "./pages/Bill/Bill";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

// CSS
import "./Style/ResetCSS/reset.css";
import "./Style/global/style.css";

// utils
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./redux/slice/cartReducer";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const { userEmail } = useSelector((state: any) => state.loggedIn);
  useEffect(() => {
    dispatch(calculateTotal()); // eslint-disable-next-line
  }, [cartItems]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {userEmail !== "admin@admin" && <Header />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/delivery-methods" element={<DeliveryMethods />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/breed/:params" element={<Products url="/api/breed" />} />
            <Route path="/products/category/:params" element={<Products url="/api/products" />} />
            <Route path="/products/:params" element={<Products url="/api/products" />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bill/:id" element={<Bill />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {userEmail !== "admin@admin" && <Footer />}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
