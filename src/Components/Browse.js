import useNowPlayingMovies from 'hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';
import usePopularMovies from 'hooks/usepopularMovies';
import useTopRatedMovies from 'hooks/useTopRatedMovies';

const Browse = () => {

 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryConatainer/>
    </div>
  );
};

export default Browse