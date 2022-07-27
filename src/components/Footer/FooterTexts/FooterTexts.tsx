import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../../Style/global/style.css";

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
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <Box sx={{ p: "1rem", mt: "1.5rem", mb: "1.5rem", width: "100%", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
        <Box sx={{ width: "30%", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: "0.7rem" }}>
          <Link to="/" className="noDecoration">
            <Typography onClick={() => goToTop()} sx={fontStyle}>
              صفحه اصلی
            </Typography>
          </Link>
          <Link to="/delivery-methods" className="noDecoration">
            <Typography sx={fontStyle} onClick={() => goToTop()}>
              رویه ارسال سفارش
            </Typography>
          </Link>
          <Link to="/payment-methods" className="noDecoration">
            <Typography onClick={() => goToTop()} sx={fontStyle}>
              روش های پرداخت
            </Typography>
          </Link>
          <Link to="/terms" className="noDecoration">
            <Typography onClick={() => goToTop()} sx={fontStyle}>
              قوانین و مقررات سایت
            </Typography>
          </Link>
          <Link to="/contact" className="noDecoration">
            <Typography onClick={() => goToTop()} sx={fontStyle}>
              تماس با ما
            </Typography>
          </Link>
        </Box>
        <Typography sx={paragraphStyle}>پت شاپ فینیکس به عنوان یکی از قدیمی‌ترین پت شاپ های اینترنتی با بیش از هزار محصول خارجی آماده پاسخگویی به همه ی نیازهای پت شماست. پت شاپ فینیکس، ویترینی از غذای سگ و غذای گربه با برندهای معتبر مانند: رویال کنین، جوسرا و ... همراه با طیف وسیعی از لوازم جانبی برای پت شماست. کالای مورد نیاز پت خود را میتوانید با چند کلیک انتخاب کنید و در سریع ترین زمان ممکن درب منزل تحویل بگیرید.</Typography>
      </Box>
    </>
  );
}

export default FooterTexts;
