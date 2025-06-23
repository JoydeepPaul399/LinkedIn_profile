import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiQuestionFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full px-18 pb-4 pt-12 bg-[#f4f2ee] dark:bg-[#1a1a1a]">
      <div>
        {/* main footer */}
        <div className="flex">
          <div className="grid grid-cols-3 gap-2 text-xs text-[#62615f] dark:text-[#bbbbbb]">
            <div>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="#" className="hover:underline">About</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Professional Community Policies</Link>
                </li>
                <li>
                  <Link to="#" className="flex hover:underline">
                    <span>Privacy & Terms</span>
                    <span>
                      <MdOutlineArrowDropDown size={20} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Sales Solutions</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Safety Center</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="#" className="hover:underline">Accessibility</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Careers</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Ad Choices</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Mobile</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to={"#"} className="hover:underline">Talent Solutions</Link>
                </li>
                <li>
                  <Link to={"#"} className="hover:underline">Marketing Solutions</Link>
                </li>
                <li>
                  <Link to={"#"} className="hover:underline">Advertising</Link>
                </li>
                <li>
                  <Link to={"#"} className="hover:underline">Small Business</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* right side */}
          <div className="flex gap-2 w-[80%]">

            {/* info blocks */}
            <div className="px-5 flex-1/2">
              <div className="flex gap-1 items-start text-[#3d3d3c] dark:text-[#cccccc]">
                <RiQuestionFill size={25} />
                <div className="flex flex-col gap-1 text-[#00000099] dark:text-[#ddddddcc]">
                  <span className="text-sm font-semibold">Questions</span>
                  <span className="text-[13px] text-[#62615f] dark:text-[#bbbbbb]">Visit our Help Center</span>
                </div>
              </div>

              <div className="flex gap-1 items-start mt-4 text-[#3d3d3c] dark:text-[#cccccc]">
                <IoSettingsSharp size={25} />
                <div className="flex flex-col gap-1 text-[#00000099] dark:text-[#ddddddcc]">
                  <span className="text-sm font-semibold">Manage your account and privacy</span>
                  <span className="text-[13px] text-[#62615f] dark:text-[#bbbbbb]">Go to your Settings.</span>
                </div>
              </div>

              <div className="flex gap-1 items-start mt-4 text-[#3d3d3c] dark:text-[#cccccc]">
                <MdPrivacyTip size={25} />
                <div className="flex flex-col gap-1 text-[#00000099] dark:text-[#ddddddcc]">
                  <span className="text-sm font-semibold">Recommendation transparency</span>
                  <span className="text-[13px] text-[#62615f] dark:text-[#bbbbbb]">Learn more about Recommended Content.</span>
                </div>
              </div>
            </div>

            {/* language selector */}
            <div className="w-full flex flex-col flex-grow gap-1.5">
              <label
                className="text-[#62615f] dark:text-[#bbbbbb] text-xs"
                htmlFor="selectLang"
              >
                Select Language
              </label>
              <select
                id="selectLang"
                className="bg-white dark:bg-[#222222] rounded-md pl-1 pr-8 py-1 border border-gray-300 dark:border-gray-600 text-[#62615f] dark:text-[#bbbbbb] text-sm"
              >
                <option value="English (English)">English (English)</option>
                <option value="العربية (Arabic)">العربية (Arabic)</option>
                <option value="বাংলা (Bangla)">বাংলা (Bangla)</option>
                <option value="Čeština (Czech)">Čeština (Czech)</option>
                <option value="हिंदी (Hindi)">हिंदी (Hindi)</option>
                <option value="Italiano (Italian)">Italiano (Italian)</option>
                <option value="Bahasa Malaysia (Malay)">Bahasa Malaysia (Malay)</option>
              </select>
            </div>
          </div>
        </div>

        <span className="text-sm text-[#62615f] dark:text-[#bbbbbb] block mt-4">
          LinkedIn Corporation © 2025
        </span>
      </div>
    </footer>
  );
};

export default Footer;
