import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstances from "../../utils/axiosInstances";


export const authcheck=createAsyncThunk("/auth/checkAuth", async (_, thunkAPI) => {
  try {
    const res = await axiosInstances.get("/findme");
    // console.log(res)
    return res.data.authenticated; // true or false
  } catch (error) {
    console.log("Auth check failed:", error.response?.status); // debug
    return thunkAPI.rejectWithValue(false); // goes to rejected case
  }
});

export const logout=createAsyncThunk("/auth/logout",async () => {
    const res=await axiosInstances.post("/logout")
    console.log(res)
    return false
})

const authSlice=createSlice({
    name:"auth",
    initialState:{isLoggedIn:false},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(authcheck.fulfilled,(state,action)=>{
          console.log("every render")
          console.log(action)
            state.isLoggedIn=action.payload
        })
        .addCase(authcheck.rejected,(state)=>{
            state.isLoggedIn=false
        })
        .addCase(logout.fulfilled,(state)=>{
          console.log("logout success")
            state.isLoggedIn=false
        })
        .addCase(logout.rejected,()=>{
          console.log("logout regected")
        })
    }

})

export default authSlice.reducer