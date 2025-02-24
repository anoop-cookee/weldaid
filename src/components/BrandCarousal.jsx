import brandList from '../utilities/BrandList'
import CarousalContainer from './CarousalContainer'
import Container from './Container'
import { SwiperSlide } from 'swiper/react'

export default function BrandCarousal() {

  const breakPoints = {
    20: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2, // For small screens (320px and above), show 2 slides
    },
    480: {
      slidesPerView: 3, // For medium screens (480px and above), show 3 slides
    },
    768: {
      slidesPerView: 4, // For larger screens (768px and above), show 4 slides
    },
    1024: {
      slidesPerView: 6, // For even larger screens (1024px and above), show 6 slides
    },
  }
  
  return (
    <Container>
      <div className='my-[56px]'>
        <CarousalContainer breakPoints={breakPoints} autoPlay={true} 

        // slidesPerView={previewCountBrand} 
        slidesPerView={4.1} 
        
        spaceBetween={8}>
          {brandList.map(brand => (
            <div className='min-w-[196px] min-h-[100px]' key={brand.id}>
              <SwiperSlide>
                <img className='w-[196px] h-[100px]' src={brand.logo} alt="" />
              </SwiperSlide>
            </div>
          ))}
        </CarousalContainer>
      </div>
    </Container>
  )
}
