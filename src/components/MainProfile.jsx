import React, { useEffect, useRef, useState } from "react";
import coverImage from "../assets/coverPhoto.jpg";
import myImage from "../assets/myImage.jpg";
import { MdKeyboardArrowRight, MdOutlineModeEdit } from "react-icons/md";
import clgImage from "../assets/clg.jpg";
import { Link } from "react-router-dom";
import { GrFormEdit } from "react-icons/gr";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import EditUserDetails from "./EditUserDetails";

const MainProfile = () => {
    const ref = useRef();
    const scrollLeftBtnRef = useRef();
    const [showLeftScrollBtn, setShowLeftScrollBtn] = useState(false);
    const [showRightScrollBtn, setShowRightScrollBtn] = useState(false);
    const [editUser, setEditUser] = useState(false);

    const handleScroll = () => {
        const el = ref.current;
        if (!el) return;
        setShowLeftScrollBtn(ref.current.scrollLeft > 0);
        const scrollAtRight = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
        setShowRightScrollBtn(!scrollAtRight);
    };

    const scrollLeftBtn = () => {
        ref.current.scrollLeft -= 200;
    };

    const scrollRightBtn = () => {
        ref.current.scrollLeft += 200;
    };

    const editUsrDtls = () => {
        setEditUser(true);
    };

    useEffect(() => {
        let el = ref.current;
        if (!el) return;

        el.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="relative dark:bg-[#222]">
                <img src={coverImage} className="h-48 w-full" alt="Cover Image" />
                <div className="absolute -bottom-15 left-8 border-4 border-white rounded-full">
                    <img
                        className="rounded-full w-40"
                        src={myImage}
                        alt="Profile Picture"
                    />
                </div>
                <div onClick={editUsrDtls} className="absolute right-10 top-54 p-2 rounded-full hover:bg-gray-100 hover:dark:text-black cursor-pointer dark:text-white">
                    <MdOutlineModeEdit size={28} />
                </div>
            </section>

            <div className="flex dark:text-white">
                <div className="mt-18 flex mx-8 max-w-full justify-between items-center">
                    <div>
                        <div className="flex gap-2 items-center">
                            <h1 className="font-bold text-3xl text-[#1d1d1d] dark:text-white">
                                Joydeep Paul
                            </h1>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M11.5283 1.5999C11.7686 1.2944 12.2314 1.2944 12.4717 1.5999L14.2805 3.9005C14.4309 4.0917 14.6818 4.1733 14.9158 4.1069L17.7314 3.3089C18.1054 3.2029 18.4799 3.475 18.4946 3.8634L18.6057 6.7878C18.615 7.0309 18.770 7.2443 18.9984 7.3282L21.7453 8.3376C22.1101 8.4717 22.2532 8.9119 22.0368 9.2348L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.770 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.7195 20.0995C9.5691 19.9083 9.3182 19.8267 9.0842 19.8931L6.2686 20.6911C5.8946 20.7971 5.5201 20.525 5.5054 20.1366L5.3943 17.2122C5.385 16.9691 5.230 16.7557 5.0016 16.6718L2.2547 15.6624C1.8899 15.5283 1.7468 15.0881 1.9632 14.7652L3.5922 12.334C3.7276 12.1319 3.7276 11.8681 3.5922 11.666L1.9632 9.2348C1.7468 8.9119 1.8899 8.4717 2.2547 8.3376L5.0017 7.3282C5.230 7.2443 5.385 7.0309 5.3943 6.7878L5.5054 3.8634C5.5201 3.475 5.8946 3.2029 6.2686 3.3089L9.0842 4.1069C9.3182 4.1733 9.5691 4.0917 9.7195 3.9005L11.5283 1.5999Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M9 12L11 14L15 10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="mr-6 text-base text-[#1a1a1a] dark:text-white">
                            Full Stack Developer | Frontend Developer (React.js, MERN Stack) |
                            DevOps Enthusiast | Data Analytics Learner | Open to Work
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-[#00000099] text-[14px] dark:text-white">
                                Bengaluru, Karnataka, India
                            </p>
                            <span className="w-0.5 h-0.5 text-sm bg-[#9e9e9e] rounded-full"></span>
                            <Link className="text-[14px] text-[#0A66C2] dark:text-[#3394FF] font-semibold hover:underline" to="#">Contact info</Link>
                        </div>
                        <Link to="#" className="text-sm text-[#0A66C2] dark:text-[#3394FF] font-semibold hover:underline">249 Connection</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 w-full dark:text-white">
                    <img className="w-8" src={clgImage} alt="College Logo" />
                    <h6>Amity University Online</h6>
                </div>
            </div>

            <div className="mx-8 mt-1.5 flex items-center gap-2">
                <button className="border-none rounded-2xl px-4 py-1 bg-[#0a66c2] text-white font-semibold cursor-pointer hover:bg-[#004182]">
                    Open to
                </button>
                <button className="shadow-[0_0_0_1.3px_#0a66c2] text-[#0a66c2] dark:text-[#3394FF] rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#ebf4fc] hover:shadow-[0_0_0_2px_#004182]">
                    Add Profile section
                </button>
                <button className="shadow-[0_0_0_1.3px_#0a66c2] text-[#0a66c2] dark:text-[#3394FF] rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#ebf4fc] hover:shadow-[0_0_0_2px_#004182]">
                    Enhance Profile
                </button>
                <button className="shadow-[0_0_0_1.3px_#404040] text-[#404040] rounded-2xl px-4 py-1 font-semibold cursor-pointer hover:bg-[#f2f2f2] hover:dark:bg-gray-400 dark:bg-[#222] dark:text-white hover:shadow-[0_0_0_2px_#171717]">
                    Resources
                </button>
            </div>

            <section className="mx-8 mt-6 w-full relative dark:bg-[#222] dark:text-white">
                {showLeftScrollBtn && (
                    <div
                        ref={scrollLeftBtnRef}
                        onClick={scrollLeftBtn}
                        className="absolute top-[30%] bg-[#595d61] rounded-full p-0.5 cursor-pointer select-none text-white"
                    >
                        <MdKeyboardArrowLeft size={28} />
                    </div>
                )}
                <ul
                    ref={ref}
                    className="w-full flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar pr-10"
                >
                    {/* your list items stay the same */}
                </ul>
                {showRightScrollBtn && (
                    <div
                        onClick={scrollRightBtn}
                        className="absolute top-[30%] right-10 bg-[#595d61] rounded-full p-0.5 cursor-pointer text-white select-none"
                    >
                        <MdKeyboardArrowRight size={28} />
                    </div>
                )}
            </section>

            {editUser && <EditUserDetails close={() => setEditUser(false)} />}
        </>
    );
};

export default MainProfile;
