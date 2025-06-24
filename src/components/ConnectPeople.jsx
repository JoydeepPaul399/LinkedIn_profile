import React from "react";
import { CgUserAdd } from "react-icons/cg";

const ConnectPeople = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col w-[80%] md:w-[90%] justify-start gap-4 mt-4 mb-4 ml-4">
      <div className="flex gap-1.5 justify-start items-start w-full">
        <img className="h-12 rounded-full" src={image} alt="Viewer Image" />
        <div className="flex flex-col items-start">
          <h3 className="text-[#272727] dark:text-gray-100 font-semibold">
            {name}
          </h3>
          <p className="line-clamp-2 text-ellipsis text-[#434343] dark:text-gray-400 text-sm">
            {desc}
          </p>
        </div>
      </div>
      <div className="flex justify-start ml-14">
        <div className="shadow-[0_0_0_1.3px_#404040] dark:shadow-[0_0_0_1.3px_rgba(255,255,255,0.3)] text-[#404040] dark:text-gray-300 rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] dark:hover:bg-gray-700 hover:shadow-[0_0_0_2px_#171717] dark:hover:shadow-[0_0_0_2px_white] w-fit flex items-center group">
          <div className="group-hover:text-black dark:group-hover:text-white">
            <CgUserAdd />
          </div>
          <span className="group-hover:text-black dark:group-hover:text-white font-semibold">
            Connect
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConnectPeople;
