import { createSlice } from "@reduxjs/toolkit";

const initialValue= {
    mode: "light",
    fName: "Joydeep",
    lName: "Paul"
}

export const userSlice= createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        setUserDetails: (state, action)=>{
            state.fName=action.payload?.fName,
            state.lName= action.payload?.lName
        },
        toggleTheme: (state, action)=>{
            state.mode= state.mode==="light" ? "dark" : "light"
        }
    }
})

export const {setUserDetails, toggleTheme}= userSlice.actions

export default userSlice.reducer