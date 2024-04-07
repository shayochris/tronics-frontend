import React from 'react'

export default function ProductDetailsSkeleton() {
  return (
    <div className='flex lg:flex-row flex-col w-[80%] mx-auto mt-6'>
      <div className="bg-gray-200 rounded-lg h-56 lg:flex-1"></div>
      <div className="p-2 h-56 lg:flex-1 ">
        <p className="bg-gray-200 rounded-lg p-2 rounded-lg w-[60%]"></p>
        <div className="flex my-2">
          {
            [...Array(5)].map((_,id)=>(
              <div className="w-5 h-5 bg-gray-200 rounded-full mr-2"></div>
            ))
          }
        </div>
        <p className="bg-gray-200 rounded-lg p-1 rounded-lg"></p>
        <p className="bg-gray-200 rounded-lg p-1 rounded-lg my-1"></p>
        <p className="bg-gray-200 rounded-lg p-1 rounded-lg my-1"></p>
        <p className="bg-gray-200 rounded-lg p-1 rounded-lg my-1"></p>
        <p className="bg-gray-200 rounded-lg p-1 rounded-lg my-1"></p>
        <p className="bg-gray-200 rounded-lg p-1 rounded-lg w-[60%]"></p>

        <div className="flex my-2">
          {
            [...Array(5)].map((_,id)=>(
              <div className="w-8 h-8 bg-gray-200 rounded-lg mr-2"></div>
            ))
          }
        </div>
        <div className="flex-a w-[80%]">
          <div className="bg-gray-200 p-3 w-[30%]"></div>
          <div className="bg-gray-200 p-3 w-[50%] mx-2"></div>
          <div className="bg-gray-200 p-3 w-[20%]"></div>
        </div>
      </div>
    </div>
  )
}
