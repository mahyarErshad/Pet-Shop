import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { clearCart } from "../../../redux/slice/cartReducer";
import { changeModalState } from "../../../redux/slice/modalSlice";

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
  const { isOpen } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  return (
    <div>
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
              سبد خرید خالی شود؟{" "}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "1rem", flexDirection: "row" }}>
              <Button
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(changeModalState());
                }}
                sx={btnStyle}
                variant="contained"
                color="error"
              >
                تایید
              </Button>
              <Button onClick={() => dispatch(changeModalState())} sx={btnStyle} variant="contained" color="secondary">
                لغو
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
