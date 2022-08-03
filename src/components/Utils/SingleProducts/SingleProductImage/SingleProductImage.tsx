import { Box } from "@mui/system";
import React from "react";
interface props {
  image: string;
}

function SingleProductImage(props: props) {
  const { image } = props;
  return (
    <>
      <Box sx={{ backgroundColor: "#ECEFF1", width: { xs: "75%", sm: "65%", md: "48%" }, height: { xs: "15.625rem", sm: "21.875rem", md: "31.25rem" }, p: "0", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}>
        <Box component="img" src={image} alt="تصویر محصول" sx={{ width: "100%", height: "100%", objectFit: "scale-down", borderRadius: "16px" }} />
      </Box>
    </>
  );
}

export default SingleProductImage;
