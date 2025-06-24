import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import search from "../assets/search.svg";
import { IoMenu } from "react-icons/io5";
import SearchResult from "./SearchResult";
import NavRight from "./NavComponents/NavRight";
import NavbarMobile from "./NabarMobile";

const Navbar = () => {
  const inputRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);

  useEffect(() => {
    if (showSearch) inputRef.current?.focus();
  }, [showSearch]);

  const hideInitialSearch = () => {
    setShowSearch(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-[#e8e8e8] dark:border-b-gray-700 w-full overflow-x-hidden">
      <nav className="h-full py-2">
        <div className="flex items-center justify-between gap-2 w-full max-w-[1128px] px-2 sm:px-4 mx-auto min-w-0">
          {/* Left side */}
          <div className="flex items-center gap-2 md:gap-3 flex-grow min-w-0">
            {/* Logo */}
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#0a66c2] dark:text-white"
                width="40"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </Link>

            {/* Search input (desktop, tablet, mobile) */}
            {showSearch ? (
              <div className="border border-[#dadada] dark:bg-gray-900 dark:text-white rounded-2xl h-8 px-2 flex items-center gap-2 flex-grow focus-within:border-black focus-within:border-2 focus-within:dark:border-white min-w-0">
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
                  <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search"
                  className="outline-none px-2 py-2 w-full bg-transparent"
                />
              </div>
            ) : (
              <>
                {/* Desktop search trigger */}
                <div
                  onClick={hideInitialSearch}
                  className="border border-[#dadada] dark:bg-gray-900 dark:text-white rounded-2xl w-72 h-8 px-2 items-center gap-2 hidden lg:flex cursor-pointer"
                >
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
                    <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z" />
                  </svg>
                  <p className="text-[#666666] dark:text-gray-300">Search</p>
                </div>

                {/* Tablet/Mobile search icon */}
                <div
                  onClick={hideInitialSearch}
                  className="lg:hidden md:flex flex-col justify-center items-center gap-1 cursor-pointer"
                >
                  <img src={search} alt="Search" />
                  <span className="text-[#666666] dark:text-gray-300 text-xs hidden md:block">
                    Search
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Right nav */}
          {!showSearch && (
            <div className="hidden md:flex lg:flex">
              <NavRight />
            </div>
          )}

          {/* Mobile menu icon */}
          {!showSearch && (
            <button
              onClick={() => setShowNavMobile(!showNavMobile)}
              className="dark:text-white lg:hidden md:hidden"
            >
              <IoMenu size={28} />
            </button>
          )}
        </div>
      </nav>

      {showSearch && <SearchResult close={() => setShowSearch(false)} />}
      {showNavMobile && <NavbarMobile />}
    </header>
  );
};

export default Navbar;
