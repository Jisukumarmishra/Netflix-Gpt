const { createSlice } = require("@reduxjs/toolkit");

const movieeSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    trailerVideo:null
  },
  reducers:{
    addNowPlayingMovies:(state, action) =>{
    state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo : (state, action) => {
    state.trailerVideo = action.payload;
    }
  }
});

export const { addNowPlayingMovies, addTrailerVideo } = movieeSlice.actions;

export default movieeSlice.reducer;