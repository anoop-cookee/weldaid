import React from 'react'
import starShape from '../assets/Star.png'

export default function StarText({children}) {
  return (
    <div className='font-medium text-[24px] leading-7 px-6 relative'>
      {children}
      <img src={starShape} alt="" className='absolute top-0 left-0 -z-1 transform -translate-y-2' />
    </div>
  )
}
