import React from 'react'

const Line = ({ pb1 }) => {
  return (
    <div
      className={`w-full h-[0.5px] mt-1 ${pb1 ? "mb-1" : ""} bg-[#e8e8e8] dark:bg-[#3a3a3a]`}
    ></div>
  )
}

export default Line
