import React from "react";
import Container from "./Container";
import YellowBtn from "./YellowBtn";

export default function Hero() {
  return (
    <div className="mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2  justify-between gap-3">
          <div className="flex flex-col text-wrap gap-[56px]">
            <div className="font-normal text-[#6D6D6D] text-2xl leading-[28px] max-w-[500px] lg:pt-20">
              Providing top-quality welding consumables, safety gear, and more
              since 2004.
            </div>
            <div className="text-[#141414] font-bold text-[40px] leading-[40px] lg:text-[80px] lg:leading-[80px] max-w-[616px]">
              Trusted partner in industrial solutions
            </div>
            <div>
              <YellowBtn>Explore Products</YellowBtn>
            </div>
            <div className="flex">
                <div className="text-[#141414] font-semibold text-[15px] leading-[18px] w-[167px]">
                ISO 9001 : 2008 Certified Company
                </div>
                <div className="flex gap-[14px]">
                 <div>
                 <img className="h-[43px]"src="http://beta.staging-servers.com/weldaid/public/assets/web/img/certificate-icon-1.webp" alt="" />
                 </div>
                 <div>
                 <img className="h-[43px]"src="http://beta.staging-servers.com/weldaid/public/assets/web/img/certificate-icon-2.webp" alt="" />
                 </div>
                  <div>
                  <img className="h-[43px]"src="http://beta.staging-servers.com/weldaid/public/assets/web/img/certificate-icon-3.webp" alt="" />
                  </div>
                </div>
            </div>
          </div>
          <div className="">
            <img
              className="max-w-full"
              src="http://beta.staging-servers.com/weldaid/public/assets/web/img/h-ban-img.webp"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
