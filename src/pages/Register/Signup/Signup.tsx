import React from "react";
import { FormControl } from "@mui/material";
import RegisterInputs from "../../../components/Utils/Inputs/RegisterInputs/RegisterInputs";
import RegisterButton from "../../../components/Utils/Buttons/RegisterButtons/RegisterButton";

function Signup() {
  return (
    <>
      <FormControl sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <RegisterInputs label="Email" type="text" title="آدرس ایمیل: " />
        <RegisterInputs label="Password" type="Password" title="گذر واژه: " />
        <RegisterButton label="عضویت" />
      </FormControl>
    </>
  );
}

export default Signup;
