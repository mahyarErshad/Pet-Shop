import React from "react";

// MUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem"; // @ts-ignore
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
  const theme = useTheme();
  const flexDirection = props.flexRow;
  const row = flexDirection ? "row-reverse" : "column";
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: row }}>
      {/* Hardcoded Cat */}
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center" , gap: "0.5rem" }} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                گربه
              </Typography>
              <GiCat fontSize={20} />
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", direction: "rtl" }} {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>غذای گربه</MenuItem>
              <MenuItem onClick={popupState.close}>خاک گربه</MenuItem>
              <MenuItem onClick={popupState.close}>تشویقی گربه</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      {/* Hardcoded Dog */}
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center" , gap: "0.5rem" }} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                سگ
              </Typography>
              <GiSittingDog fontSize={20} />
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", direction: "rtl" }} {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>غذای سگ</MenuItem>
              <MenuItem onClick={popupState.close}>قلاده سگ</MenuItem>
              <MenuItem onClick={popupState.close}>تشویقی سگ</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center" , gap: "0.5rem" }} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                پرندگان
              </Typography>
              <GiHummingbird fontSize={20} />
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", direction: "rtl" }} {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>غذای پرندگان</MenuItem>
              <MenuItem onClick={popupState.close}>اسباب بازی پرندگان</MenuItem>
              <MenuItem onClick={popupState.close}>لوازم بهداشتی پرندگان </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center" , gap: "0.5rem"}} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                جوندگان
              </Typography>
              <GiSquirrel fontSize={20} />
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", direction: "rtl" }} {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>غذای جوندگان</MenuItem>
              <MenuItem onClick={popupState.close}>اسباب بازی جوندگان</MenuItem>
              <MenuItem onClick={popupState.close}>لوازم بهداشتی جوندگان </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </Box>
  );
}

export default HeaderMenus;
