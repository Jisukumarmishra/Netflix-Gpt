import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "Utils/constants";
import { addPopularMovies } from "Utils/moviesSlice";

const usePopularMovies = () => {
    
  // fetch data from tmdb api and put in the our store
  const dispatch = useDispatch();
  
  const getPopularMovies = async () => {
    const data = await fetch ('https://api.themoviedb.org/3/movie/popular',
    API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  // Make an api call inside useEffect because we only want to call at once
  useEffect(()=>{
  getPopularMovies();
  },[]);
  };

  export default usePopularMovies;