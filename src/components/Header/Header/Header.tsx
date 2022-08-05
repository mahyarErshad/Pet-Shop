import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Fade, styled, Tooltip, tooltipClasses, TooltipProps, Typography, useTheme } from "@mui/material";
import HeaderMenus from "../HeaderMenus/HeaderMenus";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "../../../Style/global/style.css";
import LoginRegisterButton from "../../Utils/Buttons/LoginRegisterButton/LoginRegisterButton";
import CartIcon from "../../Utils/Buttons/Cart/Icon/CartIcon";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "#212121",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

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
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
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
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <HeaderMenus flexRow={false} />
    </Menu>
  );
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "0.5rem" }}>
      <AppBar position="static">
        <Toolbar>
          <CartIcon count={2} />
          <LoginRegisterButton text="ورود / عضویت" />
          <IconButton sx={{ margin: "0 0.5rem" }} size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
            <AccountCircle />
            <Typography variant="h6">فلانی</Typography>
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <HeaderMenus flexRow={true} />
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ mt: "1rem", marginLeft: "0.5rem" }}>
            <Link to="/">
              <LightTooltip title="بازگشت به صفحه اصلی" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} followCursor>
                <Box component="img" src={logo} alt="Home" sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: `2px solid ${theme.palette.secondary.main}`, borderRadius: "50%" }} />
              </LightTooltip>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
