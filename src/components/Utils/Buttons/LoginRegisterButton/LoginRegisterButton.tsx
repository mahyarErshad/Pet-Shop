import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface props {
  text: string;
}

function LoginRegisterButton(props: props) {
  return (
    <>
      <Link className="noDecoration" to="/register">
        <Button variant="contained" color="secondary">
          <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>ورود / عضویت</Typography>
        </Button>
      </Link>
    </>
  );
}

export default LoginRegisterButton;
