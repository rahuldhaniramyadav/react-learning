import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    initialRender: null,
    popularMovies: null,
    mainMovie: null
  },
  reducers: {
    addMovies: (state, action) => {
      state.initialRender = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMainMovie: (state, action) => {
      state.mainMovie = action.payload;
    }
  }
})

export const {addMovies, addMainMovie, popularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;