import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:'gpt',
  initialState:{
    showGptSearch: false,
    selectedLanguage: "en"
  },
  reducers: {
    toggleGptSearchView:(state) => {
    state.showGptSearch = !state.showGptSearch;
    },
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    }
  },
});

export const {toggleGptSearchView, changeLanguage} = gptSlice.actions; // export an action

export default gptSlice.reducer; // export reducer