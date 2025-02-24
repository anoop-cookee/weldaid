/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./RequestBtn.css";

export default function YellowBtn({children}) {
  return (
    <div className='yellow-btn-container p-[1px] inline-block rounded-[12px]'>
      <button className="font-medium text-lg text-center text-[#552900] 
      rounded-[12px] px-[20px] py-[16px] hover:cursor-pointer yellow-btn hover:opacity-85 transition-opacity duration-300 leading-5">
      {children}
    </button>
    </div>
  )
}
