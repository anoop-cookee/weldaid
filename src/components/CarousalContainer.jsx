import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// observer={true}
//   observeParents={true}

export default function CarousalContainer({
  children,
  breakPoints,
  slidesPerView,
  autoPlay,
  spaceBetween,
  className,
  pagination
}) {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={spaceBetween}
        // slidesPerView={slidesPerView} // This ensures that each slide has a fixed width
        autoplay={
          autoPlay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        className={`${className&&className}`}
        pagination = {pagination}
        slidesPerView = "auto"
        modules={[Autoplay, Pagination]}
        // breakpoints={breakPoints} // Use breakpoints directly here
        observer={true}
        observeParents={true}
      >
        {children}
      </Swiper>
    </div>
  );
}
