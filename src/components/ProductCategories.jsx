import React from "react";
import Container from "./Container";
import exploreText from "../assets/explore.png";
import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";
import productCategoriesList from "../utilities/productCategoriesList";
import unionImg from "../assets/Union.png";

export default function ProductCategories() {
  return (
    <div className="">
      <Container>
        <div className="text-center font-bold text-[44px] leading-[50px] sm:text-[54px] lg:text-[64px] sm:leading-[60px] lg:leading-[70px] bg-[url(/src/assets/bg-products.png)] pt-[124px] pb-[50px] bg-no-repeat bg-bottom bg-contain">
          <span className="relative">
            Products
            <div
              className="absolute top-0 left-1/2 transform -translate-x-8 -translate-y-2 w-[100px] lg:w-[111.719705926589px] explore-text text-[#DE9C00] text-5xl leading-[52px] -rotate-7"
            >explore</div>
          </span>
        </div>
        <div className="text-center grid grid-cols-2 lg:grid-cols-12 gap-2 justify-between">
          {productCategoriesList.map((category, index) => {
            const isSpan = index % 3 === 0 ? true : false;
            const isSpanInLg = index % 6 === 3 ? true : false;
            const isReduceWidth =
              index % 6 === 4 || index % 6 === 5 ? true : false;
            return (
              <div
                key={category.id}
                className={`${
                  isSpan ? "col-span-2" : "row-span-2"
                }  lg:row-span-1 h-[346px] ${
                  isSpanInLg
                    ? "lg:col-span-6"
                    : isReduceWidth
                    ? "lg:col-span-3"
                    : "lg:col-span-4"
                }

            `}
              >
                <div className="rounded-[26px] relative group h-full">
                  <div className="absolute w-full h-full top-0 left-0 bg-amber-400 rounded-[26px] group-hover:hidden overlay-grid"></div>
                  <img
                    className="rounded-[26px] w-full h-full object-cover"
                    src={category.Img}
                    alt=""
                  />
                  <div className="absolute top-[24px] left-[24px] text-[#FFFFE6] font-bold text-[14px] leading-[16px] lg:text-[24px] lg:leading-[26px]">
                    {category.title}
                  </div>
                  <div className="absolute bottom-[24px] left-[24px] text-[#FFFFFF] font-normal text-[10px] leading-[13px] lg:text-[12px] lg:leading-[16px] flex flex-col">
                    <div>
                      <img src={unionImg} alt="" />
                    </div>
                    <div className="max-w-[283px] text-left">
                      {category.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
