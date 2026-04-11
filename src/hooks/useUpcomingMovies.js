import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "Utils/constants";
import { addUpcomingMovies } from "Utils/moviesSlice";

const useUpcomingMovies = () => {
    
  // fetch data from tmdb api and put in the our store
  const dispatch = useDispatch();
  
  const getUpcomingmovies = async () => {
    const data = await fetch ('https://api.themoviedb.org/3/movie/upcoming',
    API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  // Make an api call inside useEffect because we only want to call at once
  useEffect(()=>{
  getUpcomingmovies();
  },[]);
  };

  export default useUpcomingMovies ;