import React from "react";
import ellipseIcon from "../assets/ellipse-nav.png"
import './NavList.css'

export default function NavList({size}) {
  const navList = [
    { text: "HOME", path: "#" },
    { text: "ABOUT", path: "#" },
    { text: "PRODUCTS", path: "#" },
    { text: "CONTACT", path: "#" },
  ];

  return (
    <ul className="flex flex-col lg:flex-row lg:w-[346px] lg:h-[25px] lg:gap-[32px]">
      {navList.map((item) => {
        return (
          <li key={item.text} className="">
            <div className={`invisible lg:visible flex justify-between items-center`}>
                <div><img src={ellipseIcon} alt="" /></div>
                <div className="h-[1px] bg-linear-to-r from-[#E6E6D0] to-[#FFFFE6] grow-1 nav-icon"></div>
            </div>
            <div>
            <a className="no-underline font-semibold text-[12px] hover:text-[#DE9C00]" href={item.path}>
              {item.text}
            </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}


