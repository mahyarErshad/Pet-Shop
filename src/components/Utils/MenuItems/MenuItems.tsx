import { MenuItem } from "@mui/material";
import React from "react";
interface IProps {
  category: string;
}

function MenuItems(props: IProps) {
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
