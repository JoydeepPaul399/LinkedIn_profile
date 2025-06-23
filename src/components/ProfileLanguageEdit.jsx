import React from 'react'
import { MdOutlineModeEdit } from "react-icons/md";

const ProfileLanguageEdit = () => {
  return (
    <div className='w-full px-4 py-2 dark:bg-[#222] dark:text-white'>
      <div className='w-full flex justify-between items-center'>
            <h2 className='text-base font-semibold text-[#000000E6] dark:text-white'>Profile language</h2>
            <div className='text-[#000000BF] dark:text-white'>
                <MdOutlineModeEdit size={28} />   
            </div>
        </div>
        <p className='text-[#828282] text-sm dark:text-gray-300'>English</p>
        
        {/* divider */}
        <div className='w-full h-[0.5px] my-4 bg-[#e8e8e8] dark:bg-[#444]' />

        <div className='w-full flex justify-between items-center'>
            <h2 className='text-base font-semibold text-[#000000E6] dark:text-white'>Public profile & URL</h2>
            <div className='text-[#000000BF] dark:text-white'>
                <MdOutlineModeEdit size={28} />   
            </div>
        </div>
        <div className='mr-14'>
            <p className='text-[#828282] text-sm dark:text-gray-300'>
                www.linkedin.com/in/joydeep-paul-172619331
            </p>
        </div>
    </div>
  )
}

export default ProfileLanguageEdit
