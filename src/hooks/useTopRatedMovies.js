import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "Utils/constants";
import { addTopRatedMovies } from "Utils/moviesSlice";

const useTopRatedMovies = () => {
    
  // fetch data from tmdb api and put in the our store
  const dispatch = useDispatch();
  
  const getTopRatedMovies = async () => {
    const data = await fetch ('https://api.themoviedb.org/3/movie/top_rated',
    API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  // Make an api call inside useEffect because we only want to call at once
  useEffect(()=>{
  getTopRatedMovies();
  },[]);
  };

  export default useTopRatedMovies;