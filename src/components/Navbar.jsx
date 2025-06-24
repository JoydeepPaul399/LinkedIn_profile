import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import search from "../assets/search.svg";
import { IoMenu } from "react-icons/io5";
import SearchResult from "./SearchResult";
import NavRight from "./NavComponents/NavRight";
import NavbarMobile from "./NabarMobile";

const Navbar = () => {
  const inputRef = useRef(null)
  const [showSearch, setShowSearch] = useState(false);
  const [showNavMobile, setShowNavMobile]= useState(false)

  // Show search box 
  useEffect(() => {
    if (showSearch) {
      inputRef.current.focus()
    }
  }, [showSearch])

  // Initial box when user clicks that gets hide and main box gets appear 
  const hideInitialSearch = () => {
    setShowSearch(true);
  };

  return (
    <header className="fixed top-0 left-0 lg:h-16 bg-white dark:bg-gray-900 w-full border border-t-transparent border-l-transparent border-r-transparent border-b-[#e8e8e8] dark:border-b-gray-700 z-100 max-w-screen">
      <nav className="h-full lg:py-2 md:py-2  ">
        <div className={`flex items-center sm:gap-4 sm:w-[70%] w-[70%] lg:w-full mx-auto sm:mx-auto sm:justify-between justify-between md:justify-around ${showSearch ? "gap-1" : "gap-6"} h-full`}>
          {/* Left side  */}
          <div className="flex gap-2 md:gap-3 justify-center items-center">
            <div>
              {/* Linkedin logo */}
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado- text-[#0a66c2] dark:text-white"
                  width="40"
                  focusable="false"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </Link>
            </div>

            {showSearch ? (
              <div className="border dark:bg-gray-900 dark:text-white border-[#dadada] rounded-4xl h-8 px-2 items-center gap-2 hidden lg:flex focus-within:border-black focus-within:border-2 focus-within:dark:border-white foucs w-full ">
                <div className="flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className="text-[#404040] dark:text-white"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
                  </svg>
                  <input ref={inputRef} className="outline-none px-2 py-2 w-full text-start" type="text" placeholder="Search" />
                </div>
              </div>
            ) : (
              <div
                onClick={hideInitialSearch}
                className="border dark:bg-gray-900 dark:text-white border-[#dadada] rounded-4xl w-72 h-8 px-2 items-center gap-2 hidden lg:flex"
              >
                <div className="flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className="text-[#404040] dark:text-white"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-[#666666] dark:text-gray-300">Search</p>
                </div>
              </div>
            )}

            {/* search  */}

            {/* For medium devices  */}
            <div className="lg:hidden md:flex flex-col justify-center items-center gap-2 sm:gap-1">
              <img src={search} alt="Search" />
              <span className="text-[#666666] dark:text-gray-300 text-xs md:block hidden">
                Search
              </span>
            </div>
          </div>

          {/* right this will be hidden in sm devices. we will add a menu button which will control the right nav  */} 
          <NavRight />
          
          {/* for sm devices  */}
          <button onClick={()=>setShowNavMobile(!showNavMobile)} className="dark:text-white lg:hidden md:hidden ">
            <IoMenu size={28} />
          </button>
        </div>
      </nav>

      {
        showSearch && (
          <SearchResult close={(e) => setShowSearch(false)} />
        )
      }
      {
        showNavMobile && <NavbarMobile />
      }
    </header>
  );
};

export default Navbar;




