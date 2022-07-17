import React from "react";
// MUI
import { Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem"; // @ts-ignore
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function HeaderLoggedOut() {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", borderBottom: "1px grey solid", padding: "0 1rem", backgroundColor: theme.palette.primary.main, height: "3.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row-reverse" }}>
      <Box>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState: any) => (
            <React.Fragment>
              <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main , border: "none" , boxShadow: "none" }} variant="contained" {...bindTrigger(popupState)}>
                گربه
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </Box>
      <h1>Hello</h1>
    </Box>
  );
}

export default HeaderLoggedOut;
