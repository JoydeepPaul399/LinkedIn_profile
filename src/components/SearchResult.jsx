import React, { useEffect, useRef, useState } from "react";
import myImg from "../assets/myImage.jpg";
import { MdOutlineWatchLater } from "react-icons/md";

const SearchResult = ({ close }) => {
  const modalRef = useRef(null);

  const [isVisible, setIsVisible]= useState(false)

  useEffect(()=>{
    setTimeout(()=>setIsVisible(true), 10)
  }, [])

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      close(); // Close if click is outside the modal
    }
  };

  return (
    // cover whole screen 
    <div
      onClick={handleOverlayClick}
      className="fixed top-14 left-0 right-0 bottom-0 bg-black/50 z-0 flex justify-center items-start pt-16"
    >
      {/* main box */}
      <div
        ref={modalRef}
        className={`bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 mx-4 absolute left-30 top-0 transition-transform duration-300 transform origin-top ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} `}
      >
        <div className="flex justify-between items-center pb-2 mb-4">
          <h3 className="text-lg font-semibold">Recent</h3>
          <button className="text-sm text-blue-600 hover:underline">See all</button>
        </div>

        {/* recent searched people  */}
        <div className="flex gap-6 mb-4">
          <div className="flex flex-col items-center gap-2 w-8">
            <img className="w-8 h-8 rounded-full" src={myImg} alt="User" />
            <p className="text-sm">Rupam Nath</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-8 h-8 rounded-full" src={myImg} alt="User" />
            <p>Vishan Arora</p>
          </div>
        </div>

        {/* Job posts  */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <MdOutlineWatchLater />
            <p>frontend developer</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineWatchLater />
            <p>full stack developer</p>
          </div>
        </div>

        {/* suggestions  */}
        <div>
          <h4 className="font-semibold mb-2">Try searching for</h4>
          <SearchSuggestion text="front end development" />
          <SearchSuggestion text="web developer" />
        </div>
      </div>
    </div>
  );
};

const SearchSuggestion = ({ text }) => (
  <div className="flex items-center gap-2 mb-1">
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
    <p>{text}</p>
  </div>
);

export default SearchResult;
