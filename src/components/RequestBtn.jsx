import React from "react";
import "./RequestBtn.css";

export default function RequestBtn({children}) {
  return (
    <div className="rounded-[12px] p-[1px] rqst-btn-red-container inline-block">
      <button className="font-medium text-lg text-center text-[#FFFFE6] rounded-[12px] px-[20px] py-[16px] bg-linear-to-b from-[#BB5A00] to-[#552900] hover:cursor-pointer rqst-btn-red hover:opacity-85 transition-opacity duration-300 leading-5">
      {children}
    </button>
    </div>
  );
}
