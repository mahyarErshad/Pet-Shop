import React from "react";

// MUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem"; // @ts-ignore
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Typography, useTheme } from "@mui/material";
// icons
import { FaCat } from "react-icons/fa";

function HeaderMenues() {
  const theme = useTheme();
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                گربه
              </Typography>
              <FaCat />
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", direction: "rtl" }} {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>غذای گربه</MenuItem>
              <MenuItem onClick={popupState.close}>خاک گربه</MenuItem>
              <MenuItem onClick={popupState.close}>تشویقی گربه</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}

export default HeaderMenues;
