import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';
import MoviesCardShimmer from './MoviesCardShimmer'

const GptMoviesSuggestions = () => {
  const {moviesNames, moviesResults, isLoading} = useSelector((Store) => Store.gpt);
  if(!moviesNames && !isLoading) return null;
  return (
    <div className='p-10 m-4 bg-black bg-opacity-70'>
     <div>
      {isLoading ? (
        // show skeletons while loading
        <div>
          <h2 className="text-lg md:text-3xl py-5 md:py-6 text-white">Searching...</h2>
          <div className="flex overflow-x-scroll">
            <div className="flex">
              {Array.from({length:5}).map((_,i) => <MoviesCardShimmer key={i} />)}
            </div>
          </div>
        </div>
      ) : (
        moviesNames.map((moviesNames , index) => (
          <MoviesList key={moviesNames + index}
           title={moviesNames} 
           movies={moviesResults[index]}
           />
          ))
      )}
     </div>
    </div>
  )
}

export default GptMoviesSuggestions