import React from "react";
import MenuItems from "../../Utils/MenuItems/MenuItems";

// MUI
import { Box } from "@mui/material";
// icons
import { GiCat } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { GiHummingbird } from "react-icons/gi";
import { GiSquirrel } from "react-icons/gi";
import MyButton from "../../Utils/Buttons/MyButton/MyButton";
interface Iprops {
  flexRow?: boolean;
}

function HeaderMenus(props: Iprops) {
  const all = "all";
  const flexDirection = props.flexRow;
  const row = flexDirection ? "row-reverse" : "column";
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: row }}>
      <MenuItems title="گربه" productCategory={["غذای گربه", "خاک گربه", "بهداشتی گربه"]} icon={<GiCat fontSize={20} />} />
      <MenuItems title="سگ" productCategory={["غذای سگ", "اسباب بازی سگ", "بهداشتی سگ"]} icon={<GiSittingDog fontSize={20} />} />
      <MenuItems title="پرندگان" productCategory={["غذای پرندگان", "لانه پرندگان"]} icon={<GiHummingbird fontSize={20} />} />
      <MenuItems title="جوندگان" productCategory={["ملزومات جوندگان", "بازی جوندگان"]} icon={<GiSquirrel fontSize={20} />} />
      <MyButton text="همه محصولات" color="primary" linkTo={`/products/${all}`} />
    </Box>
  );
}

export default HeaderMenus;
