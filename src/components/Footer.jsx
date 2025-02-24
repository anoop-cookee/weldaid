import React from "react";
import Container from "./Container";
import logo2 from "../assets/Logo2.png";
import YellowBtn from "./YellowBtn";
import unionFooterImg from "../assets/union-footer.png";
import footerList from "../utilities/FooterList";
import scrollIcon from "../assets/scroll-icon.png"

export default function Footer() {
  return (
    <footer className="bg-[#552900]">
      <Container>
        <div className="flex flex-col gap-[32px]">
          <div className="pt-[64px] flex flex-wrap justify-between gap-[10px]">
            <div>
              <img src={logo2} alt="" />
            </div>
            <div>
              <YellowBtn>Request a Quote</YellowBtn>
            </div>
          </div>
          <div>
            <img className="hidden sm:block" src={unionFooterImg} alt="" />
          </div>
          <div className="flex justify-between flex-wrap gap-7">
            {
              footerList.map(item=>{
                return <div className="text-white" key={item.name}>
                  <div className="flex flex-col gap-5">
                    {item.name&&<div className="font-medium text-[16px] leading-[22px]">{item.name}</div>}
                    <ul className={`${item.flat?'flex-row f;ex-wrap':'flex-col'} flex gap-2`}>
                      {item.list.map((ListItem, index)=>{
                        return <li className="font-normal text-[16px] leading-[22px] cursor-pointer opacity-[60%] hover:text-[#FFCC00]" key={index}>
                          {item.type === "text" && ListItem}
                          {item.type === "image" && <div className="cursor-pointer hover:text-[#FFCC00]">{<ListItem/>}</div> }
                        </li>
                      })}
                    </ul>
                  </div>
                </div>
              })
            }
          </div>
        </div>
        <div className="flex justify-between flex-wrap items-center mt-5 py-10">
            <div className="font-normal text-white text-[12px] leading-4 opacity-[40%]">© 2024 Weldaid Trading Establishment. All rights reserved.</div>
            <div>
              <img 
              onClick={()=>{window.scrollTo({
                top:0,
                behavior:'smooth'
              })}}
              className="cursor-pointer" src={scrollIcon} alt="" />
            </div>
        </div>
      </Container>
    </footer>
  );
}
