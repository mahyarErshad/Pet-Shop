import { MenuItem } from "@mui/material";
import React from "react";
interface IProps {
  category: string;
}

function MenuItems(props: IProps) {
  const menuFontStyle = { fontSize: "0.875rem", textAlign: "right" };
  const { category } = props;
  return (
    <>
      <MenuItem sx={menuFontStyle} dir="rtl">
        {category}
      </MenuItem>
    </>
  );
}

export default MenuItems;
