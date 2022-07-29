import { TextField, Typography, FormControl, Button, ButtonBase } from "@mui/material";

import React from "react";

function Login() {
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" } };

  return (
    <>
      <FormControl sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <TextField sx={inputStyle} color="secondary" required id="outlined-basic" label="Email" variant="outlined" />
        <TextField type="password" sx={inputStyle} color="secondary" required id="outlined-basic" label="Password" variant="outlined" />
        <ButtonBase sx={inputStyle}>
          <Button sx={{ p: "0.5rem", width: "100%" }} variant="contained" color="secondary">
            <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>ورود</Typography>
          </Button>
        </ButtonBase>
      </FormControl>
    </>
  );
}

export default Login;
