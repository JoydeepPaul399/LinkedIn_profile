import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import { MdOutlineModeEdit } from 'react-icons/md'
import Line from './Line'
import company1 from '../assets/company1.jpg'
import company2 from '../assets/company2.jpg'
import rightSvg from '../assets/rightSvg.svg'
import { CgArrowRight } from 'react-icons/cg'

const InterestSection = () => {
    return (
        <section className='w-full h-full'>
            <div className="flex justify-between items-center py-2 px-4">
                <div>
                    <h1 className="font-semibold text-lg text-[#191919] dark:text-[#ddd]">Interests</h1>
                </div>
            </div>
            <div className='flex gap-6 pb-2 px-4'>
                <button className='font-semibold text-[#191919] dark:text-[#ddd]'>Companies</button>
                <button className='font-semibold text-[#191919] dark:text-[#ddd]'>Schools</button>
            </div>
            <Line />

            <div className='px-8 flex w-full'>

                <div className='flex items-start gap-3 w-1/2'>
                    <img className='w-14' src={company1} alt="Company" />
                    <div className='flex flex-col gap-0.5'>
                        <h4 className="text-[#191919] dark:text-[#ddd]">Nielson</h4>
                        <p className="text-[#191919] dark:text-[#aaa]">1,322,269 followers</p>
                        <button className="shadow-[0_0_0_1.3px_#404040] dark:shadow-[0_0_0_1.3px_#aaa] text-[#404040] dark:text-[#aaa] rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] dark:hover:bg-[#333] hover:shadow-[0_0_0_2px_#171717] dark:hover:shadow-[0_0_0_2px_#eee] w-fit mt-2 flex justify-start items-center gap-1 ">
                            <img src={rightSvg} alt="" />
                            Following
                        </button>
                    </div>
                </div>

                <div className='flex items-start gap-3 w-1/2'>
                    <img className='w-14' src={company2} alt="Company" />
                    <div className='flex flex-col gap-0.5'>
                        <h4 className="text-[#191919] dark:text-[#ddd]">Red Oak Technologies</h4>
                        <p className="text-[#191919] dark:text-[#aaa]">128,937 followerss</p>
                        <button className="shadow-[0_0_0_1.3px_#404040] dark:shadow-[0_0_0_1.3px_#aaa] text-[#404040] dark:text-[#aaa] rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] dark:hover:bg-[#333] hover:shadow-[0_0_0_2px_#171717] dark:hover:shadow-[0_0_0_2px_#eee] w-fit mt-2 flex justify-start items-center gap-1 ">
                            <img src={rightSvg} alt="" />
                            Following
                        </button>
                    </div>
                </div>
            </div>

            <Line />
            <div className='flex justify-center items-center w-full h-full py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-300 ease-in'>
                <div className='flex justify-center items-center text-[#404040] dark:text-[#aaa] font-semibold'>
                    <span>Show all companies</span>
                    <div>
                        <CgArrowRight size={22} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InterestSection
