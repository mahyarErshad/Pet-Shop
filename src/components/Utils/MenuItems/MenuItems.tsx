import { MenuItem } from "@mui/material";
import React from "react";

function MenuItems() {
  const menuFontStyle = { fontSize: "0.875rem" };
  return (
    <>
      <MenuItem sx={menuFontStyle} dir="rtl">
        غذای گربه
      </MenuItem>
    </>
  );
}

export default MenuItems;
