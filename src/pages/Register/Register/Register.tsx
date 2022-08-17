import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";
import Form from "../Form/Form";

function Register() {
  document.title = "حساب کاربری من";
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap", p: "3rem", justifyContent: "center", alignItems: "center" }}>
        <FormGroup>
          <FormControlLabel control={<Switch onChange={handleChange} color="secondary" />} label="ورود" />
        </FormGroup>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", mt: "1rem", px: { lg: "5rem", md: "3rem", xs: "1rem" } }}>{checked ? <Form buttonText="ورود" /> : <Form buttonText="عضویت" />}</Box>
      </Box>
    </>
  );
}

export default Register;
