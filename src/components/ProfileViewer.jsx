import React from 'react'
import { BiSolidShow } from 'react-icons/bi'
import ViewerComponent from './ViewerComponent'
import viewerList from '../assets/viewerList'
import Line from './Line'

const ProfileViewer = () => {
  const lastIndex = viewerList.length - 1;
  return (
    <div className='py-4 px-4 flex flex-col gap-4 dark:bg-[#222] dark:text-white'>
      <div>
        <div className='text-[#272727] font-semibold dark:text-white'>
          Who your viewers also viewed
        </div>

        <div className='flex items-center gap-1 text-sm text-[#00000099] dark:text-gray-300'>
          <BiSolidShow />
          <p>Private to you</p>
        </div>
      </div>

      {viewerList.map((item, index) => {
        return (
          <div key={index}>
            <ViewerComponent image={item.image} name={item.name} />
            {index !== lastIndex && <Line />}
          </div>
        );
      })}
    </div>
  )
}

export default ProfileViewer
