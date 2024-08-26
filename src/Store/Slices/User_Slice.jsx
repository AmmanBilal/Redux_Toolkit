// getting createsclice
import { createSlice } from '@reduxjs/toolkit';
import { ClearUsers_Import } from '../Actions';
const userSlice =createSlice({
    name:"user",
    initialState: [],
    reducers:{
        addUser(state,action){

            state.push(action.payload)
         },
        removeUser(state,action){
            state.splice(action.payload,1)
        },

        // ClearUsers(state,action){
        //     return []
        //     // console.log("hi delete")
        // },
// depend on CLearUser mention above^

        // extraReducers(builder){
        //     builder.addCase(userSlice.actions.ClearUsers,()=>{
        //         return []
        //     })

// independent action for extraReducers        // 
        extraReducers: (builder)=>{
                builder.addCase(ClearUsers_Import,()=>{
                    console.log('ClearUsers action triggered');
                    return []
                })


        }
    }
})


// console.log(userSlice.actions) 
// userSlice.actions    this is our action creators


export default userSlice.reducer

export const {addUser,removeUser} = userSlice.actions