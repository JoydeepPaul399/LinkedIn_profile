import React from 'react'
import viewerImg from '../assets/viewer.png'
const ViewerComponent = ({image, name}) => {
    return (
        <div className='flex flex-col w-[80%] justify-start gap-4'>
            <div className='flex gap-1.5 justify-start items-start w-full'>
                <img className='h-12 rounded-full' src={image} alt="Viewer Image" />
                <h3 className='text-[#272727] font-semibold'>{name}</h3>
            </div>
            <div className='flex justify-start ml-14'>
                <button className="shadow-[0_0_0_1.3px_#404040] text-[#404040] rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] hover:shadow-[0_0_0_2px_#171717] w-fit  ">View</button>
            </div>
        </div>
    )
}

export default ViewerComponent
