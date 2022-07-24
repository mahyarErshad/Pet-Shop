import { Box } from "@mui/material";
import React from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

function Register() {
  document.title = "حساب کاربری من";
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Signup />
        <Login />
      </Box>
    </>
  );
}

export default Register;
