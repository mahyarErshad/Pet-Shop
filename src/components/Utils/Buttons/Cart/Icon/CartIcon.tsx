import { Badge, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartIcon() {
  return (
    <>
      <Link className="noDecoration" to="/cart">
        <IconButton sx={{ margin: "0 0.5rem" }} size="large" aria-label="notifications" color="secondary">
          <Badge badgeContent={5} color="error">
            <ShoppingCartIcon color="secondary" fontSize="large" />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
}

export default CartIcon;
