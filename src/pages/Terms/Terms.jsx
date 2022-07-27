import { useTheme } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React from "react";
import terms from "../../images/terms.jpg";

function Terms() {
  document.title = "قوانین سایت";
  const theme = useTheme();
  const fontStyle = {
    fontSize: "0.875rem",
    fontWeight: "normal",
    textAlign: "justify",
    textJustify: "inter - word",
    direction: "rtl",
    my: "0.5rem",
    lineHeight: "1.5rem",
  };
  return (
    <Box sx={{ width: "100%", py: "1rem", px: "3rem", direction: "rtl", mb: "1rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <Box component="img" src={terms} alt="terms" sx={{ mb: "0.5rem", alignSelf: "center", width: "15.625rem", height: "15.625rem", borderRadius: "8px" }} />
      <Typography variant="h5" sx={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "center", direction: "rtl", my: "0.5rem", color: theme.palette.secondary.main }}>
        قوانین و مقررات سایت:{" "}
      </Typography>
      <Typography sx={fontStyle}>
        توجه داشته باشید کلیه اصول و رویه‏‌های این سایت منطبق با قوانین جمهوری اسلامی ایران ، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است. در صورتی که در قوانین مندرج ، رویه‏‌ها و سرویس‏‌های این سایت تغییراتی در آینده ایجاد شود ، در همین صفحه منتشر و به روز رسانی می شود و شما توافق می‏‌کنید که استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.
        <br />
        از درج هر گونه مطلب که بر اساس قوانين جاری کشور جمهوری اسلامی ايران ، مشمول عنوان جرم شود پرهيز شود.
        <br />
        هنگامی که شما از سرویس‌‏ ها و خدمات ما استفاده می‏‌ کنید ، سفارش اینترنتی خود را ثبت یا خرید می‏‌ کنید و یا به ما ایمیل می‏‌ زنید ، این ارتباطات به صورت الکترونیکی انجام می ‏‌شود و در صورتی که درخواست شما با رعایت کلیه اصول و رویه‏‌ ها باشد ، شما موافقت می ‌‏کنید که ما نیز به صورت الکترونیکی ( از طریق پست الکترونیکی ، سرویس پیام کوتاه و سایر سرویس‌های الکترونیکی ) به درخواست شما پاسخ دهیم.
        <br />
        همچنین آدرس ایمیل و تلفن‌ هایی که مشتری در پروفایل خود ثبت می‌کند ، تنها آدرس ایمیل و تلفن‌ های رسمی و مورد تایید مشتری است و تمام مکاتبات و پاسخ‌های فروشگاه از طریق آنها صورت می‌گیرد . جهت اطلاع رسانی رویدادها، خدمات و سرویس‌های ویژه یا پروموشن‌ها، امکان دارد ما برای اعضای وب سایت ایمیل یا پیامک ارسال نماییم . در صورتی که کاربران تمایل به دریافت اینگونه ایمیل و پیامک ‌ها نداشته باشند ، می‌توانند عضویت دریافت خبرنامه را در پروفایل خود لغو کنند.​​​​​​​
      </Typography>
    </Box>
  );
}

export default Terms;
