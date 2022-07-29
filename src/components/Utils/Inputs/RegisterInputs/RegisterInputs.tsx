import { TextField } from "@mui/material";
import React from "react";

interface IInput {
  label: string;
  type: string;
}

function RegisterInputs(props: IInput) {
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" } };
  const label = props.label;
  const type = props.type;

  return (
    <>
      <TextField sx={inputStyle} type={`${type}`} color="secondary" required id="outlined-basic" label={`${label}`} variant="outlined" />
    </>
  );
}

export default RegisterInputs;
