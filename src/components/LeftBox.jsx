import React from 'react'
import MainProfile from './MainProfile';
import SuggestedBox from './SuggestedBox';

const LeftBox = () => {
  return (
    <div>
      <div className='rounded-2xl h-full bg-white overflow-x-hidden pb-8 shadow-md'>
        <div className=" h-full">
          {/* Profile box */}
          <MainProfile />
        </div>
      </div>

      <div className='rounded-2xl h-full bg-white overflow-x-hidden pb-3 mt-4 shadow-md'>
        <div className=" h-full p-2">
          {/* Suggested for you box */}
          <SuggestedBox />
        </div>
      </div>

    </div>
  )
}

export default LeftBox
