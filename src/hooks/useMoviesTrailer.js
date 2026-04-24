import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "Utils/constants";
import { addTrailerVideo } from "Utils/moviesSlice";

const useMoviesTrailer = (movieId) => {

  const usedispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      if (!movieId) return;
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+
        movieId
        +"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const results = json?.results || [];
      const filterData = results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      const trailer = filterData.length
        ? filterData[0]
        : results.find((video) => video.site === "YouTube") || null;
  
      usedispatch(addTrailerVideo(trailer));
    };

    getMovieVideos();
  }, [movieId, usedispatch]);

};

export default  useMoviesTrailer;
