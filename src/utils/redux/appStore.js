import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfoSlice";
import moviesSliceReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userInfoReducer,
    movies: moviesSliceReducer
  }
})

export default appStore;