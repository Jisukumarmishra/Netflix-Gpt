import useNowPlayingMovies from 'hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryConatainer from './SecondaryConatainer';
import usePopularMovies from 'hooks/usepopularMovies';

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryConatainer/>
    </div>
  );
};

export default Browse