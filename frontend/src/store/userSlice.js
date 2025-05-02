import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetail : null
}

export const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    setUserDetails : (state , action)=> {
        state.userDetail = action.payload
            console.log("user details" ,action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = userDetailSlice.actions

export default userDetailSlice.reducer