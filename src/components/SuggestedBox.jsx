import React from 'react'
import { BiSolidShow } from "react-icons/bi";
import box from '../assets/box.svg'
import gitrepo from '../assets/gitrepo.svg'
import { IoClose } from "react-icons/io5";


const SuggestedBox = () => {
  return (
    <section className='h-full mt-4'>
        <div className='h-full mx-3 mb-2'>
            <h2 className='text-base font-semibold text-[#000000E6]'>Suggested for you</h2>
            <div className='flex items-center gap-1 text-sm text-[#00000099]'>
                <BiSolidShow />
                <p>Private to you</p>
            </div>
        </div>

        <div className='flex gap-4 h-full mx-3'>
            {/* 1 */}
            <div className='border border-[#e8e8e8] rounded-md px-4 py-2'>
                <div className="flex items-start gap-4">
                    <img src={box} alt="Experience" className="w-10 object-cover" />

                    <p className="flex-1 text-base text-[#000000E6] font-semibold leading-snug line-clamp-2">
                        Add past position so others can easily find and connect with you
                    </p>

                    <button className="text-[#666] cursor-pointer p-1 hover:bg-[#f2f2f2] rounded-full hover:text-black">
                        <IoClose size={20} />
                    </button>
                </div>

                <p className='text-sm text-[000000E6] mt-2'>Help hiring managers and coworkers find you.</p>

                <button className="shadow-[0_0_0_1.3px_#404040] text-[#404040] text-base rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] hover:shadow-[0_0_0_2px_#171717] mt-6 ">Add past position</button>
            </div>
            {/* 2 */}
            <div className='border border-[#e8e8e8] rounded-md px-4 py-2'>
                <div className="flex items-start gap-4">
                    <img src={gitrepo} alt="Github Repo" className="w-10 object-cover" />

                    <p className="flex-1 text-base text-[#000000E6] font-semibold leading-snug line-clamp-2">
                        Add Github projects that showcase your skills
                    </p>

                    <button className="text-[#666] cursor-pointer p-1 hover:bg-[#f2f2f2] rounded-full hover:text-black">
                        <IoClose size={20} />
                    </button>
                </div>

                <p className='text-sm text-[000000E6] mt-2'>Show recruiters how you put your skills to use by adding projects to your profile.</p>

                <button className="shadow-[0_0_0_1.3px_#404040] text-[#404040] text-base rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] hover:shadow-[0_0_0_2px_#171717] mt-3 ">Add Projects</button>
            </div>
        </div>
    </section>
  )
}

export default SuggestedBox
