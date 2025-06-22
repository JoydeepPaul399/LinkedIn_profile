import React from "react";
import languages from '../assets/language'
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import Language from "./Language";
import Line from "./Line";

const Languages = () => {
  const lastIndex= languages.length - 1

  return (
    <div className="w-full h-full pb-4">
      <div className="flex justify-between items-center py-2 px-4">
        <div>
          <h1 className="font-semibold text-lg text-[#191919]">Languages</h1>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <div className="text-[#404040] p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            {/* add button  */}
            <IoIosAdd size={33} />
          </div>

          <div className="text-[#404040] p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            {/* Edit button  */}
            <MdOutlineModeEdit size={28} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {
          languages.map((item, index)=>(
            <div className="mx-4" key={index}>
              <Language name={item.name} proficiency={item.proficiency} />
              { index !== lastIndex && <Line /> }
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Languages;
