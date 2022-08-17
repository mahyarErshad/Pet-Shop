import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenus from "../HeaderMenus/HeaderMenus";
import CartIcon from "../../Utils/Buttons/Cart/Icon/CartIcon";
import AccountIcon from "../../Utils/Buttons/AccountIcon/AccountIcon";
import Logo from "../../Utils/Logo/Logo";
import MyButton from "../../Utils/Buttons/MyButton/MyButton";
import { useSelector } from "react-redux";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>خروج از حساب کاربری</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <HeaderMenus flexRow={false} />
    </Menu>
  );
  const quantity = useSelector((store: any) => store.cart.quantity);
  const { loggedIn } = useSelector((store: any) => store.loggedIn);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "0.5rem" }}>
      <AppBar position="static">
        <Toolbar></Toolbar>
          <CartIcon count={quantity} />
          {loggedIn ? <AccountIcon setAnchorEl={setAnchorEl} menuId={menuId} title="فلانی" /> : <MyButton linkTo="/register" text="ورود / عضویت" />}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <HeaderMenus flexRow={true} />
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Logo />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
