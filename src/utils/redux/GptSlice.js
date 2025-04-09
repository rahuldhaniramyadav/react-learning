import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    enableGptPage: false
  },
  reducers: {
    setEnableGptPage: (state) => {
      state.enableGptPage = !state.enableGptPage;
    }
  }
})

export const {setEnableGptPage} = GptSlice.actions;

export default GptSlice.reducer;