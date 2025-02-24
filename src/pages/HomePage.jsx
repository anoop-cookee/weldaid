// import React from 'react'

import AboutHead from "../components/AboutHead";
import BrandCarousal from "../components/BrandCarousal";
import Carousal from "../components/CarousalContainer";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Products from "../components/ProductCategories";
import ProductsCarousal from "../components/ProductsCarousal";
import StarText from "../components/StarText";
import YellowBtn from "../components/YellowBtn";

export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <BrandCarousal/>
      <Products/>
      <Container>
        <div className="mt-[72px] mb-[57px] flex justify-between flex-wrap gap-5 items-center">
            <StarText>
            Explore Our Latest Products
            </StarText>
            <div>
              <YellowBtn>
                Browse All New Arrivals
              </YellowBtn>
            </div>
        </div>
      </Container>
      <ProductsCarousal/>
      <AboutHead/>
      <Footer/>
    </div>
  )
}
