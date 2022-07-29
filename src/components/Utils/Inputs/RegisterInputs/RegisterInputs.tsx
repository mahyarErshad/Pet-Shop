import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface IInput {
  label: string;
  title: string;
  type: string;
}

function RegisterInputs(props: IInput) {
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" } };
  const label = props.label;
  const type = props.type;
  const title = props.title;

  return (
    <>
      <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "column", gap: "0.2rem" }}>
        <Typography sx={{ direction: "rtl", fontSize: "1rem" }}>{title}</Typography>
        <TextField sx={inputStyle} type={`${type}`} color="secondary" required id="outlined-basic" label={`${label}`} variant="outlined" />
      </Box>
    </>
  );
}

export default RegisterInputs;
