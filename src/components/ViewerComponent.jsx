import React from 'react'

const ViewerComponent = ({ image, name }) => {
  return (
    <div className='flex flex-col lg:w-[80%] md:w-full justify-start gap-4'>
      <div className='flex gap-1.5 justify-start items-start w-full'>
        <img className='h-12 rounded-full' src={image} alt="Viewer Image" />
        <h3 className='text-[#272727] dark:text-white font-semibold'>{name}</h3>
      </div>
      <div className='flex justify-start ml-14'>
        <button className="shadow-[0_0_0_1.3px_#404040] dark:shadow-[0_0_0_1.3px_#ccc] 
          text-[#404040] dark:text-gray-300 rounded-2xl px-4 py-1 font-semibold cursor-pointer 
          hover:bg-[#f2f2f2] dark:hover:bg-[#444] hover:shadow-[0_0_0_2px_#171717] dark:hover:shadow-[0_0_0_2px_#bbb] w-fit">
          View
        </button>
      </div>
    </div>
  )
}

export default ViewerComponent
