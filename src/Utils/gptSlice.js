import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:'gpt',
  initialState:{
    showGptSearch: false,
    selectedLanguage: "en",
    gptMovies:null
  },
  reducers: {
    toggleGptSearchView:(state) => {
    state.showGptSearch = !state.showGptSearch;
    },
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    addgptMoviesResult:(state, action) => {
    state.gptMovies = action.payload
    }
  },
});

export const {toggleGptSearchView, changeLanguage, addgptMoviesResult} = gptSlice.actions; // export an action

export default gptSlice.reducer; // export reducer