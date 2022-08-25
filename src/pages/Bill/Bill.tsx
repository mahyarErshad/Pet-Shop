import { Button, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import BillCalculate from "../../components/Utils/BillItems/BillCalculate";
import BillItems from "../../components/Utils/BillItems/BillItems";
import { persian } from "../../functions/functions";
import NotFound from "../NotFound/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/global/style.css";

function Bill() {
  const theme = useTheme();
  const { id } = useParams();
  const { history } = useSelector((state: any) => state.cart);
  const { loggedIn, userEmail } = useSelector((store: any) => store.loggedIn);
  const [notFound, setNotFound] = useState<boolean>(true);
  const cartHistory = history.find((product: any) => product.cartID.toString() === id);
  const navigate = useNavigate();
  useEffect(() => {
    if (cartHistory) {
      setNotFound(false);
    } else {
      setNotFound(true);
    }
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (!loggedIn) {
      const notify = () =>
        toast.error("برای دسترسی لطفا وارد حساب کاربری خود شوید", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      notify();
      navigate("/");
    }
    // eslint-disable-next-line
  }, [id, loggedIn]);
  if (notFound) {
    return <NotFound />;
  } else {
    return (
      <>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", my: "1rem" }}>
          <Box>
            <Typography dir="rtl" variant="h5" sx={{ my: "1rem", textAlign: "center", fontWeight: "normal", fontSize: "1.5rem", color: theme.palette.secondary.main }}>{`سفارش شماره: ${persian(id!)}`}</Typography>
          </Box>
          {cartHistory.items.map((item: any) => {
            return <BillItems id={item.id} key={item.id} image={item.image} title={item.title} price={item.price} amount={item.amount} />;
          })}
          <BillCalculate text="جمع کل:" fee={cartHistory.total} />
          <BillCalculate text="تخفیف:" fee={cartHistory.discount} discount />
          <BillCalculate text="قابل پرداخت:" fee={cartHistory.total - cartHistory.discount} />
          {userEmail === "admin@admin" && (
            <Box className="noDecoration" component={Link} to="/dashboard">
              <Button variant="contained" color="secondary">
                بازگشت
              </Button>
            </Box>
          )}
        </Box>
      </>
    );
  }
}

export default Bill;
