import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../../../Style/global/style.css";

interface props {
  text: string;
  linkTo?: string;
  color?: "secondary" | "inherit" | "primary" | "success" | "error" | "info" | "warning";
}

function MyButton(props: props) {
  const { text } = props;
  const linkTo = props.linkTo ? props.linkTo : "";
  const color = props.color ? props.color : "secondary";
  return (
    <>
      <Link className="noDecoration" to={linkTo}>
        <Button variant="contained" color={color}>
          <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{text}</Typography>
        </Button>
      </Link>
    </>
  );
}

export default MyButton;
