import React from 'react'
import LeftBox from '../components/LeftBox'
import RigthBox from '../components/RigthBox'

const Profile = () => {
  return (
    <div className='bg-[#f4f2ee] mt-2 min-h-screen pt-14 w-full flex justify-center items-center'>
      <div className='w-[90%] md:ml-10 lg:mx-auto grid lg:grid-cols-[74%_26%] md:grid-cols-[65%_28%] grid-cols-1  justify-start gap-8 lg:gap-14 px-6 box-border'>
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
