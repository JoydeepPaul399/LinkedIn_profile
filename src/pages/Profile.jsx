import React from 'react'
import LeftBox from '../components/LeftBox'
import RigthBox from '../components/RigthBox'

const Profile = () => {
  return (
    <div className='bg-[#f4f2ee] my-2 min-h-screen pt-14 w-full'>
      <div className='max-w-7xl ml-20 grid grid-cols-[63%_30%] justify-start gap-8 px-6 box-border'>
        <div className='mt-6 h-full'>
          <LeftBox />
        </div>

        <div className='mt-6 h-full'>
          <RigthBox />
        </div>
      </div>
    </div>
  )
}

export default Profile
