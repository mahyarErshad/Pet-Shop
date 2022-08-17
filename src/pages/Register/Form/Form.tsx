import React, { useEffect } from "react";
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
  const { emailError, passwordError, emailErrorMessage, passwordErrorMessage, emailValue, passwordValue } = useSelector((state: any) => state.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = () =>
    toast.success(`${buttonText} با موفقیت انجام شد`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  useEffect(() => {
    dispatch(clearErrors());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (emailValue) {
      const delay = setTimeout(() => {
        dispatch(setEmailError());
      }, 1000);
      return () => {
        clearTimeout(delay);
      };
    } // eslint-disable-next-line
  }, [emailValue]);

  useEffect(() => {
    if (passwordValue) {
      const delay = setTimeout(() => {
        dispatch(setPasswordError());
      }, 1000);
      return () => {
        clearTimeout(delay);
      };
    } // eslint-disable-next-line
  }, [passwordValue]);
  function handleSubmit(e: any) {
    e.preventDefault();
    setTimeout(() => {
      if (!emailError && !passwordError && emailValue && passwordValue) {
        notify();
      }
    }, 2000);
    setTimeout(() => {
      dispatch(setEmailError());
      dispatch(setPasswordError());
      dispatch(submit());
      if (!emailError && !passwordError && emailValue && passwordValue) {
        navigate("/");
        goToTop();
      }
    }, 3500);
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      <Box component="form" onSubmit={(e: any) => handleSubmit(e)} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "column", gap: "0.2rem" }}>
          <Box component="label" htmlFor="email" sx={{ direction: "rtl", fontSize: "0.875rem", cursor: "pointer" }}>
            ایمیل خود را وارد نمایید:
          </Box>
          <TextField autoComplete="off" error={emailError} helperText={emailErrorMessage} onChange={(e) => dispatch(setEmailValue(e.target.value))} autoFocus sx={inputStyle} type="email" color="secondary" required id="email" label="email" variant="outlined" />
          <Box component="label" htmlFor="password" sx={{ direction: "rtl", fontSize: "0.875rem", cursor: "pointer" }}>
            رمز عبور خود را وارد نمایید:
          </Box>
          <TextField error={passwordError} helperText={passwordErrorMessage} onChange={(e) => dispatch(setPasswordValue(e.target.value))} sx={inputStyle} type="password" color="secondary" required id="password" label="password" variant="outlined" />
          <Button onClick={(e: any) => handleSubmit(e)} type="submit" sx={{ p: "0.5rem", width: { lg: "25%", md: "25%", xs: "37%" }, alignSelf: "flex-end" }} variant="contained" color="secondary">
            <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{buttonText}</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Form;
