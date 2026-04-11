import React from 'react'
import { IMG_CDN_URL } from 'Utils/constants'
const MoviesCard = ({posterpath}) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt='Movies Card' src={IMG_CDN_URL+posterpath}/>
    </div>
  )
}

export default MoviesCard