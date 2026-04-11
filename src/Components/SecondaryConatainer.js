import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecondaryConatainer = () => {
   const movies = useSelector(store => store.movies);
  return (
  <div className="bg-black">
  <div className="-mt-52 pl-4 md:pl-10 lg:pl-14 relative z-20">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Popular"} movies={movies.popularMovies}/>
        <MoviesList title={"Top Rated"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryConatainer