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
  console.log(mainmovies);
  
  // from main movies we abstracted these two thinga
  const {original_title, overview} = mainmovies;

  return (
    <div>
    <VideoTitle title ={original_title} overview={overview}/>
    <VideoBackGround/>
    </div>
    
  )
}

export default MainContainer