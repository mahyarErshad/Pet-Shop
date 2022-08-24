import { ListItemButton, Typography } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
  icon: any;
}

function DashboardListItem(props: IProps) {
  const { text, icon } = props;
  return (
    <>
      <ListItemButton sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "0.2rem" }}>
        {icon}
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>{text}</Typography>
      </ListItemButton>
    </>
  );
}

export default DashboardListItem;
