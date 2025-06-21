import React from "react";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import Folder from "../assets/Folder";
import skillData from "../assets/skillsData";
import Skill from "./Skill";
import temp from '../assets/temp.svg'
import Line from "./Line";
import { CgArrowRight } from "react-icons/cg";

const Skills = () => {
  const lastIndex= skillData.length - 1
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center py-2 px-4">
        <div>
          <h1 className="font-semibold text-lg text-[#191919]">Skills</h1>
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
      <div className="mx-4 w-full h-full">
        {
          skillData.map((el, index)=>(
            <div key={index}>
              <Skill name={el.name} folderImage={<Folder />} project={el.AssoProject} />
              {index!== lastIndex && <Line /> }
            </div>
          ))
        }
      </div>
      <Line />
      <div className='flex justify-center items-center w-full h-full py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in'>
        <div className='flex justify-center items-center'>
          <span>Show all 43 Skills</span>
          <div>
            <CgArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
