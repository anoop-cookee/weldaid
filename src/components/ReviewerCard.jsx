/* eslint-disable react/prop-types */
import React from "react";
import unionImg from "../assets/Union-profile.png"

export default function ReviewerCard({ review }) {
  return (
    <div className="flex flex-col justify-between p-3 sm:p-5 lg:p-8 min-h-[568px]">
      {/* Profile */}
      <div className="flex flex-col gap-12">
        <div className="flex gap-[7px]">
          <div>
            <img
              className="w-[64px] h-[64px] rounded-full"
              src={review.img}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-[24px] leading-7 text-[#3D3D3D]">
              {review.name}
            </div>
            <div className="text-[14px] leading-[16px] text-[#6D6D6D]">
              {review.title}
            </div>
          </div>
        </div>
        <div>
            <img src={unionImg} alt="" />
        </div>
      </div>
      {/* Review */}
      <div className="font-semibold text-[22px] leading-[28px] lg:text-[32px] lg:leading-[38px] text-[#141414] max-w-[603px]">
        {review.review}
      </div>
    </div>
  );
}
