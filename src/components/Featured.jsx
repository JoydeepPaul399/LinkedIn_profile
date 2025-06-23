import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from 'react-icons/md';
import myImageOriginal from '../assets/myImageOriginal.jpg';

const Featured = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between items-center py-2 px-4'>
        <div>
          <h1 className='font-semibold text-lg text-[#191919] dark:text-gray-100'>Featured</h1>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <button 
            aria-label="Add featured item"
            className='text-[#404040] dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors'
          >
            <IoIosAdd size={33} />
          </button>

          <button
            aria-label="Edit featured items"
            className='text-[#404040] dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors'
          >
            <MdOutlineModeEdit size={28} />
          </button>
        </div>
      </div>

      <div className='border border-[#e8e8e8] dark:border-gray-700 mx-4 rounded-xl'>
        <div>
          <span className='text-xs text-[#828282] dark:text-gray-400 px-2'>Link</span>
        </div>
        <Link 
          className='grid grid-cols-2 justify-center items-start gap-3 bg-[#f8fafd] dark:bg-gray-800 rounded-b-xl'
          to="https://joydeepmyportfoliosite.netlify.app/"
          target='_blank'
          rel="noopener noreferrer"
        >
          <div className='h-44 overflow-hidden rounded-l-xl'>
            <img 
              className='h-full w-full object-cover' 
              src={myImageOriginal} 
              alt="Screenshot of portfolio website" 
            />
          </div>
          <div className='flex flex-col gap-1 px-2 py-3'>
            <h2 className='text-base font-semibold text-[#000000E6] dark:text-gray-100'>My Portfolio</h2>
            <span className='text-sm text-[#828282] dark:text-gray-400 break-all'>joydeepmyportfoliosite.netlify.app</span>
            <span className='text-sm overflow-hidden text-ellipsis line-clamp-5 text-[#00000099] dark:text-gray-300'>
              Explore my personal portfolio showcasing web development projects, including responsive websites, frontend designs, and full stack applications built using modern technologies like React, Node.js, and more.
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
