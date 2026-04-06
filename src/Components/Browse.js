import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS } from 'Utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from 'Utils/moviesSlice';

const Browse = () => {

  return (
    <div>
      <Header showUserActions={true}/>
    </div>
  );
};

export default Browse