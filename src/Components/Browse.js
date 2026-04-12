import useNowPlayingMovies from 'hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';
import usePopularMovies from 'hooks/usepopularMovies';
import useTopRatedMovies from 'hooks/useTopRatedMovies';
import useUpcomingMovies from 'hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
 
  return (
    <div>
      <Header/>
      {
        showGptSearch ? (
          <GptSearch/>
        ):(
        <>
        <MainContainer/>
        <SecondaryConatainer/>
        </>
        )
      }
    </div>
  );
};

export default Browse