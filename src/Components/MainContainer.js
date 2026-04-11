import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {
  // fetch the mpovies form store
  const movies = useSelector(store =>store.movies?.nowPlayingMovies);
  // if(movies === null) return ; or
  if (!movies || movies.length === 0) return null;
  const mainmovies = movies[1];
 
  
  // from main movies we abstracted these two thinga
  const {original_title, overview, id} = mainmovies;

  return (
    <div>
    <VideoTitle title ={original_title} overview={overview}/>
    <VideoBackGround movieid={id}/>
    </div>
    
  )
}

export default MainContainer