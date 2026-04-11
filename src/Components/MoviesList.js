import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({title, movies}) => {
 if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 text-white">
      <h1 className="text-lg md:text-3xl py-5 md:py-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map(movie => <MoviesCard key={movie.id} posterpath={movie.poster_path}/>)}
        </div>
      </div>
    </div>
  );
}

export default MoviesList