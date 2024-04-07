import React from 'react'

//components
import Button from '../components/Button'

export default function Banner() {
  return (
    <div className="my-2 grid lg:grid-cols-6 gap-3">
      <div className="col-span-6 bg-gray-200 h-56 sm:h-96 rounded-lg">
        <div className="w-full h-full flex">
          <div className="flex-1 flex items-center">
            <div className="p-3 lg:p-6">
              <p>Lorem ipsum dolor sit amet</p>
              <p className='lg:text-2xl font-semibold mb-3'>Lorem ipsum dolor sit.</p>
              <p className='mb-4 hidden lg:block'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Non quas explicabo officia impedit illo esse corporis consequuntur sequi. 
                Nobis minima quod nulla qui iusto culpa vero numquam similique, quidem assumenda.
              </p>
              <Button
                text = {'Shop Now'}
                textColor ={'text-white'}
                background ={'bg-black'}
              />
            </div>
          </div>
          <div className="flex-1 p-2">
            <img src="/headphones.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
  </div>
  )
}
