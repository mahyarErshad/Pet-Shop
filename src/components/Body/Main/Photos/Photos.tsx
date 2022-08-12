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
        <CategoryPhotos title="خرید لوازم گربه" linkTo={`/products/${cat}`} image={catImage} animationDuration="2s" />
        <CategoryPhotos title="خرید لوازم سگ" linkTo={`/products/${dog}`} image={dogImage} animationDuration="2.5s" />
        <CategoryPhotos title="خرید لوازم پرندگان" linkTo={`/products/${bird}`} image={birdImage} animationDuration="3s" />
        <CategoryPhotos title="خرید لوازم جوندگان" linkTo={`/products/${rodent}`} image={pigImage} animationDuration="3.5s" />
      </Box>
    </>
  );
}

export default Photos;
