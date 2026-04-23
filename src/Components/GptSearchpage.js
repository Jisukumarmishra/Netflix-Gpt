import React from 'react'
import GptMoviesSuggestions from './GptMoviesSuggestions';
import GptSearchBar from './GptSearchBar';
import { MAIN_PAGE } from 'Utils/constants';

const GptSearchPage = () => {
  return (
    <div>
       <div className='absolute inset-0 -z-10'>
            <img  src = {MAIN_PAGE}
            alt = "text"
            className='h-full w-full object-cover'/>
          </div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearchPage;