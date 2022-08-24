import { ListItemButton, Typography } from "@mui/material";
import React from "react";

function DashboardListItem() {
  return (
    <>
      <ListItemButton sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "0.5rem" }}>
        <InboxIcon />
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>کاربران</Typography>
      </ListItemButton>
    </>
  );
}

export default DashboardListItem;
