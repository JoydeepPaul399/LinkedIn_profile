import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import { MdOutlineModeEdit } from 'react-icons/md'
import Line from './Line'
import company1 from '../assets/company1.jpg'
import company2 from '../assets/company2.jpg'
import rightSvg from '../assets/rightSvg.svg'

const InterestSection = () => {
    return (
        <section className='w-full h-full pb-4 '>
            <div className="flex justify-between items-center py-2 px-4">
                <div>
                    <h1 className="font-semibold text-lg text-[#191919]">Interests</h1>
                </div>
            </div>
            <div className='flex gap-6 pb-2 px-4'>
                <button className='font-semibold'>Companies</button>
                <button className='font-semibold'>Schools</button>
            </div>
            <Line />

            <div className='px-8 flex w-full'>

                <div className='flex items-start gap-3 w-1/2'>
                    <img className='w-14' src={company1} alt="Comapny" />
                    <div className='flex flex-col gap-0.5'>
                        <h4>Nielson</h4>
                        <p>1,322,269 followers</p>
                        <button className="shadow-[0_0_0_1.3px_#404040] text-[#404040] rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] hover:shadow-[0_0_0_2px_#171717] w-fit mt-2 flex justify-start items-center gap-1 ">
                            <img src={rightSvg} alt="" />
                            Following</button>
                    </div>
                </div>

                <div className='flex items-start gap-3 w-1/2'>
                    <img className='w-14' src={company2} alt="Comapny" />
                    <div className='flex flex-col gap-0.5'>
                        <h4>Red Oak Technologies</h4>
                        <p>128,937 followerss</p>
                        <button className="shadow-[0_0_0_1.3px_#404040] text-[#404040] rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] hover:shadow-[0_0_0_2px_#171717] w-fit mt-2 flex justify-start items-center gap-1 ">
                            <img src={rightSvg} alt="" />
                            Following</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InterestSection
