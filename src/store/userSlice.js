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
        toggleTheme: (state)=>{
            state.mode= state.mode==="light" ? "dark" : "light"
            localStorage.setItem('theme', state.mode);
        },
        // setTheme: (state, action) => {
        //     state.mode = action.payload;
        //     localStorage.setItem('theme', state.mode);
        // }
    }
})

export const {setUserDetails, toggleTheme}= userSlice.actions

export default userSlice.reducer