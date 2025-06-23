import React from 'react'

const Skill = ({name, folderImage, project}) => {
  return (
    <div className='w-full h-full my-4'>
      <div className='w-full'>
        <h4 className='text-sm font-semibold text-[#1a1a1a] dark:text-white'>{name}</h4>
      </div>   
      {
        project && (
          <div className='flex justify-start items-start gap-2'>
            <div>{folderImage}</div>
            <span className='text-sm text-[#333333] dark:text-gray-300'>{project}</span>
          </div>
        )
      }
    </div>
  )
}

export default Skill
