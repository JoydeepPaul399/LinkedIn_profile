import React from "react";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
// import amityImage from '../assets/amity.jpeg';
import { useSelector } from "react-redux";

const Education = () => {
  // user details from redux store
  const user = useSelector((state) => state.user);

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center py-2 px-4">
        <div>
          <h1 className="font-semibold text-lg text-[#191919] dark:text-gray-100">
            Education
          </h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="text-[#404040] dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
            {/* add button */}
            <IoIosAdd size={33} />
          </div>

          <div className="text-[#404040] dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
            {/* Edit button */}
            <MdOutlineModeEdit size={28} />
          </div>
        </div>
      </div>

      <div className="w-full h-full px-4 flex gap-2 justify-start items-start">
        <img
          className="h-12 rounded"
          src={user?.clgImg}
          alt="Amity University"
        />
        <div>
          <h5 className="text-base font-semibold text-[#000000E6] dark:text-gray-100">
            {user?.clgName}
          </h5>
          <p className="text-sm text-[#000000E6] dark:text-gray-300">
            {user?.courseName + ", " + user?.industry}
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-[#00000099] dark:text-gray-400">
              {user?.courseDuration}
            </span>
            <span className="text-sm text-[#000000E6] dark:text-gray-300">
              Grade: {user?.grade}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
