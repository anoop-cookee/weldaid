{/* <div className='w-[24px] h-[8px] rounded-[8px] text-[#E7E7E7]'></div> */}
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Container from "./Container";
import StarTex from "./StarText";
import unionLg from "../assets/union/union-lg.svg";
import helmetImg from "../assets/helmet.png";
import YellowBtn from "./YellowBtn.jsx";
import RequestBtn from "./RequestBtn";
import reviewList from "../utilities/reviewList.js";
import ReviewerCard from "./ReviewerCard.jsx";
import chatImg from "../assets/chat-icon.svg";
import drillerImg from "../assets/driller.svg";
import { Autoplay } from 'swiper/modules';

export default function AboutHead() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + ' w-[24px] h-[8px] rounded-[8px] text-[#E7E7E7]"></div>';
    },
  };
    

  return (
    <div>
      <div className="mb-[64px] relative">
        <Container>
          <div className="flex flex-col justify-between gap-[63px]">
            <div>
              <StarTex>About Weldaid Trading Establishment</StarTex>
            </div>
            <div className="text-[#141414] font-semibold lg:text-[48px] sm:text-[38px] text-[28px] leading-[37.12px] lg:leading-[57.12px] sm:leading-[47.12px] max-w-[1216]">
              Founded in 2004, Weldaid Trading Establishment is an ISO 9001:2008
              certified company, dedicated to providing top-quality industrial
              products and services.
            </div>
            <div>
              <img src={unionLg} alt="" />
            </div>
          </div>
        </Container>
        <img
          className="absolute lg:-top-1/2 right-0 top-1 -z-1"
          src={helmetImg}
          alt=""
        />
      </div>
      {/* About more */}
      <div>
        {/* <Container> */}
        <div className="relative">
          <div>
            <div className="max-w-[800px] mb-[-70px] absolute -top-20 sm:top-0 pl-[1vw] lg:pl-[1.5vw]">
              <Container>
                <div className="font-normal text-[15px] sm:text-[22px] lg:text-[32px] lg:leading-[38px] leading-[18px] sm:leading-[28px] text-[#4F4F4F]">
                  With a focus on reliability, quality, and customer
                  satisfaction, we have grown to become a trusted partner in the
                  industry.
                </div>
                <div className="mt-[30px] lg:mt-[40px] z-1">
                  <YellowBtn>Learn More About Us</YellowBtn>
                </div>
              </Container>
            </div>
          </div>
          <img
            className="-z-1"
            src="http://beta.staging-servers.com/weldaid/public/assets/web/img/h-s6-bg.webp"
            alt=""
          />
        </div>
        {/* </Container> */}
      </div>
      {/* Client Feed Back */}
      <Container>
      {/* flex flex-wrap lg:flex-row flex-col */}
        <div className="bg-[#FFCC00] rounded-[40px] p-[16px] 
         grid grid-cols-1 lg:grid-cols-2
        justify-between mb-[72px] relative lg:-mt-[150px] -mt-[70px]">
          <div className="flex flex-col justify-between lg:mx-[38px] my-[38px]">
            <div className="text-black font-bold lg:text-[64px] lg:leading-[72px] sm:text-[54px] sm:leading-[62px] text-[44px] leading-[52px] max-w-[361px]">
              What Our Clients Say
            </div>
            <div>
              <div className="my-[32px] max-w-[324px] font-normal lg:text-[24px] lg:leading-[28px] text-[18px] leading-[22px]">
                Our clients consistently rate us highly for our reliability,
                quality, and service
              </div>
              <div>
                <RequestBtn>See More Testimonials</RequestBtn>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[36px] z-1 max-w-[100%] lg:max-w-[699px]">
            <Swiper
            pagination={pagination}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            >
            {reviewList.map((review) => {
              return (
                  <SwiperSlide key={review.id}>
                  <ReviewerCard review={review} />
                  </SwiperSlide>
              );
            })}
            </Swiper>
          </div>
          <img
            className="absolute top-1/2 left-1/2 transform translate-x-[-30%] translate-y-[-25%] invisible sm:visible z-0"
            src={chatImg}
            alt=""
          />
          <img
            className="absolute w-[20vw] max-w-[241px] top-0 right-0 z-2 translate-y-[-25%]"
            src={drillerImg}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}
