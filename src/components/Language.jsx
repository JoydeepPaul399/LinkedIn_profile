import React from 'react'

const Language = ({name, proficiency}) => {
  return (
    <div>
      <h3 className='text-[#1a1a1a] dark:text-[#ddd] text-base font-semibold'>{name}</h3>
      <span className='text-[#6b6b6b] dark:text-[#aaa] text-sm'>{proficiency}</span>
    </div>
  )
}

export default Language
