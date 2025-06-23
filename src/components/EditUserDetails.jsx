import React from 'react';
import { IoClose } from 'react-icons/io5';
import Line from './Line';

const EditUserDetails = ({ close }) => {
  return (
    <div className="fixed inset-0 z-20 bg-black/50 flex justify-center items-start overflow-y-auto">
      <div className="bg-white w-full max-w-2xl mt-8 rounded flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="px-4 py-2 shrink-0">
          <div className="flex justify-between items-center">
            <h1 className="text-[#000000E6] font-semibold text-xl">Edit intro</h1>
            <button onClick={close} className="cursor-pointer">
              <IoClose size={28} />
            </button>
          </div>
        </div>

        <Line />

        {/* Scrollable Form Content */}
        <div className="px-4 py-4 w-full flex-1 overflow-y-auto flex flex-col gap-6">
          <div className="text-[#000000BF] text-xs">* Indicates required</div>
          <form className="flex flex-col gap-4 text-[#000000BF]">
            {/* First name */}
            <div className="flex flex-col gap-1.5 w-[90%]">
              <label htmlFor="fName" className="text-sm">First name*</label>
              <input type="text" id="fName" className="border border-gray-300 h-8 rounded px-2 py-1 text-sm transition-all duration-100 hover:border-2" />
            </div>

            {/* Last name */}
            <div className="flex flex-col gap-1.5 w-[90%]">
              <label htmlFor="lName" className="text-sm">Last name*</label>
              <input type="text" id="lName" className="border border-gray-300 h-8 rounded px-2 py-1 text-sm transition-all duration-100 hover:border-2" />
            </div>

            {/* Pronouns */}
            <div className="flex flex-col gap-1.5 w-[90%]">
              <label htmlFor="pronouns" className="text-sm">Pronouns*</label>
              <select id="pronouns" className="border border-gray-300 h-8 rounded px-2 py-1 text-sm transition-all duration-100 hover:border-2">
                <option value="Nil">Please Select</option>
                <option value="she/her">She/Her</option>
                <option value="he/him">He/Him</option>
                <option value="they/them">They/Them</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-1.5 w-[90%]">
              <label htmlFor="headline" className="text-sm">Headline*</label>
              <textarea id="headline" className="border border-gray-300 h-20 rounded px-2 py-2 text-sm resize-none transition-all duration-100 hover:border-2" />
            </div>

            {/* Current Position */}
            <div className="mt-4">
              <h2 className="font-bold text-[#000000E6] text-xl mb-2">Current position</h2>
              <div className="flex flex-col gap-1.5 w-[90%]">
                <label htmlFor="industry" className="text-sm">Industry*</label>
                <input type="text" id="industry" className="border border-gray-300 h-8 rounded px-2 py-1 text-sm transition-all duration-100 hover:border-2" />
              </div>
            </div>

            {/* Education */}
            <div className="mt-4">
              <h2 className="font-bold text-[#000000E6] text-xl mb-2">Education</h2>
              <div className="flex flex-col gap-1.5 w-[90%]">
                <label htmlFor="school" className="text-sm">School*</label>
                <input type="text" id="school" className="border border-gray-300 h-8 rounded px-2 py-1 text-sm transition-all duration-100 hover:border-2" />
              </div>
            </div>
          </form>
        </div>

        <Line />

        {/* Footer */}
        <div className="px-4 py-2 flex justify-end items-center shrink-0">
          <button className="py-1.5 px-5 text-white font-semibold rounded-2xl bg-[#0a66c2] hover:bg-[#004182] transition-colors duration-150">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserDetails;
