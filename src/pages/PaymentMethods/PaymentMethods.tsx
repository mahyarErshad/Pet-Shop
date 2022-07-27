import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import payment from "../../images/payment.jpg";

function PaymentMethods() {
  document.title = "روش های پرداخت";
  const theme = useTheme();
  const titleStyle = {
    fontSize: "1rem",
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    my: "0.7rem",
  };
  const paragraphStyle = {
    fontSize: "0.875rem",
    fontWeight: "normal",
    textAlign: "justify",
    textJustify: "inter - word",
    direction: "rtl",
    lineHeight: "1.5rem",
  };
  return (
    <Box sx={{ width: "100%", py: "1rem", px: "3rem", direction: "rtl", mb: "1rem", display: "flex", flexDirection: "column" }}>
      <Box component="img" src={payment} alt="payment" sx={{ my: "0.5rem", alignSelf: "center", width: "15.625rem", height: "15.625rem", borderRadius: "8px" }} />
      <Typography variant="h5">روش های پرداخت:</Typography>
      <Typography sx={titleStyle}>پرداخت اینترنتی:</Typography>
      <Typography sx={paragraphStyle}>
        مشتریان محترم میتوانید هزینه سفارش خود را از طریق درگاه اینترنتی و بصورت آنلاین پرداخت نمایید. در این حالت پیامکی مبنی بر ثبت موفق سفارش دریافت خواهید کرد و سفارش بصورت اتوماتیک تایید و وارد مرحله پردازش و ارسال می گردد. <br />
        برای پرداخت اینترنتی درگاه پرداخت را انتخاب نمایید و اطلاعات پرداخت خود را وارد کنید . در این روش پرداخت ، شما نیاز به اطلاعات ذیل دارید:
        <br />
        - شماره کارت (شماره 16 رقمی روی عابر بانک)
        <br />
        - رمز پویا (برای پرداخت اینترنتی لازم است قبلا رمز پویا کارت بانکی خود را فعال کرده باشید.)
        <br />
        - CVV2 ( یک کد ۳ یا ۴ رقمی است که پشت یا روی کارت‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌های بانکی درج می‌شود.)
        <br />- تاریخ انقضاء (تاریخ انقضا کارت‌ بانکی روی آن حک شده است.)
      </Typography>
      <Typography sx={titleStyle}>پرداخت در محل فقط شهر تهران :</Typography>
      <Typography sx={paragraphStyle}>مشتریان محترم شهر تهران می توانید مبلغ سفارش خود (تا سقف ۵ کیلوگرم) را به هنگام تحویل کالا، با کلیه کارت های بانکی از طریق دستگاه کارتخوان پرداخت کنید. ثبت سفارش پرداخت در محل برای بازه ارسال صبح روز بعد، فقط تا ساعت ۱۷ همان روز امکان پذیر است.</Typography>
    </Box>
  );
}

export default PaymentMethods;
