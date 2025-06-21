import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import { MdOutlineModeEdit } from 'react-icons/md'
import amityImage from '../assets/amity.jpeg'

const Education = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between items-center py-2 px-4'>
        <div><h1 className='font-semibold text-lg text-[#191919]'>Education</h1></div>
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

      <div className='w-full h-full px-4 flex  gap-2 justify-start items-start'>
        <img className='h-12' src={amityImage} alt="Amity University" />
        <div>
          <h5 className='text-base font-semibold text-[#000000E6]'>Amity University Online</h5>
          <p className='text-sm text-[#000000E6]'>Bachelor of Computer Application, Information Technology</p>
          <div className='flex flex-col'>
            <span className='text-sm text-[#00000099]'>Jan 2022 - Mar 2025</span>
            <span className='text-sm text-[#000000E6]'>Grade: A</span>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Education
