import { Box } from "@mui/system";
import React from "react";
interface props {
  image: string;
}

function SingleProductImage(props: props) {
  const image = props.image;
  return (
    <>
      <Box sx={{ width: { backgroundColor: "red", perspective: "40px", xs: "95%", md: "45%" }, minHeight: "15.625rem", maxHeight: "31.25rem", p: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box component="img" src={image} alt="تصویر محصول" sx={{ width: "100%", height: "100%", objectFit: "scale-down", borderRadius: "16px" }} />
      </Box>
    </>
  );
}

export default SingleProductImage;
