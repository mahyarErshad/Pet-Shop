import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { separateNumber } from "../../../../functions/functions";
import { addToCart } from "../../../../redux/slice/cartReducer";
import MyButton from "../../Buttons/MyButton/MyButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface props {
  title: string;
  price: number;
  balance: number;
  id: string | number;
  image: string;
  amount: number;
}

function SingleProductsDetails(props: props) {
  const { title, price, id, image, amount } = props;
  const [balance, setBalance] = React.useState(props.balance);
  document.title = props.title;
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("محصول با موفقیت اضافه شد", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      <Typography dir="rtl" variant="h5" sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: "1rem" }}>
        {title}
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1.2rem", fontWeight: "normal" }}>
        {separateNumber(price)} تومان
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "normal" }}>
        موجود در انبار : {separateNumber(balance)} عدد
      </Typography>
      {balance > 0 ? (
        <Box
          onClick={() => {
            dispatch(
              addToCart({
                id,
                amount,
                image,
                title,
                price,
              })
            );
            setBalance((prev) => prev - 1);
            notify();
          }}
        >
          <MyButton text="افزودن به سبد خرید" />
        </Box>
      ) : (
        <Typography dir="rtl" variant="h5" color="error" sx={{ fontSize: "1.2rem" }}>
          اتمام موجودی
        </Typography>
      )}
    </>
  );
}

export default SingleProductsDetails;
