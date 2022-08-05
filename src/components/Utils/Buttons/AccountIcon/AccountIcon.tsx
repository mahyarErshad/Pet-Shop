import { AccountCircle } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";

interface IProps {
  setAnchorEl: Function;
  menuId: string;
  title: string;
}

function AccountIcon(props: IProps) {
  const { setAnchorEl, menuId, title } = props;
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <IconButton sx={{ margin: "0 0.5rem" }} size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
        <AccountCircle />
        <Typography variant="h6">{title}</Typography>
      </IconButton>
    </>
  );
}

export default AccountIcon;
