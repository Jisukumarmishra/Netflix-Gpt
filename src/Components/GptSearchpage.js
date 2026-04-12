import React from 'react'
import GptMoviesSuggestions from './GptMoviesSuggestions';
import GptSearchBar from './GptSearchBar';

const GptSearchPage = () => {
  return (
    <div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearchPage;