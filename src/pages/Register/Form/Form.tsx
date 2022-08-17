import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setEmailValue, setPasswordValue } from "../../../redux/slice/loginReducer";

interface IProps {
  buttonText: string;
}

function Form(props: IProps) {
  const { buttonText } = props;
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" }, mb: "1rem" };
  const { emailError, passwordError, emailErrorMessage, passwordErrorMessage, usernameValue } = useSelector((state: any) => state.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (usernameValue) {
      const delay = setTimeout(() => {
        dispatch({ type: "usernameSlow" });
      }, 1000);
      return () => {
        clearTimeout(delay);
      };
    } // eslint-disable-next-line
  }, [usernameValue]);

  return (
    <>
      <FormControl sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "column", gap: "0.2rem" }}>
          <Box component="label" htmlFor="email" sx={{ direction: "rtl", fontSize: "0.875rem", cursor: "pointer" }}>
            ایمیل خود را وارد نمایید:
          </Box>
          <TextField error={emailError} helperText={emailErrorMessage} onChange={(e) => dispatch(setEmailValue(e.target.value))} autoFocus sx={inputStyle} type="email" color="secondary" required id="email" label="email" variant="outlined" />
          <Box component="label" htmlFor="password" sx={{ direction: "rtl", fontSize: "0.875rem", cursor: "pointer" }}>
            پسورد خود را وارد نمایید:
          </Box>
          <TextField error={passwordError} helperText={passwordErrorMessage} onChange={(e) => dispatch(setPasswordValue(e.target.value))} sx={inputStyle} type="password" color="secondary" required id="password" label="password" variant="outlined" />
          <Button type="submit" sx={{ p: "0.5rem", width: { lg: "25%", md: "25%", xs: "37%" }, alignSelf: "flex-end" }} variant="contained" color="secondary">
            <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{buttonText}</Typography>
          </Button>
        </Box>
      </FormControl>
    </>
  );
}

export default Form;
