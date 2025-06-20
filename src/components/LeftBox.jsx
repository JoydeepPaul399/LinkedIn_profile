import React from 'react'
import coverImage from '../assets/coverPhoto.jpg'
import myImage from '../assets/myImage.jpg'
import { MdOutlineModeEdit } from "react-icons/md";
import clgImage from '../assets/clg.jpg'

const LeftBox = () => {
  return (
    <div className='rounded-2xl h-full bg-white overflow-x-hidden'>
      {/* Profile box */}
      <div className='shadow-md h-full'>
        <div className='relative'>
            <img src={coverImage} className='h-48 w-full' alt="Cover Image" />
            <div className='absolute -bottom-15 left-8 border-4 border-white rounded-full'>
                <img className='rounded-full w-40'  src={myImage} alt="Profile Picture" />
            </div>
            <div className='absolute right-10 top-54 p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                <MdOutlineModeEdit size={28} />
            </div>
        </div>

        <div className='mt-18 flex mx-8 max-w-full justify-between items-center'>
            <div>
               <div className='flex gap-2'>
                <h1 className='font-bold text-3xl text-[#1d1d1d]'>Joydeep Paul</h1>
                <div>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    >
                    <path
                        d="M11.5283 1.5999C11.7686 1.2944 12.2314 1.2944 12.4717 1.5999L14.2805 3.9005C14.4309 4.0917 14.6818 4.1733 14.9158 4.1069L17.7314 3.3089C18.1054 3.2029 18.4799 3.475 18.4946 3.8634L18.6057 6.7878C18.615 7.0309 18.770 7.2443 18.9984 7.3282L21.7453 8.3376C22.1101 8.4717 22.2532 8.9119 22.0368 9.2348L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.770 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.7195 20.0995C9.5691 19.9083 9.3182 19.8267 9.0842 19.8931L6.2686 20.6911C5.8946 20.7971 5.5201 20.525 5.5054 20.1366L5.3943 17.2122C5.385 16.9691 5.230 16.7557 5.0016 16.6718L2.2547 15.6624C1.8899 15.5283 1.7468 15.0881 1.9632 14.7652L3.5922 12.334C3.7276 12.1319 3.7276 11.8681 3.5922 11.666L1.9632 9.2348C1.7468 8.9119 1.8899 8.4717 2.2547 8.3376L5.0017 7.3282C5.230 7.2443 5.385 7.0309 5.3943 6.7878L5.5054 3.8634C5.5201 3.475 5.8946 3.2029 6.2686 3.3089L9.0842 4.1069C9.3182 4.1733 9.5691 4.0917 9.7195 3.9005L11.5283 1.5999Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                    />
                    <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </svg>

                </div>

               </div>
               <p className='mr-6'>Full Stack Developer | Frontend Developer (React.js, MERN Stack) | DevOps Enthusiast | Data Analytics Learner | Open to Work</p>
            </div>
            <div className='flex justify-center items-center gap-2 w-full '>
                <img className='w-8' src={clgImage} alt="College Logo" />
                <h6>Amity University Online</h6>
            </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default LeftBox
