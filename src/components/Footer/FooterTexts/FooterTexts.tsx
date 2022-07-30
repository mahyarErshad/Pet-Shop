import { Box, Typography } from "@mui/material";
import React from "react";
import FooterLinks from "./FooterLinks";

function FooterTexts() {
  const paragraphStyle = {
    fontSize: "1rem",
    color: "#4A5F73",
    fontWeight: "normal",
    direction: "rtl",
    width: "60%",
    textAlign: "justify",
    textJustify: "inter - word",
  };
  return (
    <>
      <Box sx={{ p: "1rem", mt: "1.5rem", mb: "1.5rem", width: "100%", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
        <Box sx={{ width: "30%", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: "0.7rem" }}>
          <FooterLinks text="صفحه اصلی" link="/" />
          <FooterLinks text="رویه ارسال سفارش" link="/delivery-methods" />
          <FooterLinks text="روش های پرداخت" link="/payment-methods" />
          <FooterLinks text="قوانین و مقررات سایت" link="/terms" />
          <FooterLinks text="تماس با ما" link="/contact" />
        </Box>
        <Typography sx={paragraphStyle}>پت شاپ فینیکس به عنوان یکی از قدیمی‌ترین پت شاپ های اینترنتی با بیش از هزار محصول خارجی آماده پاسخگویی به همه ی نیازهای پت شماست. پت شاپ فینیکس، ویترینی از غذای سگ و غذای گربه با برندهای معتبر مانند: رویال کنین، جوسرا و ... همراه با طیف وسیعی از لوازم جانبی برای پت شماست. کالای مورد نیاز پت خود را میتوانید با چند کلیک انتخاب کنید و در سریع ترین زمان ممکن درب منزل تحویل بگیرید.</Typography>
      </Box>
    </>
  );
}

export default FooterTexts;
