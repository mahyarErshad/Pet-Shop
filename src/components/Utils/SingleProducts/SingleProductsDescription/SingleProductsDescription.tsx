import { Box, Typography } from "@mui/material";
import React from "react";
interface IProps {
  description: string;
}

function SingleProductsDescription(props: IProps) {
  const { description } = props;
  const paragraphStyle = {
    fontSize: "1rem",
    fontWeight: "normal",
    width: "100%",
    textAlign: "justify",
    textJustify: "inter - word",
    lineHeight: "1.5rem",
  };
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", px: "1rem", justifyContent: "flex-end", mt: "1rem", flexDirection: "column", gap: "1rem" }}>
        <Typography dir="rtl" sx={{ fontSize: "1.5rem", fontWeight: "bold" }} variant="h5">
          توضیحات محصول:
        </Typography>
        <Box sx={{ width: "100%", px: "1.5rem" }}>
          <Typography dir="rtl" sx={paragraphStyle}>
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SingleProductsDescription;
