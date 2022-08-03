import { Box, Typography } from "@mui/material";
import React from "react";

function SingleProductsDescription() {
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
            • سلامت پوست و موی گربه
            <br />
            • کاهش و کنترل هربال (تجمع گلوله مو در دستگاه گوارش)
            <br />
            • غذای کامل برای گربه های پرشین بالغ (بزرگتر از 12 ماه)
            <br />
            • حاوی غلات و عصاره پروتئین گیاهی
            <br />
            • حاوی تکه‌های لذیذ در شیره مغذی گوشت
            <br />
            • سرشار از مواد معدنی و مشتقات منشا گیاهی
            <br />
            • حاوی ویتامین‌های D3, E1, E2, E4 و عناصر منگنز و روی
            <br />• دارای آنتی اکسیدان و ویتامین برای کمک به سیستم دفاعی
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SingleProductsDescription;
