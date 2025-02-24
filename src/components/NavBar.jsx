// import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import RequestBtn from "./RequestBtn";
import NavList from "./NavList";
import closeIcon from "../assets/close-icon.png";
import { useEffect, useState } from "react";



export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [scrolled, setScrolled] = useState(false)

 useEffect(()=>{
  const handleScroll = ()=>{
    if(window.scrollY > 1){
      setScrolled(true)
    }
    else{
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  return ()=>{
    window.removeEventListener('scroll', handleScroll)
  }
 })

  return (
    <header className={`${scrolled&&'shadow-2xl'} fixed w-full top-0 py-[22px] items-center bg-[#FFFFE6] z-50 transition-shadow duration-500`}>
      <Container>
        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          <h1>
            <a href="/"><img width="147px" height="48.17px" src={logo} alt="" /></a>
          </h1>
          <nav className="hidden lg:block">
            <NavList size="lg" />
          </nav>
          <div className="hidden lg:block">
            <RequestBtn> Request a Quote </RequestBtn>
          </div>
          <div className="lg:hidden" onClick={() => setShowSideBar(true)}>
            <img
              className="w-[42px]"
              src="http://beta.staging-servers.com/weldaid/public/assets/web/img/hamburger.svg"
              alt=""
            />
          </div>
        </div>
      </Container>

      {/* Side Bar */}
      {showSideBar&&
        <div className="bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 w-screen h-screen">

        </div>
      }
      <div
        className={`${
          showSideBar ? "transform translate-x-0" : "transform translate-x-full"
        }  h-screen w-screen flex justify-end  fixed top-0 right-0 z-50 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full px-3 pt-3 bg-[#FFFFE6] w-screen max-w-md">
        <div className="flex justify-between px-3">
          <div className="font-bold text-[#55291E]">Menu</div>
          <div>
            <button onClick={() => setShowSideBar(false)}>
              <img className="w-8" src={closeIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="text-center">
          <NavList />
        </div>
        <div className="flex justify-center mt-8">
          <RequestBtn> Request a Quote </RequestBtn>
        </div>
        </div>
      </div>
    </header>
  );
}
