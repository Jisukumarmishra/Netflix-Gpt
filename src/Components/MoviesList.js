import React from 'react'
import { useSelector } from 'react-redux'

const MoviesList = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div>
    <MoviesList title ={"now playing"} movies ={movies.nowPlaying}/>
    </div>
  )
}

export default MoviesList