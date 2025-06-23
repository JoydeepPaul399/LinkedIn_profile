import React from 'react'
import connectionSuggestionList from '../assets/peopleSuggestionList'
import ConnectPeople from './ConnectPeople'
import Line from './Line'

const SuggestedPeople = () => {
  const suggestionListLen = connectionSuggestionList.length - 1
  return (
    <div className='w-full'>
        <div className='px-4 pt-4'>
            <h3 className='text-[#272727] dark:text-white font-semibold'>People you may know</h3>
            <p className='text-sm text-[#00000099] dark:text-gray-400'>From your industryFrom</p>
        </div>
        <div className='w-[95%] mx-auto'>
        {
          connectionSuggestionList.map((item, index) => (
              <div key={index} className='w-full flex flex-col justify-center items-start'>
                <ConnectPeople name={item.name} image={item.image} desc={item.desc} />
                {suggestionListLen !== index && <Line />}
              </div>
            ))
        }
        </div>

        <Line pb1={undefined} />
        <div className='w-full mx-auto flex justify-center items-center py-2 cursor-pointer group hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-500 ease-linear'>
          <button className='text-[#404040] dark:text-gray-300 group-hover:cursor-pointer text-base font-semibold'>
            Show All
          </button>
        </div>
    </div>
  )
}

export default SuggestedPeople
