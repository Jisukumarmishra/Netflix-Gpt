import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "Utils/constants";
import { addNowPlayingMovies } from "Utils/moviesSlice";

  const useNowPlayingMovies = () => {
    
  // fetch data from tmdb api and put in the our store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  
  const getNowPlayingMovies = async () => {
    const data = await fetch ('https://api.themoviedb.org/3/movie/now_playing',
    API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  // Make an api call inside useEffect because we only want to call at once
  useEffect(()=>{
   if(!nowPlayingMovies) getNowPlayingMovies();
  },[]);
  };

  export default useNowPlayingMovies;