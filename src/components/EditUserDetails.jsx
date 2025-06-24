import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Line from "./Line";
import { useDispatch, useSelector } from "react-redux";
import { setPronoun, setUserDetailsReducers } from "../store/userSlice";

const EditUserDetails = ({ close }) => {
  // user details from redux store
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    fName: user?.fName,
    lName: user?.lName,
    bio: user?.bio,
    industry: user?.industry,
    school: user?.clgName,
  });
  const [pronouns, setPronouns] = useState(user?.selectedPronoun);

  const handleOnChnage = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setPronouns(e.target.value);
  };

  const onFormSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(setUserDetailsReducers(userDetails));
      dispatch(setPronoun(pronouns));
      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-105 bg-black/50 flex justify-center items-start overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl mt-8 rounded flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-4 py-2 shrink-0">
          <div className="flex justify-between items-center">
            <h1 className="text-[#000000E6] dark:text-gray-100 font-semibold text-xl">
              Edit intro
            </h1>
            <button
              onClick={close}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <IoClose size={28} />
            </button>
          </div>
        </div>

        <Line />

        {/* Scrollable Form Content */}
        <div className="px-4 py-4 w-full flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-6">
          <div className="text-[#000000BF] dark:text-gray-400 text-xs">
            * Indicates required
          </div>
          <form
            onSubmit={onFormSubmit}
            className="flex flex-col gap-4 text-[#000000BF] dark:text-gray-400"
          >
            {/* First name */}
            <div className="flex flex-col gap-1.5 w-[90%]">
              <label htmlFor="fName" className="text-sm dark:text-gray-200">
                First name*
              </label>
              <input
                type="text"
                id="fName"
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-8 rounded px-2 py-1 text-sm text-black dark:text-gray-100 transition-all duration-100 hover:border-2 hover:border-gray-400 dark:hover:border-gray-400"
                name="fName"
                value={userDetails?.fName}
                onChange={handleOnChnage}
              />
            </div>

            {/* Last name */}
            <div className="flex flex-col gap-1.5 w-[90%]">
              <label htmlFor="lName" className="text-sm dark:text-gray-200">
                Last name*
              </label>
              <input
                type="text"
                id="lName"
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-8 rounded px-2 py-1 text-sm text-black dark:text-gray-100 transition-all duration-100 hover:border-2 hover:border-gray-400 dark:hover:border-gray-400"
                name="lName"
                value={userDetails?.lName}
                onChange={handleOnChnage}
              />
            </div>

            {/* Pronouns */}
            <div className="flex flex-col gap-1.5 w-[90%]">
              <label htmlFor="pronouns" className="text-sm dark:text-gray-200">
                Pronouns*
              </label>
              <select
                id="pronouns"
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-8 rounded px-2 py-1 text-sm text-black dark:text-gray-100 transition-all duration-100 hover:border-2 hover:border-gray-400 dark:hover:border-gray-400"
                value={pronouns}
                onChange={handleSelect}
              >
                <option value="nil">Please Select</option>
                <option value="she/her">She/Her</option>
                <option value="he/him">He/Him</option>
                <option value="they/them">They/Them</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-1.5 w-[90%]">
              <label htmlFor="headline" className="text-sm dark:text-gray-200">
                Headline*
              </label>
              <textarea
                id="headline"
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-20 rounded px-2 py-2 text-sm text-black dark:text-gray-100 resize-none transition-all duration-100 hover:border-2 hover:border-gray-400 dark:hover:border-gray-400"
                name="bio"
                value={userDetails?.bio}
                onChange={handleOnChnage}
              />
            </div>

            {/* Current Position */}
            <div className="mt-4">
              <h2 className="font-bold text-[#000000E6] dark:text-gray-100 text-xl mb-2">
                Current position
              </h2>
              <div className="flex flex-col gap-1.5 w-[90%]">
                <label
                  htmlFor="industry"
                  className="text-sm dark:text-gray-200"
                >
                  Industry*
                </label>
                <input
                  type="text"
                  id="industry"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-8 rounded px-2 py-1 text-sm text-black dark:text-gray-100 transition-all duration-100 hover:border-2 hover:border-gray-400 dark:hover:border-gray-400"
                  name="industry"
                  value={userDetails?.industry}
                  onChange={handleOnChnage}
                />
              </div>
            </div>

            {/* Education */}
            <div className="mt-4">
              <h2 className="font-bold text-[#000000E6] dark:text-gray-100 text-xl mb-2">
                Education
              </h2>
              <div className="flex flex-col gap-1.5 w-[90%]">
                <label htmlFor="school" className="text-sm dark:text-gray-200">
                  School*
                </label>
                <input
                  type="text"
                  id="school"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-8 rounded px-2 py-1 text-sm text-black dark:text-gray-100 transition-all duration-100 hover:border-2 hover:border-gray-400 dark:hover:border-gray-400"
                  name="school"
                  value={userDetails?.school}
                  onChange={handleOnChnage}
                />
              </div>
            </div>
          </form>
        </div>

        <Line />

        {/* Footer */}
        <div className="px-4 py-2 flex justify-end items-center shrink-0">
          <button
            type="button"
            onClick={onFormSubmit}
            className="py-1.5 px-5 text-white font-semibold rounded-2xl bg-[#0a66c2] hover:bg-[#004182] transition-colors duration-150"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserDetails;
