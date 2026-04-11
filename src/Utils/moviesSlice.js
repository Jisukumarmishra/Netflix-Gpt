const { createSlice } = require("@reduxjs/toolkit");

const movieeSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    popularMovies:null,
    trailerVideo:null
  },
  reducers:{
    addNowPlayingMovies:(state, action) =>{
    state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state, action) =>{
    state.popularMovies = action.payload;
    },
    addTrailerVideo : (state, action) => {
    state.trailerVideo = action.payload;
    }
  }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = movieeSlice.actions;

export default movieeSlice.reducer;