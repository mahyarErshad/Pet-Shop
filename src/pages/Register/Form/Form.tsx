import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, setEmailError, setEmailValue, setPasswordError, setPasswordValue, submit } from "../../../redux/slice/loginReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { goToTop } from "../../../functions/functions";

interface IProps {
  buttonText: string;
}

function Form(props: IProps) {
  const { buttonText } = props;
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" }, mb: "1rem" };
  const { emailError, passwordError, emailErrorMessage, passwordErrorMessage, emailValue, passwordValue, loggedIn } = useSelector((state: any) => state.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // clears every value and error at render
  useEffect(() => {
    dispatch(clearErrors());
    // eslint-disable-next-line
  }, []);
  // does not allow logged in user to go to login page
  useEffect(() => {
    const notify = () =>
      toast.error("شما وارد حساب کاربری خود شده ایید", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    if (loggedIn) {
      notify();
      setTimeout(() => {
        navigate("/");
        goToTop();
      }, 2500);
    }
    // eslint-disable-next-line
  }, []);
  // Checks for email errors
  useEffect(() => {
    if (email) {
      dispatch(setEmailValue(email));
      dispatch(setEmailError());
    } // eslint-disable-next-line
  }, [email]);
  // Checks for password errors
  useEffect(() => {
    if (password) {
      dispatch(setPasswordValue(password));
      dispatch(setPasswordError());
    } // eslint-disable-next-line
  }, [password]);
  // handleSubmit function
  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(setEmailValue(email));
    dispatch(setPasswordValue(password));
    dispatch(setEmailError());
    dispatch(setPasswordError());
    if (!emailError && !passwordError && emailValue && passwordValue) {
      setLoading(true);
      setTimeout(() => {
        const notify = () =>
          toast.success(`${buttonText} با موفقیت انجام شد`, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        notify();
      }, 2000);
      setTimeout(() => {
        dispatch(submit());
        navigate("/");
        goToTop();
        setLoading(false);
      }, 4500);
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      <Box component="form" noValidate onSubmit={(e: any) => handleSubmit(e)} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "column", gap: "0.2rem" }}>
          <Box component="label" htmlFor="email" sx={{ direction: "rtl", fontSize: "0.875rem", cursor: "pointer" }}>
            ایمیل خود را وارد نمایید:
          </Box>
          <TextField autoComplete="off" error={emailError} helperText={emailErrorMessage} onChange={(e) => setEmail(e.target.value)} autoFocus sx={inputStyle} type="email" color="secondary" required id="email" label="email" variant="outlined" />
          <Box component="label" htmlFor="password" sx={{ direction: "rtl", fontSize: "0.875rem", cursor: "pointer" }}>
            رمز عبور خود را وارد نمایید:
          </Box>
          <TextField error={passwordError} helperText={passwordErrorMessage} onChange={(e) => setPassword(e.target.value)} sx={inputStyle} type="password" color="secondary" required id="password" label="password" variant="outlined" />
          <Button disabled={loading} onClick={(e: any) => handleSubmit(e)} type="submit" sx={{ p: "0.5rem", width: { lg: "25%", md: "25%", xs: "37%" }, alignSelf: "flex-end" }} variant="contained" color="secondary">
            <Typography dir="rtl" sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
              {loading ? "در حال ارسال ..." : buttonText}
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Form;
