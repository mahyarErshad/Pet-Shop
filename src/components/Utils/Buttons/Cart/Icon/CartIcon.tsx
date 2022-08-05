import { Badge, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../../../../Style/global/style.css";

interface IProps {
  count: number;
}

function CartIcon(props: IProps) {
  const { count } = props;
  return (
    <>
      <Link className="noDecoration" to="/cart">
        <IconButton sx={{ margin: "0 0.5rem" }} size="large" aria-label="notifications" color="secondary">
          <Badge badgeContent={count} color="error">
            <ShoppingCartIcon color="secondary" fontSize="large" />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
}

export default CartIcon;
