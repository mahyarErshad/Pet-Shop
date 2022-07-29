import { FormControl } from "@mui/material";
import RegisterInputs from "../../../components/Utils/Inputs/RegisterInputs/RegisterInputs";
import RegisterButton from "../../../components/Utils/Buttons/RegisterButtons/RegisterButton";
import React from "react";

function Login() {
  return (
    <>
      <FormControl sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <RegisterInputs focus={true} label="Email" type="text" title="آدرس ایمیل: " />
        <RegisterInputs label="Password" type="Password" title="گذر واژه: " />
        <RegisterButton title="ورود" />
      </FormControl>
    </>
  );
}

export default Login;
