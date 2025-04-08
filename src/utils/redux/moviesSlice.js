import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    initialRender: null,
    mainMovie: null
  },
  reducers: {
    addMovies: (state, action) => {
      state.initialRender = action.payload;
    },
    addMainMovie: (state, action) => {
      state.mainMovie = action.payload;
    }
  }
})

export const {addMovies, addMainMovie} = moviesSlice.actions;

export default moviesSlice.reducer;