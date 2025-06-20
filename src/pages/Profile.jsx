import React from 'react'
import LeftBox from '../components/LeftBox'

const Profile = () => {
  return (
    <div className='bg-[#f4f2ee] my-2 min-h-screen pt-14 grid grid-cols-[60%_auto] justify-around gap-4'>
      <div className='mt-6 h-full'>
      {/* Left component */}
      <LeftBox />

      </div>
    </div>
  )
}

export default Profile
