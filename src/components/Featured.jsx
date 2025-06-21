import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from 'react-icons/md';
import myImageOriginal from '../assets/myImageOriginal.jpg'


const Featured = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between items-center py-2 px-4'>
        <div><h1 className='font-semibold text-lg text-[#191919]'>Featured</h1></div>
        <div className='flex justify-center items-center gap-2 '>
            <div className='text-[#404040] p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                {/* add button  */}
                <IoIosAdd size={33} />
            </div>

            <div className='text-[#404040] p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            {/* Edit button  */}
            <MdOutlineModeEdit size={28} />
            </div>
        </div>
      </div>

      <div className='border border-[#e8e8e8] mx-4 rounded-xl'>
        <div>
            <span className='text-xs text-[#828282] px-2'>Link</span>
        </div>
        <Link className='grid grid-cols-2 justify-center items-start gap-3 bg-[#f8fafd]' to="https://joydeepmyportfoliosite.netlify.app/" target='_blank'>
            <div className='h-44 overflow-hidden'>
                <img className='h-full w-full object-cover' src={myImageOriginal} alt="" />
            </div>
            <div className='flex flex-col gap-1' >
                <h2 className='text-base font-semibold text-[#000000E6]'>My Portfolio</h2>
                <span className='text-sm text-[#828282]'>joydeepmyportfoliosite.netlify.app</span>
                <span className='text-sm overflow-hidden text-ellipsis line-clamp-5'>Explore my personal portfolio showcasing web development projects, including responsive websites, frontend designs, and full stack applications built using modern technologies like React, Node.js, and more.</span>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Featured
