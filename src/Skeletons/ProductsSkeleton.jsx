import React from 'react'

export default function ProdcuctSkeleton() {
  return (
    <div>
      <div className='grid grid-cols-2 lg:grid-cols-4  gap-2'>
        {[...Array(4)].map((_,idx)=>(
          <div key={idx} className="">
            <div className="w-full h-56 bg-gray-200"></div>
            <div className='py-2'>
              <div className="bg-gray-200 p-2 rounded-lg"></div>
              <div className="bg-gray-200 p-2 rounded-lg w-[50%] my-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
