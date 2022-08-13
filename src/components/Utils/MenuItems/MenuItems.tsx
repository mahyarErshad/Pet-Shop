import React from "react";
import { Link } from "react-router-dom";
import "../../../Style/global/style.css";

// MUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { MenuItem, Typography, useTheme } from "@mui/material";
interface IProps {
  title: string;
  productCategory: any;
  icon: any;
}

function MenuItems(props: IProps) {
  const { productCategory, title, icon } = props;
  const theme = useTheme();
  return (
    <>
      <PopupState variant="popover" popupId="cat-popup-menu">
        {(popupState: any) => (
          <React.Fragment>
            <Button sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: "none", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.2rem" }} variant="contained" {...bindTrigger(popupState)}>
              <Typography align="center" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                {title}
              </Typography>
              {icon}
            </Button>
            <Menu sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", direction: "rtl" }} {...bindMenu(popupState)}>
              {productCategory.map((productCategory: any) => (
                <Link className="noDecoration" to={`/products/category/${productCategory}`}>
                  <MenuItem onClick={popupState.close} sx={{ fontSize: "0.875rem", textAlign: "right", color: "#000" }} dir="rtl">
                    {productCategory}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}

export default MenuItems;
