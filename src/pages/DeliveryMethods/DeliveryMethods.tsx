import { useTheme } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React from "react";
import delivery from "../../images/delivery.jpg";

function DeliveryMethods() {
  const theme = useTheme();
  document.title = "روش های ارسال";
  const fontStyle = {
    fontSize: "0.875rem",
    fontWeight: "normal",
    textAlign: "justify",
    textJustify: "inter - word",
    direction: "rtl",
    mt: "0.5rem",
    lineHeight: "1.5rem",
  };
  const strongStyle = {
    color: theme.palette.secondary.main,
  };
  return (
    <>
      <Box sx={{ width: "100%", py: "1rem", px: "3rem", direction: "rtl", mb: "1rem", display: "flex", flexDirection: "column" }}>
        <Box component="img" src={delivery} alt="delivery" sx={{ mb: "0.5rem", alignSelf: "center" }} />
        <Typography sx={fontStyle}>
          {" "}
          <strong style={strongStyle}>هزینه ارسال: </strong>
          <br />
          هزینه ارسال برای خرید بالای ۵۰۰ هزار تومان به سراسرکشور <strong style={strongStyle}>رایگان</strong> است و برای خرید های کم تر از ۵۰۰ هزار تومان ۲۹ هزار تومان می باشد (وزن و ابعاد بسته اهمیتی ندارد).
        </Typography>
        <Typography sx={fontStyle}>
          {" "}
          <strong style={strongStyle}>زمان تحویل عادی در تهران: </strong>
          <br />
          براساس انتخاب شما مشتری عزیز است. شما هنگام ثبت سفارش روز و ساعت تحویل سفارش را میتوانید انتخاب کنید.
        </Typography>
        <Typography sx={fontStyle}>
          {" "}
          <strong style={strongStyle}>زمان تحویل فوری در تهران: </strong>
          <br />
          در صورتی که قصد داشتید همان ساعت سفارش شما ارسال شود کافیست گزینه ارسال فوری را انتخاب کنید تا با اسنپ یا تپ سی ارسال شود توجه داشته باشید در صورت ارسال فوری ۲ ساعته با اسنپ شرط ارسال رایگان برقرار نیست.
        </Typography>
        <Typography sx={fontStyle}>
          {" "}
          <strong style={strongStyle}>زمان تحویل پست برای سایر شهرها: </strong>
          <br />
          میانگین ۲ تا ۵ روز کاری از سوی اداره پست جمهوری اسلامی ایران می باشد (تمامی بسته ها به صورت پیشتاز ارسال می شوند).
        </Typography>
        <Typography sx={fontStyle}>
          {" "}
          <strong style={strongStyle}>زمان تحویل چاپار / تیپاکس برای سایر شهرها: </strong>
          <br />
          بین ۱ الی ۳ روز کاری است به وسیله پست خصوصی به سفارش مشتری ارسال می شود توجه داشته باشید در این روش شرایط ارسال رایگان برقرار نیست.
        </Typography>
      </Box>
    </>
  );
}

export default DeliveryMethods;
