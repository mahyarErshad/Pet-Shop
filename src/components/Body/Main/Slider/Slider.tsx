import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "../../../../Style/slider/slider.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { Divider, styled, Typography } from "@mui/material";

// slider photos
import royal from "../../../../images/slider/royal.png";
import clauder from "../../../../images/slider/clauder.jpg";
import josera from "../../../../images/slider/josera.png";
import happycat from "../../../../images/slider/happycat.png";
import jerhigh from "../../../../images/slider/jerhigh.jpg";
import reflex from "../../../../images/slider/reflex.png";
import trxie from "../../../../images/slider/trxie.png";
import bephar from "../../../../images/slider/bephar.jpg";

export default function Slider() {
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    marginBottom: "0.5rem",
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {},
  }));

  return (
    <>
      <Root>
        <Divider textAlign="right">
          <Typography variant="h5">برندهای موجود در سایت</Typography>
        </Divider>
      </Root>
      <Swiper
        rewind={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={royal} alt="Royal Canin" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={josera} alt="Josera" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={clauder} alt="dr.clauder" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={happycat} alt="happycat" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={jerhigh} alt="Jerhigh" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={reflex} alt="Reflex" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trxie} alt="Trxie" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bephar} alt="Bephar" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
