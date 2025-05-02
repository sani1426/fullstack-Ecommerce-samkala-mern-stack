import { configureStore } from '@reduxjs/toolkit'
import userDetailReducer from './userSlice'

export const store = configureStore({
  reducer: {
    userDetail : userDetailReducer
  },
})