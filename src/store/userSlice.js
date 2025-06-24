import { createSlice } from "@reduxjs/toolkit";
import clgImage from "../assets/clg.jpg";

const initialValue= {
    mode: localStorage.getItem("theme") || "light",
    fName: "Joydeep",
    lName: "Paul",
    bio: 'Full Stack Developer | Frontend Developer (React.js, MERN Stack) |DevOps Enthusiast | Data Analytics Learner | Open to Work',
    address: "Bengaluru, Karnataka, India",
    countOfConnection: "249",
    clgName: "Amity University Online",
    clgImg: clgImage,
    courseName: "Bachelor of Computer Application",
    industry: "Information Technology",
    courseDuration: "Jan 2022 - Mar 2025",
    grade: "A",
    profileView: 38,
    postImpression: 226,
    searchAppear: 17,
}

export const userSlice= createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        setUserDetails: (state, action)=>{
            state.fName=action.payload?.fName,
            state.lName= action.payload?.lName
        },
        toggleTheme: (state)=>{
            state.mode= state.mode==="light" ? "dark" : "light"
            localStorage.setItem('theme', state.mode);
        },
        
    }
})

export const {setUserDetails, toggleTheme}= userSlice.actions

export default userSlice.reducer