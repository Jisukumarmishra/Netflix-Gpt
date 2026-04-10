import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "Utils/constants";
import { addTrailerVideo } from "Utils/moviesSlice";

const useMoviesTrailer = () => {

  const usedispatch = useDispatch();

  // fetch Trailer Video and updating The Store With Trailer Video data 
  
  const getMovieVideos = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/1327819/videos?language=en-US',
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    usedispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

};

export default  useMoviesTrailer;
