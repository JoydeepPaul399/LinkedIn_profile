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
          <div className="grid grid-cols-3 text-xs">
            <div>
              <ul>
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
              <ul>
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
              <ul>
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
          <div className="flex gap-3">
            <div className="">
              <div className="">
                <div className="flex flex-col">
                    <div className="text-[#3d3d3c]">
                        <RiQuestionFill />
                    </div>
                    <div>
                        <span className="text-sm font-semibold text-[#00000099]">Questions</span>
                        <span className="text-xs">Visit our Help Center</span>
                    </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <IoSettingsSharp />
                  <span className="text-sm">Manage your account and privacy</span>
                </div>
                <span className="text-xs">Go to your Settings.</span>
              </div>
              <div>
                <div className="flex">
                  <MdPrivacyTip />
                  <span className="text-sm">Recommendation transparency</span>
                </div>
                <span className="text-xs">Learn more about Recommended Content.</span>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="selectLang">Select Language</label>
              <select className="bg-white rounded-md pl-1 pr-8 py-1 border" id="selectLang">
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
        <span>LinkedIn Corporation © 2025</span>
      </div>
    </div>
  );
};

export default Footer;
