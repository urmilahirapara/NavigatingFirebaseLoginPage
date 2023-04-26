import { createSlice } from "@reduxjs/toolkit";
const loginSlice=createSlice({
    name:"login",
    initialState:{
        isLogin:false,
    },  
    reducers:{
        loginStatus:(state)=>{
            state.isLogin=!state.isLogin;
        },
        
    },
})
export const {loginStatus}=loginSlice.actions;
export default loginSlice.reducer;