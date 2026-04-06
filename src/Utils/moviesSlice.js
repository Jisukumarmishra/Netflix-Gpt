const { createSlice } = require("@reduxjs/toolkit");

const movieeSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
  },
  reducers:{
    addNowPlayingMovies:(state, action) =>{
    state.nowPlayingMovies = action.payload;
    }
  }
});

export const { addNowPlayingMovies } = movieeSlice.actions;

export default movieeSlice.reducer;