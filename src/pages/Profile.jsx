import React from "react";
import LeftBox from "../components/LeftBox";
import RigthBox from "../components/RigthBox";
import DisclaimerMarquee from "../components/Disclaimer";

const Profile = () => {
  return (
    <>
      <DisclaimerMarquee />
    <div className="bg-[#f4f2ee] dark:bg-[#121212] pt-2 min-h-screen pt-14 w-full flex justify-center items-start">
      <div className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 box-border grid grid-cols-1 md:grid-cols-[65%_30%] lg:grid-cols-[74%_26%] gap-6 md:gap-8 lg:gap-14">
        {/* Left section */}
        <div className="mt-6">
          <LeftBox />
        </div>

        {/* Right section */}
        <div className="mt-6">
          <RigthBox />
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
