/* eslint-disable react/prop-types */
import React from "react";
import unionImg from '../assets/Union.png'
import './RequestBtn.css'

export default function ProductCard({ product }) {
  return (
    <div className="w-[250px] h-[350px] lg:w-[312px] lg:h-[402px] rounded-[24px] bg-white border border-[#E7E7E7] p-5 flex flex-col justify-between">
      <div className=" text-center relative">
        <img className="w-[200px] h-[150px] lg:w-[260px] lg:h-[200px] object-contain" src={product.image} alt="" />
        <img className="absolute bottom-5" src={unionImg} alt="" />
      </div>
      <div className="font-semibold text-[18px] line-clamp-2 leading-[22px] lg:text-[24px] lg:leading-[28px]">
        {product.title}
      </div>
      <div className="text-[13px] leading-[13px] lg:text-[14px] lg:leading-[16px] line-clamp-3">
        {product.description}
      </div>
      <div>
        <div className="inline-block rounded-[8px] p-[1px] view-pd-btn-container w-[97%] max-w-[272px]">
        <button className="w-[100%] font-semibold text-[14px] leading-[14px] text-[#552900] view-pd-btn rounded-[8px] py-3">
            View Details
        </button>
        </div>
      </div>
    </div>
  );
}
