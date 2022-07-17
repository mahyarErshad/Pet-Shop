import React from "react";
// MUI
import { Box, useTheme } from "@mui/material";

// Components
import HeaderMenues from "../HeaderMenues/HeaderMenues";

function HeaderLoggedOut() {
  const theme = useTheme();
  return (
    <>
    <Box sx={{ width: "100%", borderBottom: `1px ${theme.palette.secondary.main} solid`, padding: "0 1rem", backgroundColor: theme.palette.primary.main, height: "3.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row-reverse" }}>
      <HeaderMenues />
    </Box>
    </>
  );
}

export default HeaderLoggedOut;
