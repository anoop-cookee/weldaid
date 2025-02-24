import React, { useEffect, useLayoutEffect, useState } from "react";
import Container from "./Container";
import ProductCard from "./ProductCard";
import proctsList from "../utilities/ProductsList";
import CarousalContainer from "./CarousalContainer";
import { SwiperSlide } from "swiper/react";

// Custom hook for handling window resize logic
// const useWindowSize = () => {
//   const [previewCount, setPreviewCount] = useState(4.1);

//   useEffect(() => {
//     const windowSizeFinder = () => {
//       if (window.innerWidth <= 480) {
//         setPreviewCount(1);
//       } else if (window.innerWidth > 480 && window.innerWidth <= 768) {
//         setPreviewCount(2);
//       } else if (window.innerWidth > 768 && window.innerWidth <= 1300) {
//         setPreviewCount(3);
//       } else {
//         setPreviewCount(4.1);
//       }
//     };

//     // Initial call
//     windowSizeFinder();

//     // Set up the event listener for window resize
//     window.addEventListener("resize", windowSizeFinder);

//     // Cleanup the event listener on unmount
//     return () => {
//       window.removeEventListener("resize", windowSizeFinder);
//     };
//   }, []);

//   return previewCount;
// };

export default function ProductsCarousal() {
  // const previewCount = useWindowSize();
  // const breakPoints = {
  //   20: {
  //     slidesPerView: 1,
  //   },
  //   350: {
  //     slidesPerView: 1.2, // For medium screens (480px and above), show 3 slides
  //   },
  //   450: {
  //     slidesPerView: 1.5, // For medium screens (480px and above), show 3 slides
  //   },
  //   550: {
  //     slidesPerView: 2, // For medium screens (480px and above), show 3 slides
  //   },
  //   768: {
  //     slidesPerView: 2.6, // For larger screens (768px and above), show 4 slides
  //   },
  //   1200: {
  //     slidesPerView: 2.8, // For even larger screens (1024px and above), show 6 slides
  //   },
  //   1500: {
  //     slidesPerView: 3.5, // For even larger screens (1024px and above), show 6 slides
  //   },
  //   1550: {
  //     slidesPerView: 4.1, // For even larger screens (1024px and above), show 6 slides
  //   },
  // }

  return (
    <div className="mb-[103px]">
      <Container>
        <CarousalContainer autoPlay={false} 
        slidesPerView={4.1} 
        // breakPoints={breakPoints}
        spaceBetween={12}>
          {proctsList.map((product) => (
            <div key={product.id}>
              <SwiperSlide className="!w-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            </div>
          ))}
        </CarousalContainer>
      </Container>
    </div>
  );
}
