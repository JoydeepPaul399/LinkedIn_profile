import React, { useEffect, useState } from "react";
import myImage from "../assets/myImage.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/userSlice";
import darkBtnImg from "../assets/dark-mode.png";
import lightBtnImg from "../assets/light.png";

const NavbarMobile = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.user?.mode);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, [isVisible]);

  return (
    <div
      className={`flex flex-row flex-wrap justify-around items-center gap-4 px-2 py-3 bg-white dark:bg-gray-900 w-full z-50 border-t border-gray-300 dark:border-gray-700 transition-transform duration-300 transform origin-top ${
        isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
      } `}
    >
      {/* Home */}
      <div className="relative group cursor-pointer flex flex-col items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mercado-match text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
            width="30"
            height="24"
          >
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z" />
          </svg>
        </div>
        <div className="w-[16px] h-[16px] rounded-full border-5 bg-white border-[#CB112D] absolute -top-1 right-0"></div>
        <p className="hidden md:block text-xs text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
          Home
        </p>
      </div>

      {/* My Network */}
      <div className="group cursor-pointer flex flex-col items-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="mercado-match text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
        >
          <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z" />
        </svg>
        <div className="w-[16px] h-[16px] rounded-full bg-[#CB112D] text-white flex justify-center items-center absolute -top-1 right-0 text-xs">
          5
        </div>
        <p className="hidden md:block text-xs text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
          My Network
        </p>
      </div>

      {/* Jobs */}
      <div className="group cursor-pointer flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="mercado-match text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
        >
          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z" />
        </svg>
        <p className="hidden md:block text-xs text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
          Jobs
        </p>
      </div>

      {/* Messaging */}
      <div className="group cursor-pointer flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="mercado-match text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
        >
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z" />
        </svg>
        <p className="hidden md:block text-xs text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
          Messaging
        </p>
      </div>

      {/* Notification */}
      <div className="group cursor-pointer flex flex-col items-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="mercado-match text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
        >
          <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z" />
        </svg>
        <div className="w-[16px] h-[16px] rounded-full bg-[#CB112D] text-white flex justify-center items-center absolute -top-1 right-0 text-xs">
          5
        </div>
        <p className="hidden md:block text-xs text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
          Notification
        </p>
      </div>

      {/* Me */}
      <div className="flex flex-col items-center group cursor-pointer">
        <img className="w-6 rounded-full" src={myImage} alt="my" />
        <div className="hidden md:flex items-center">
          <span className="text-xs text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
            Me
          </span>
          <MdOutlineArrowDropDown
            className="text-[#666666] dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
            size={20}
          />
        </div>
      </div>

      {/* Theme Switch */}
      <div className="flex flex-col items-center cursor-pointer">
        {mode === "light" ? (
          <button className="w-8" onClick={() => dispatch(toggleTheme())}>
            <img className="w-full" src={darkBtnImg} alt="Dark Mode" />
          </button>
        ) : (
          <button className="w-8" onClick={() => dispatch(toggleTheme())}>
            <img className="w-full" src={lightBtnImg} alt="Light Mode" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
