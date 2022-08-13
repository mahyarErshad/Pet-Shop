import { MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
interface IProps {
  category: string;
}

function MenuItems(props: IProps) {
  const menuFontStyle = { fontSize: "0.875rem", textAlign: "right" };
  const { category } = props;
  return (
    <>
      <Link to={`/category/${category}`}>
        <MenuItem sx={menuFontStyle} dir="rtl">
          {category}
        </MenuItem>
      </Link>
    </>
  );
}

export default MenuItems;
