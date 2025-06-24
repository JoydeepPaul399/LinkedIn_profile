import React from 'react';

const DisclaimerMarquee = () => {
  return (
    <div className="w-full pt-20 overflow-hidden bg-yellow-100 dark:text-white  dark:bg-[#121212] border-y border-yellow-400 text-yellow-900 text-sm font-medium">
      <div className="disclaimer-marquee inline-block whitespace-nowrap">
        ⚠️ Disclaimer: This project is a personal educational clone of LinkedIn created solely for learning and portfolio purposes. It is not affiliated with, endorsed by, or connected to LinkedIn Corporation or Microsoft in any way. All trademarks and logos belong to their respective owners.
      </div>
    </div>
  );
};

export default DisclaimerMarquee;
