import React from "react";
import MenuItems from "../../Utils/MenuItems/MenuItems";

// MUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Box, Typography, useTheme } from "@mui/material";
// icons
import { GiCat } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { GiHummingbird } from "react-icons/gi";
import { GiSquirrel } from "react-icons/gi";
interface Iprops {
  flexRow?: boolean;
}

function HeaderMenus(props: Iprops) {
  const flexDirection = props.flexRow;
  const row = flexDirection ? "row-reverse" : "column";
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: row }}>
      <MenuItems title="گربه" productCategory={["غذای گربه", "خاک گربه", "بهداشتی گربه"]} icon={<GiCat fontSize={20} />} />
      {/* Hardcoded Dog
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                سگ
              </Typography>
              <GiSittingDog fontSize={20} />
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", direction: "rtl" }} {...bindMenu(popupState)}>
              <MenuItems category="غذای سگ" />
              <MenuItems category="اسباب بازی سگ" />
              <MenuItems category="بهداشتی سگ" />
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                پرندگان
              </Typography>
              <GiHummingbird fontSize={20} />
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} {...bindMenu(popupState)}>
              <MenuItems category="غذای پرندگان" />
              <MenuItems category="لانه پرندگان" />
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                جوندگان
              </Typography>
              <GiSquirrel fontSize={20} />
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", direction: "rtl" }} {...bindMenu(popupState)}>
              <MenuItems category="ملزومات جوندگان" />
              <MenuItems category="بازی جوندگان" />
            </Menu>
          </React.Fragment>
        )}
      </PopupState> */}
    </Box>
  );
}

export default HeaderMenus;
