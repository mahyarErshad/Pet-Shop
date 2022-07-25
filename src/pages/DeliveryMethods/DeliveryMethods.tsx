import { Box, Typography } from "@mui/material";
import React from "react";
import delivery from "../../images/delivery.jpg";

function DeliveryMethods() {
  const fontStyle = {
    fontSize: "0.875rem",
    fontWeight: "normal",
    textAlign: "justify",
    textJustify: "inter - word",
    direction: "rtl",
    mt: "0.5rem",
  };
  return (
    <>
      <Box sx={{ width: "100%", py: "1rem", px: "3rem", direction: "rtl", mb: "1rem", display: "flex", flexDirection: "column" }}>
        <Box component="img" src={delivery} alt="delivery" sx={{ mb: "0.5rem", alignSelf: "center" }} />
        <Typography sx={fontStyle}>
          {" "}
          <strong>هزینه ارسال: </strong>هزینه ارسال برای خرید بالای ۵۰۰ هزار تومان به سراسرکشور <strong>رایگان</strong> است و برای خرید های کم تر از ۵۰۰ هزار تومان ۲۹ هزار تومان می باشد (وزن و ابعاد بسته اهمیتی ندارد).
        </Typography>
        <Typography sx={fontStyle}>
          {" "}
          <strong>زمان تحویل عادی در تهران: </strong>براساس انتخاب شما مشتری عزیز است. شما هنگام ثبت سفارش روز و ساعت تحویل سفارش را میتوانید انتخاب کنید.
        </Typography>
        <Typography sx={fontStyle}>
          {" "}
          <strong>زمان تحویل فوری در تهران: </strong>در صورتی که قصد داشتید همان ساعت سفارش شما ارسال شود کافیست گزینه ارسال فوری را انتخاب کنید تا با اسنپ یا تپ سی ارسال شود توجه داشته باشید در صورت ارسال فوری ۲ ساعته با اسنپ شرط ارسال رایگان برقرار نیست.
        </Typography>
        <Typography sx={fontStyle}>
          {" "}
          <strong>زمان تحویل پست برای سایر شهرها: </strong>میانگین ۲ تا ۵ روز کاری از سوی اداره پست جمهوری اسلامی ایران می باشد (تمامی بسته ها به صورت پیشتاز ارسال می شوند).
        </Typography>
        <Typography sx={fontStyle}>
          {" "}
          <strong>زمان تحویل چاپار / تیپاکس برای سایر شهرها: </strong>بین ۱ الی ۳ روز کاری است به وسیله پست خصوصی به سفارش مشتری ارسال می شود توجه داشته باشید در این روش شرایط ارسال رایگان برقرار نیست.
        </Typography>
      </Box>
    </>
  );
}

export default DeliveryMethods;
