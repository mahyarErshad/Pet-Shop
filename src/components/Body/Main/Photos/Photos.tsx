import { Box } from "@mui/material";
import React from "react";
import "../../../../Style/card-animation/animation.css";
import CategoryPhotos from "../../../Utils/CategoryPhotos/CategoryPhotos";

// images
import catImage from "../../../../images/cat.jpg";
import dogImage from "../../../../images/dog.jpg";
import birdImage from "../../../../images/bird.jpg";
import pigImage from "../../../../images/pig.jpg";

function Photos() {
  const cat = "گربه";
  const dog = "سگ";
  const bird = "پرندگان";
  const rodent = "جوندگان";
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", flexWrap: "wrap", flexDirection: "row-reverse", marginBottom: "0.5rem" }}>
        <CategoryPhotos title="خرید لوازم گربه" breed={cat} image={catImage} animationDuration="2s" />
        <CategoryPhotos title="خرید لوازم سگ" breed={dog} image={dogImage} animationDuration="2.5s" />
        <CategoryPhotos title="خرید لوازم پرندگان" breed={bird} image={birdImage} animationDuration="3s" />
        <CategoryPhotos title="خرید لوازم جوندگان" breed={rodent} image={pigImage} animationDuration="3.5s" />
      </Box>
    </>
  );
}

export default Photos;
