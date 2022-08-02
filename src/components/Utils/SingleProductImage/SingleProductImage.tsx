import { Box } from "@mui/system";
import React, { useState } from "react";
interface props {
  image: string;
}

function SingleProductImage(props: props) {
  const image = props.image;
  const [style, setStyle] = useState(true);
  const onMouseEnterHandler = function (event: any) {
    update(event);
  };
  const onMouseLeaveHandler = function () {
    setStyle(false);
  };
  const onMouseMoveHandler = function (event: any) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };
  return (
    <>
      <Box onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} onMouseMove={onMouseMoveHandler} sx={{ width: { backgroundColor: "red", perspective: "40px", xs: "95%", md: "45%" }, minHeight: "15.625rem", maxHeight: "31.25rem", p: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box component="img" src={image} alt="تصویر محصول" sx={{ width: "100%", height: "100%", objectFit: "scale-down" }} />
      </Box>
    </>
  );
}

export default SingleProductImage;
