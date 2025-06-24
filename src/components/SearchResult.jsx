import React, { useEffect, useRef, useState } from "react";
import myImg from "../assets/myImage.jpg";
import { MdOutlineWatchLater } from "react-icons/md";

const SearchResult = ({ close }) => {
  const modalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      close();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed top-[3.5rem] left-0 right-0 bottom-0 z-10 bg-black/30 dark:bg-black/60 flex justify-center items-start overflow-y-auto px-4"
    >
      <div
        ref={modalRef}
        className={`w-full max-w-2xl rounded-md shadow-xl p-4 sm:p-6 bg-white dark:bg-[#1d2226] text-black dark:text-white transition-all duration-300 transform origin-top ${
          isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        {/* Recent Section */}
        <div className="flex justify-between items-center pb-2 mb-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold">Recent</h3>
          <button className="text-sm text-blue-600 hover:underline">
            See all
          </button>
        </div>

        {/* Recent Searches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { name: "Rupam Nath", img: myImg },
            { name: "Vishan Arora", img: myImg },
          ].map((person, i) => (
            <div key={i} className="flex items-center gap-3">
              <img
                src={person.img}
                alt={person.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="text-sm font-medium truncate">{person.name}</p>
            </div>
          ))}
        </div>

        {/* Job Posts */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Recent job searches</h4>
          {["Frontend Developer", "Full Stack Developer"].map((job, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <MdOutlineWatchLater className="text-gray-600 dark:text-gray-300" />
              <p className="text-sm">{job}</p>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div>
          <h4 className="font-semibold mb-2">Try searching for</h4>
          <SearchSuggestion text="Front End Development" />
          <SearchSuggestion text="Web Developer" />
        </div>
      </div>
    </div>
  );
};

const SearchSuggestion = ({ text }) => (
  <div className="flex items-center gap-2 mb-2">
    <svg
      stroke="currentColor"
      fill="currentColor"
      className="text-[#404040] dark:text-white"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
    </svg>
    <p className="text-sm">{text}</p>
  </div>
);

export default SearchResult;
