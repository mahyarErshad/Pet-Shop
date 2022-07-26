import { Box, styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Fade from "@mui/material/Fade";
import { goToTop } from "../../../functions/functions";

interface Iprops {
  title: string;
  breed: string;
  image: string;
  animationDuration: string;
}

function CategoryPhotos(props: Iprops) {
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "#212121",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  const { title, breed, image, animationDuration } = props;
  const photoStyle = { height: { xs: "15.625rem", md: "31.25rem" }, width: { xs: "100%", sm: "50%", md: "50%", lg: "25%" }, cursor: "pointer", animationName: { lg: "cardAnimation", md: "" } };

  return (
    <>
      <LightTooltip title={title} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} followCursor>
        <Box onClick={() => goToTop()} sx={{ ...photoStyle, animationDuration: `${animationDuration}` }}>
          <Link to={`/products/breed/${breed}`}>
            <Box sx={{ width: "100%", height: "100%", "&:hover": { borderRadius: "16px", border: "2px solid #FFB929", zIndex: "2", transform: "scale(1.1,1.1)", transition: "all 0.3s " } }} component="img" src={image} alt={title} />
          </Link>
        </Box>
      </LightTooltip>
    </>
  );
}

export default CategoryPhotos;
