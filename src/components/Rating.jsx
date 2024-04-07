import React from 'react'

//icons
import { BsStarFill } from 'react-icons/bs'

export default function Rating() {
  return (
    <div className='flex-a py-1'>
      {
        [...Array(5)].map(()=>(
          <BsStarFill className="w-4 h-4 text-primary pr-1"/>
        ))
      }
    </div>
  )
}
