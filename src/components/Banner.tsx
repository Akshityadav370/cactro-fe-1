import React, { ReactNode } from 'react'

const Banner = ({children}:{children?: ReactNode}) => {
  return (
    <div className='h-15 rounded-full bg-primary-blue mx-60 w-auto flex items-center px-7'>{children}</div>
  )
}

export default Banner