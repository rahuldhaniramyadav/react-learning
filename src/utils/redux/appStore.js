import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfoSlice";
import moviesSliceReducer from "./moviesSlice";
import GptSearchReducer from "./GptSlice";
import langReducer from "./langSlice";

const appStore = configureStore({
  reducer: {
    user: userInfoReducer,
    movies: moviesSliceReducer,
    isGpt: GptSearchReducer,
    lang: langReducer
  }
})

export default appStore;