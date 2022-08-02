import { Box } from "@mui/system";
import React from "react";
interface props {
  image: string;
}

function SingleProductImage(props: props) {
  const image = props.image;
  return (
    <>
      <Box component="img" src={image} alt="تصویر محصول" sx={{ width: { xs: "100%", md: "50%" }, minHeight: "15.625rem", maxHeight: "31.25rem", objectFit: "scale-down" }} />
    </>
  );
}

export default SingleProductImage;
