import React from "react";
import MenuItems from "../../Utils/MenuItems/MenuItems";

// MUI
import { Box, Button } from "@mui/material";
// icons
import { GiCat } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { GiHummingbird } from "react-icons/gi";
import { GiSquirrel } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../../../Style/global/style.css";
interface Iprops {
  flexRow?: boolean;
}

function HeaderMenus(props: Iprops) {
  const all = "all";
  const flexDirection = props.flexRow;
  const row = flexDirection ? "row-reverse" : "column";
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: row }}>
      <Link className="noDecoration" to={`/products/${all}`}>
        <Button sx={{ fontSize: "1rem", fontWeight: "bold", color: "#000", height: "3rem", borderRadius: "8px", "&:hover": { bgcolor: "#B2B2B2" } }}>همه محصولات</Button>
      </Link>
      <MenuItems title="گربه" productCategory={["غذای گربه", "خاک گربه", "بهداشتی گربه"]} icon={<GiCat fontSize={20} />} />
      <MenuItems title="سگ" productCategory={["غذای سگ", "اسباب بازی سگ", "بهداشتی سگ"]} icon={<GiSittingDog fontSize={20} />} />
      <MenuItems title="پرندگان" productCategory={["غذای پرندگان", "لانه پرندگان"]} icon={<GiHummingbird fontSize={20} />} />
      <MenuItems title="جوندگان" productCategory={["ملزومات جوندگان", "بازی جوندگان"]} icon={<GiSquirrel fontSize={20} />} />
    </Box>
  );
}

export default HeaderMenus;
