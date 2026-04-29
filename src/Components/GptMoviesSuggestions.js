import React from 'react'
import { useSelector } from 'react-redux'

const GptMoviesSuggestions = () => {
  const gpt = useSelector(Store => Store.gpt); 
  return (
    <div>GptMoviesSuggestions</div>
  )
}

export default GptMoviesSuggestions