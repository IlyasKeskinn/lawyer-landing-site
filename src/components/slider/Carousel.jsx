import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import { SlideItem } from "./SlideItem";
import { Navigation } from "swiper/modules";

export const Carousel = () => {
  useEffect(() => {
    const mySwiper = document.querySelector(".mySwiper").swiper;

    mySwiper.on("slideChange", () => {
      const captionHeaders = document.querySelectorAll(".animate-slideInTop");
      captionHeaders.forEach((captionHeader) => {
        captionHeader.classList.remove(
          "animate-slideInTop",
          "animate-slideInRight",
          "animate-slideInLeft"
        );
        void captionHeader.offsetWidth;
        captionHeader.classList.add(
          "animate-slideInTop",
          "animate-slideInRight",
          "animate-slideInLeft"
        );
      });
    });
  });
  const slides = [
    {
      title: "We are exprets",
      desc: "The best law practices & services for all your legal need.",
      img: "slide_1.jpeg",
    },
    {
      title: "Client Focused",
      desc: "The best law practices & services for all your legal need.",
      img: "slide_2.jpeg",
    },
    {
      title: "Jutice Oriented",
      desc: "The best law practices & services for all your legal need.",
      img: "slide_3.jpeg",
    },
  ];
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper  max-h-full max-w-full"
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <SlideItem slide={slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
