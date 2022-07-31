import { Box } from "@mui/material";
import React from "react";
import "../../../../Style/card-animation/animation.css";
import CategoryPhotos from "../../../Utils/CategoryPhotos/CategoryPhotos";

// images
import cat from "../../../../images/cat.jpg";
import dog from "../../../../images/dog.jpg";
import bird from "../../../../images/bird.jpg";
import pig from "../../../../images/pig.jpg";

function Photos() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", flexWrap: "wrap", flexDirection: "row-reverse", marginBottom: "0.5rem" }}>
        <CategoryPhotos title="خرید لوازم گربه" linkTo="/products" image={cat} animationDuration="2s" />
        <CategoryPhotos title="خرید لوازم سگ" linkTo="/products" image={dog} animationDuration="2.5s" />
        <CategoryPhotos title="خرید لوازم پرندگان" linkTo="/products" image={bird} animationDuration="3s" />
        <CategoryPhotos title="خرید لوازم جوندگان" linkTo="/products" image={pig} animationDuration="3.5s" />
      </Box>
    </>
  );
}

export default Photos;
