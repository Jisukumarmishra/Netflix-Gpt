import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {
  // fetch the mpovies form store
  const movies = useSelector(store =>store.movies?.nowPlayingMovies);
  // if(movies === null) return ; or
  if(!movies) return;
  const mainmovies = movies[0];
  return (
    <div>
    <VideoTitle/>
    <VideoBackGround/>
    </div>
    
  )
}

export default MainContainer