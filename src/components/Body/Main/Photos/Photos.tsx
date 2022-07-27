import { Box, styled } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import React from "react";
import "../../../../Style/card-animation/animation.css";

// images
import cat from "../../../../images/cat.jpg";
import dog from "../../../../images/dog.jpg";
import bird from "../../../../images/bird.jpg";
import pig from "../../../../images/pig.jpg";

function Photos() {
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "#212121",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  const photoStyle = { height: { xs: "15.625rem", md: "31.25rem" }, width: { xs: "100%", sm: "50%", md: "50%", lg: "25%" }, cursor: "pointer", animationName: { lg: "cardAnimation", md: "" }, animationDuration: "2s", "&:hover": { zIndex: "2", transform: "scale(1.1,1.1)", borderRadius: "16px", border: "2px solid #FFB929", transition: " 0.3s " } };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", flexWrap: "wrap", flexDirection: "row-reverse", marginBottom: "0.5rem" }}>
        <LightTooltip title="خرید لوازم گربه" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} followCursor>
          <Box sx={photoStyle} component="img" src={cat} alt="cat" />
        </LightTooltip>
        <LightTooltip title="خرید لوازم سگ" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} followCursor>
          <Box sx={photoStyle} component="img" src={dog} alt="dog" />
        </LightTooltip>
        <LightTooltip title="خرید لوازم پرندگان" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} followCursor>
          <Box sx={photoStyle} component="img" src={bird} alt="bird" />
        </LightTooltip>
        <LightTooltip title="خرید لوازم جوندگان" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} followCursor>
          <Box sx={photoStyle} component="img" src={pig} alt="rodents" />
        </LightTooltip>
      </Box>
    </>
  );
}

export default Photos;
