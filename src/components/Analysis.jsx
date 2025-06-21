import React from 'react'
import Line from './Line'
import { CgArrowRight } from "react-icons/cg";


const Analysis = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full px-4 mt-4 mb-4'>
        <div class="h-full w-full mx-3 mb-2">
          <h2 class="text-base font-semibold text-[#000000E6]">Analytics</h2>
          <div class="flex items-center gap-1 text-sm text-[#00000099]">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path><path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z"></path>
            </svg>
            <p>Private to you</p>
          </div>
        </div>
        <div className='flex justify-center items-start gap-2 w-full h-full px-2'>
          {/* 1 */}
          <div className='w-full h-full'>
            <div>
              <div className='flex items-center justify-start gap-1 font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false"><path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <span>38 profile views</span>
              </div>
            </div>
            <div>
              <span>Discover who's viewed your profile.</span>
            </div>
          </div>

          {/* 2 */}
          <div className='w-full h-full'>
            <div>
              <div className='flex items-center justify-start gap-1 font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                  <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                </svg>
                <span>226 post impressions</span>
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <span>Check out who's engaging with your posts.</span>
              <span>Past 7 days</span>
            </div>
          </div>
            {/* 3 */}
          <div className='w-full h-full'>
            <div>
              <div className='flex items-center justify-start gap-1 font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                  <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                </svg>
                <span>17 search appearances</span>
              </div>
            </div>
            <div>
              <span>See how often you appear in search results.</span>
            </div>
          </div>


        </div>

      </div>
      <Line />

      {/* Show analytics btn  */}
      <div className='flex justify-center items-center w-full h-full py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in'>
        <div className='flex justify-center items-center'>
          <span>Show all analytics</span>
          <div>
            <CgArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analysis
