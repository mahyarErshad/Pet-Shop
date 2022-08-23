import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { clearCart, setDiscountInactive, setHistory } from "../../../redux/slice/cartReducer";
import { changeModalState } from "../../../redux/slice/modalSlice";
import { setLoggedOut } from "../../../redux/slice/loginReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};
const btnStyle = { width: "5rem", mt: "1.5rem" };

export default function CustomModal() {
  const { isOpen, message } = useSelector((state: any) => state.modal);
  const { total, discountCode, phrase } = useSelector((state: any) => state.cart);
  const discountValue = discountCode.find((item: any) => item.name === phrase);
  const discount = discountValue ? total * discountValue.discount : 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={isOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "bold" }} variant="h5" component="h2">
              {message}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "1rem", flexDirection: "row" }}>
              <Button
                onClick={() => {
                  if (message === "سبد خرید خالی شود؟") {
                    const notify = () =>
                      toast.error("سبد خرید خالی شد", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    notify();
                    setTimeout(() => {
                      dispatch(clearCart());
                    }, 1000);
                  } else if (message === "از حساب کاربری خارج میشوید؟") {
                    dispatch(setLoggedOut());
                    const notify = () =>
                      toast.error("از حساب کاربری خارج شدید", {
                        position: "top-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    notify();
                  } else if (message === "از حذف تخفیف مطمئن هستید؟") {
                    const notify = () =>
                      toast.error("کد تخفیف حذف شد", {
                        position: "top-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    notify();
                    dispatch(setDiscountInactive());
                  } else if (message === "سفارش ثبت نهایی شود") {
                    const notify = () =>
                      toast.success("سفارش با موفقیت ثبت شد", {
                        position: "top-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    notify();
                    const id = Math.floor(10000000 + Math.random() * 90000000);
                    dispatch(
                      setHistory({
                        id,
                        total,
                        discount,
                      })
                    );
                    dispatch(setDiscountInactive());
                    navigate(`/bill/${id}`);
                  } else if (message === "لطفا برای ادامه وارد حساب کاربری شوید") {
                    navigate("/register");
                  }
                  dispatch(changeModalState(""));
                }}
                sx={btnStyle}
                variant="contained"
                color="error"
              >
                تایید
              </Button>
              <Button onClick={() => dispatch(changeModalState(""))} sx={btnStyle} variant="contained" color="secondary">
                لغو
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
