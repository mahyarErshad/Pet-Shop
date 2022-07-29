import React from "react";
import { Typography, FormControl, Button, ButtonBase } from "@mui/material";
import RegisterInputs from "../../../components/Utils/Inputs/RegisterInputs/RegisterInputs";
import RegisterButton from "../../../components/Utils/Buttons/RegisterButtons/RegisterButton";

function Signup() {
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" } };
  return (
    <>
      <FormControl sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <RegisterInputs label="Email" type="text" />
        <RegisterInputs label="Password" type="Password" />
        <RegisterButton label="عضویت" />
      </FormControl>
    </>
  );
}

export default Signup;
