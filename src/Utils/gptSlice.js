import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:'gpt',
  initialState:{
    showGptSearch: false,
    selectedLanguage: "en",
    moviesNames:null,
    moviesResults:null,
    isLoading: false,
  },
  reducers: {
    toggleGptSearchView:(state) => {
    state.showGptSearch = !state.showGptSearch;
    },
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },

    addgptMoviesResult:(state, action) => {
      const {moviesNames, moviesResults} = action.payload
    state.moviesNames = moviesNames;
    state.moviesResults = moviesResults;
    }
    ,
    clearGptMoviesResult: (state) => {
      state.moviesNames = null;
      state.moviesResults = null;
    },
    setGptLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  },
});

export const {toggleGptSearchView, changeLanguage, addgptMoviesResult, clearGptMoviesResult, setGptLoading} = gptSlice.actions; // export an action

export default gptSlice.reducer; // export reducer