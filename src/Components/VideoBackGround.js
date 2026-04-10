import useMoviesTrailer from 'hooks/useMoviesTrailer';
import {  useSelector } from 'react-redux';


const VideoBackGround = ({ movieid }) => {
  const trailervideo = useSelector(store => store.movies?.trailerVideo);

  useMoviesTrailer(movieid);

  return (
    <div className='relative w-screen overflow-hidden bg-black'>
      <iframe
      className='aspect-video w-screen scale-[1.35] md:scale-[1.2] lg:scale-[1.1]'
        src={"https://www.youtube.com/embed/" + trailervideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30'></div>
    </div>
  );
};

export default VideoBackGround;
