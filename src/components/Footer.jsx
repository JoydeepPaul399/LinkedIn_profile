import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiQuestionFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full px-18 pb-4 pt-12 bg-[#f4f2ee]">
      <div>
        {/* main footer */}
        <div className="flex">
          <div className="grid grid-cols-3 gap-2 text-xs text-[#62615f]">
            <div>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Professional Community Policies</Link>
                </li>
                <li>
                  <Link to="#" className="flex ">
                    <span>Privacy & Terms</span>
                    <span>
                      <MdOutlineArrowDropDown size={20} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#">Sales Solutions</Link>
                </li>
                <li>
                  <Link to="#">Safety Center</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="#">Accessibility</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Ad Choices</Link>
                </li>
                <li>
                  <Link to="#">Mobile</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to={"#"}>Talent Solutions</Link>
                </li>
                <li>
                  <Link to={"#"}>Marketing Solutions</Link>
                </li>
                <li>
                  <Link to={"#"}>Advertising</Link>
                </li>
                <li>
                  <Link to={"#"}>Small Business</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* right side  */}
          <div className="flex gap-2  w-[80%]">

            {/* start  */}
            <div className=" px-5 flex-1/2">
              <div>
                <div className="flex gap-1 items-start">
                  <div className="text-[#3d3d3c]">
                    <RiQuestionFill size={25} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-[#00000099]">Questions</span>
                    <span className="text-[13px] text-[#62615f]">Visit our Help Center</span>
                  </div>
                </div>
              </div>

              {/* new  */}
              <div>
                <div className="flex gap-1 items-start">
                  <div className="text-[#3d3d3c]">
                    <IoSettingsSharp size={25} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-[#00000099]">Manage your account and privacy</span>
                    <span className="text-[13px] text-[#62615f]">Go to your Settings.</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-1 items-start">
                  <div className="text-[#3d3d3c]">
                    <MdPrivacyTip size={25} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-[#00000099]">Recommendation transparency</span>
                    <span className="text-[13px] text-[#62615f]">Learn more about Recommended Content.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* end  */}

            {/* select language  */}
            <div className="w-full flex flex-col flex-grow gap-1.5">
              <label className="text-[#62615f] text-xs" htmlFor="selectLang">Select Language</label>
              <select className="bg-white rounded-md pl-1 pr-8 py-1 border text-[#62615f] text-sm" id="selectLang">
                <option value="English (English)">English (English)</option>
                <option value="العربية (Arabic)">العربية (Arabic)</option>
                <option value="বাংলা (Bangla)">বাংলা (Bangla)</option>
                <option value="Čeština (Czech)">Čeština (Czech)</option>
                <option value="हिंदी (Hindi)">हिंदी (Hindi)</option>
                <option value="Italiano (Italian)">Italiano (Italian)</option>
                <option value="Bahasa Malaysia (Malay)">
                  Bahasa Malaysia (Malay)
                </option>
              </select>
            </div>
          </div>
        </div>
        <span className="text-sm text-[#62615f]">LinkedIn Corporation © 2025</span>
      </div>
    </div>
  );
};

export default Footer;
