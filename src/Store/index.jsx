import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Slices/User_Slice";
// combineReducer
const store = configureStore({
    // here we feed our reducer 
reducer:{
    // state
    user:userSlice,
},

})

export default store