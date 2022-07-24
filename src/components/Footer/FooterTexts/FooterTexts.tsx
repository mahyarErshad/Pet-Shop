import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function FooterTexts() {
  const theme = useTheme();
  const fontStyle = {
    fontSize: "0.8rem",
    color: "#4A5F73",
    fontWeight: "bold",
    cursor: "pointer",
    direction: "rtl",
    marginRight: {
      xs: "1rem",
      md: "3rem",
      lg: "5rem",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  };
  const paragraphStyle = {
    fontSize: "1rem",
    color: "#4A5F73",
    fontWeight: "normal",
    direction: "rtl",
    width: "60%",
    textAlign: "justify",
    textJustify: "inter - word",
  };
  const linkStyle = { textDecoration: "none" };
  function goToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Box sx={{ p: "1rem", mt: "1.5rem", mb: "1.5rem", width: "100%", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
        <Box sx={{ width: "30%", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: "0.7rem" }}>
          <Link to="/" style={linkStyle}>
            <Typography onClick={() => goToTop()} sx={fontStyle}>
              صفحه اصلی
            </Typography>
          </Link>
          <Typography sx={fontStyle}>رویه ارسال سفارش</Typography>
          <Typography sx={fontStyle}>شیوه های پرداخت</Typography>
          <Typography sx={fontStyle}>قوانین و مقررات سایت</Typography>
          <Typography sx={fontStyle}>تماس با ما</Typography>
        </Box>
        <Typography sx={paragraphStyle}>پت شاپ فینیکس به عنوان یکی از قدیمی‌ترین پت شاپ های اینترنتی با بیش از هزار محصول خارجی آماده پاسخگویی به همه ی نیازهای پت شماست. پت شاپ فینیکس، ویترینی از غذای سگ و غذای گربه با برندهای معتبر مانند: رویال کنین، جوسرا و ... همراه با طیف وسیعی از لوازم جانبی برای پت شماست. کالای مورد نیاز پت خود را میتوانید با چند کلیک انتخاب کنید و در سریع ترین زمان ممکن درب منزل تحویل بگیرید.</Typography>
      </Box>
    </>
  );
}

export default FooterTexts;
