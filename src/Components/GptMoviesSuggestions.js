import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const GptMoviesSuggestions = () => {
  const {moviesNames, moviesResults} = useSelector((Store) => Store.gpt); 
  if(!moviesNames) return null;
  return (
    <div className='p-10 m-4 bg-black text-green-400'>
     <div>
      {moviesNames.map((moviesNames , index) => (
        <MoviesList key="moviesNames"
         title={moviesNames} 
         movies={moviesResults[index]}
         />
        ))}
     </div>
    </div>
  )
}

export default GptMoviesSuggestions