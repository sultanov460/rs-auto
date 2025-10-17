"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
        type: "spring",
        stiffness: 50,
        damping: 12,
      }}
      className="relative  flex justify-center items-center mt-10"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        onSwiper={setSwiper}
      >
        <SwiperSlide>
          <img
            src="RS7.JPG"
            alt=""
            className="w-[90%] max-h-220 mx-auto rounded-2xl border-2 border-[var(--main-c)] cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Chiron.JPG"
            alt=""
            className="w-[90%] max-h-220 mx-auto rounded-2xl border-2 border-[var(--main-c)] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Ferrari.JPG"
            alt=""
            className="w-[90%] max-h-220 mx-auto rounded-2xl border-2 border-[var(--main-c)] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Maybach.JPG"
            alt=""
            className="w-[90%] max-h-220 mx-auto rounded-2xl border-2 border-[var(--main-c)] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="G63.JPG"
            alt=""
            className="w-[90%] max-h-220 mx-auto rounded-2xl border-2 border-[var(--main-c)] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="CyberTruck.JPG"
            alt=""
            className="w-[90%] max-h-220 mx-auto rounded-2xl border-2 border-[var(--main-c)] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="Huracan.JPG"
            alt=""
            className="w-[90%] max-h-220 mx-auto rounded-2xl border-2 border-[var(--main-c)] "
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Slider;
