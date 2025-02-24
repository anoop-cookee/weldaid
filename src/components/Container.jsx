import React from 'react'

export default function Container({children}) {
  return (
    <div className='container mx-auto px-5 sm:px-10 lg:px-20'>
      {children}
    </div>
  )
}
