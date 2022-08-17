import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenus from "../HeaderMenus/HeaderMenus";
import CartIcon from "../../Utils/Buttons/Cart/Icon/CartIcon";
import Logo from "../../Utils/Logo/Logo";
import MyButton from "../../Utils/Buttons/MyButton/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { changeModalState } from "../../../redux/slice/modalSlice";

export default function PrimarySearchAppBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
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
      <AppBar position="static" sx={{ px: { lg: "5%", xs: "1rem", md: "0rem" }, width: "100%" }}>
        <Toolbar>
          <CartIcon count={quantity} />
          {loggedIn ? (
            <Button sx={{ fontSize: "1rem" }} onClick={() => dispatch(changeModalState("از حساب کاربری خارج میشوید؟"))} color="error" variant="contained">
              خروج از حساب
            </Button>
          ) : (
            <MyButton linkTo="/register" text="ورود / عضویت" />
          )}
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
    </Box>
  );
}
