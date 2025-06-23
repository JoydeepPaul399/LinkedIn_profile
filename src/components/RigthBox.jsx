import React from 'react'
import ProfileLanguageEdit from './ProfileLanguageEdit';
import ProfileViewer from './ProfileViewer';
import SuggestedPeople from './SuggestedPeople';

const RigthBox = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3'>
      <div className='rounded-xl bg-white dark:bg-[#222] overflow-x-hidden shadow-md w-full dark:text-white'>
        <div className="w-full">
          {/* Profile language and Public profile & URL edit */}
          <ProfileLanguageEdit />
        </div>
      </div>

      <div className='rounded-xl bg-white dark:bg-[#222] overflow-x-hidden shadow-md w-full dark:text-white'>
        <div className=" w-full">
          {/* Profile language and Public profile & URL edit */}
          <ProfileViewer />
        </div>
      </div>

      <div className='rounded-xl bg-white dark:bg-[#222] overflow-x-hidden shadow-md w-full dark:text-white'>
        <div className=" w-full">
          {/* People you may know */}
          <SuggestedPeople />
        </div>
      </div>
    </div>
  )
}

export default RigthBox
