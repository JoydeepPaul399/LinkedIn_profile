import React from "react";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import projectList from "../assets/ProjectLit";

const ProjectsBox = () => {
    const lastIndex = projectList.length - 1;
    return (
        <div className="w-full h-full dark:bg-[#222] dark:text-white">
            <div className="flex justify-between items-center py-2 px-4">
                <div>
                    <h1 className="font-semibold text-lg text-[#191919] dark:text-white">Projects</h1>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="text-[#404040] dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer">
                        {/* add button  */}
                        <IoIosAdd size={33} />
                    </div>

                    <div className="text-[#404040] dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer">
                        {/* Edit button  */}
                        <MdOutlineModeEdit size={28} />
                    </div>
                </div>
            </div>

            {
                // you can render your project list here if needed
            }

        </div>
    );
};

export default ProjectsBox;
