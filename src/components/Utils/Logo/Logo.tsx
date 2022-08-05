import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Fade, styled, Tooltip, tooltipClasses, TooltipProps, useTheme } from "@mui/material";
import logo from "../../../images/logo.png";
import "../../../Style/global/style.css";

function Logo() {
  const theme = useTheme();
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "#212121",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  return (
    <>
      {" "}
      <Box sx={{ mt: "1rem", marginLeft: "0.5rem" }}>
        <Link className="noDecoration" to="/">
          <LightTooltip title="بازگشت به صفحه اصلی" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} followCursor>
            <Box component="img" src={logo} alt="Home" sx={{ height: "3rem", backgroundColor: theme.palette.primary.main, border: `2px solid ${theme.palette.secondary.main}`, borderRadius: "50%" }} />
          </LightTooltip>
        </Link>
      </Box>
    </>
  );
}

export default Logo;
