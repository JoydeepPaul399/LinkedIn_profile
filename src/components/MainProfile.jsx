import React, { useEffect, useRef, useState } from "react";
import coverImage from "../assets/coverPhoto.jpg";
import myImage from "../assets/myImage.jpg";
import { MdKeyboardArrowRight, MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import EditUserDetails from "./EditUserDetails";
import { useSelector } from "react-redux";
import { MdOutlineVerified } from "react-icons/md";

const MainProfile = () => {
  const ref = useRef();
  const scrollLeftBtnRef = useRef();
  const [showLeftScrollBtn, setShowLeftScrollBtn] = useState(false);
  const [showRightScrollBtn, setShowRightScrollBtn] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const user = useSelector((state) => state.user);

  const handleScroll = () => {
    const el = ref.current;
    if (!el) return;
    setShowLeftScrollBtn(ref.current.scrollLeft > 0);
    const scrollAtRight =
      Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
    setShowRightScrollBtn(!scrollAtRight);
  };

  const scrollLeftBtn = () => {
    ref.current.scrollLeft -= 200;
  };

  const scrollRightBtn = () => {
    ref.current.scrollLeft += 200;
  };

  const editUsrDtls = () => {
    setEditUser(true);
  };

  useEffect(() => {
    let el = ref.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Cover Section */}
      <section className="relative dark:bg-[#222]">
        <img
          src={coverImage}
          className="h-48 w-full object-cover"
          alt="Cover"
        />
        <div className="absolute -bottom-16 left-4 sm:left-8 border-4 border-white rounded-full">
          <img
            className="rounded-full w-28 sm:w-36 md:w-40"
            src={myImage}
            alt="Profile"
          />
        </div>
        <div
          onClick={editUsrDtls}
          className="absolute right-4 sm:right-10 top-[14rem] p-2 rounded-full hover:bg-gray-100 hover:dark:text-black cursor-pointer dark:text-white"
        >
          <MdOutlineModeEdit size={28} />
        </div>
      </section>

      {/* User Info Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between px-4 sm:px-8 mt-20 dark:text-white">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-2xl sm:text-3xl text-[#1d1d1d] dark:text-white">
              {user?.fName + " " + user?.lName}
            </h1>
            <MdOutlineVerified size={28} />
          </div>
          <p className="text-base text-[#1a1a1a] dark:text-white mt-1 mr-3">
            {user?.bio}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
            <p className="text-[#00000099] dark:text-white">{user?.address}</p>
            <span className="w-1 h-1 bg-[#9e9e9e] rounded-full"></span>
            <Link
              className="text-[#0A66C2] dark:text-[#3394FF] font-semibold hover:underline"
              to="#"
            >
              Contact info
            </Link>
          </div>
          <Link
            to="#"
            className="text-sm text-[#0A66C2] dark:text-[#3394FF] font-semibold hover:underline"
          >
            {user?.countOfConnection} Connections
          </Link>
        </div>

        <div className="flex justify-start sm:justify-center items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto dark:text-white">
          <img className="w-8" src={user?.clgImg} alt="College Logo" />
          <h6 className="text-sm sm:text-base">{user?.clgName}</h6>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 sm:px-8 mt-4 flex flex-wrap gap-2">
        <button className="rounded-2xl px-4 py-1 bg-[#0a66c2] text-white font-semibold hover:bg-[#004182]">
          Open to
        </button>
        <button className="shadow-[0_0_0_1.3px_#0a66c2] text-[#0a66c2] dark:text-[#3394FF] rounded-2xl px-4 py-1 font-semibold hover:bg-[#ebf4fc] hover:shadow-[0_0_0_2px_#004182]">
          Add Profile section
        </button>
        <button className="shadow-[0_0_0_1.3px_#0a66c2] text-[#0a66c2] dark:text-[#3394FF] rounded-2xl px-4 py-1 font-semibold hover:bg-[#ebf4fc] hover:shadow-[0_0_0_2px_#004182]">
          Enhance Profile
        </button>
        <button className="shadow-[0_0_0_1.3px_#404040] text-[#404040] rounded-2xl px-4 py-1 font-semibold hover:bg-[#f2f2f2] hover:dark:bg-gray-400 dark:bg-[#222] dark:text-white hover:shadow-[0_0_0_2px_#171717]">
          Resources
        </button>
      </div>

      {/* Horizontal Scroll Section */}
      <section className="px-4 sm:px-8 mt-6 w-full relative dark:bg-[#222] dark:text-white">
        {showLeftScrollBtn && (
          <div
            ref={scrollLeftBtnRef}
            onClick={scrollLeftBtn}
            className="absolute top-[30%] bg-[#595d61] rounded-full p-0.5 cursor-pointer select-none text-white"
          >
            <MdKeyboardArrowLeft size={28} />
          </div>
        )}
        <ul
          ref={ref}
          className="w-full flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar pr-10"
        >
          {/* your list items stay the same */}
        </ul>
        {showRightScrollBtn && (
          <div
            onClick={scrollRightBtn}
            className="absolute top-[30%] right-4 sm:right-10 bg-[#595d61] rounded-full p-0.5 cursor-pointer text-white select-none"
          >
            <MdKeyboardArrowRight size={28} />
          </div>
        )}
      </section>

      {editUser && <EditUserDetails close={() => setEditUser(false)} />}
    </>
  );
};

export default MainProfile;
