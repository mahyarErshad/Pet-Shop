import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../../../Style/global/style.css";

interface props {
  text: string;
  linkTo?: string;
  color?: string;
}

function MyButton(props: props) {
  const { text, linkTo, color } = props;
  return (
    <>
      <Link className="noDecoration" to="/register">
        <Button variant="contained" color="secondary">
          <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{text}</Typography>
        </Button>
      </Link>
    </>
  );
}

export default MyButton;
