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
    selectedPronoun: "nil"
}

export const userSlice= createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        toggleTheme: (state)=>{
            state.mode= state.mode==="light" ? "dark" : "light"
            localStorage.setItem('theme', state.mode);
        },
        setPronoun: (state, action)=>{
            state.selectedPronoun= action.payload
        },
        setUserDetailsReducers: (state, action)=>{
            state.fName= action.payload.fName
            state.lName= action.payload.lName
            state.bio= action.payload.bio
            state.industry= action.payload.industry
            state.school= action.payload.school
        }
        
    }
})

export const { toggleTheme, setPronoun, setUserDetailsReducers }= userSlice.actions

export default userSlice.reducer