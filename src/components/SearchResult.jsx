import React from "react";
import myImg from "../assets/myImage.jpg";
import { MdOutlineWatchLater } from "react-icons/md";


const SearchResult = () => {
  return (
    <div className="fixed inset-0 text-[#666666] dark:text-gray-300 w-full h-full bg-black/50">
      <div className="w-1/2 mx-auto bg-white h-full">
        <div className="flex justify-between">
          <h3>Recent</h3>
          <button>See all</button>
        </div>
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <img className="w-8 rounded-full" src={myImg} alt="User Photo" />
            <p>Rupam Nath</p>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-8 rounded-full" src={myImg} alt="User Photo" />
            <p>Vishan Arora</p>
          </div>
        </div>

        <div>
            <div>
                <MdOutlineWatchLater />
                <p>frontend developer</p>
            </div>
            <div>
                <MdOutlineWatchLater />
                <p>full stack developer</p>
            </div>
        </div>

        <div>
            <div>
                <h4>Try searching for</h4>
            </div>

            <div>
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
                <p>front end developement</p>
            </div>
            <div>
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
                <p>web developer</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default SearchResult;
