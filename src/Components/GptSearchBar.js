import React, { useRef } from 'react'
import lang from 'Utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { createChatCompletion } from 'Utils/openai'
import { API_OPTIONS } from 'Utils/constants'
import { addgptMoviesResult, setGptLoading } from 'Utils/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  // const selectedLanguage = useSelector((store) => store.gpt?.selectedLanguage || "en");
  // const translatedText = lang[selectedLanguage] || lang.en;
  const searchText = useRef(null);

  // search movies in TMDB
  const searchMoviesTMDB = async (movie) => {
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`, API_OPTIONS
  );

  const json = await data.json()

  return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value?.trim();
    if (!query) return;
    dispatch(setGptLoading(true));
    try {
    const gptQuery =
      'Act as a Movie Recommendation system and suggest some movies for the query: ' +
      query +
      '. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';
    const gptResults = await createChatCompletion([
      {
        role: 'user',
        content: gptQuery,
      },
    ]);

    const gptMovies = gptResults?.choices?.[0]?.message?.content
      ?.split(',')
      .map((movie) => movie.trim())
      .filter(Boolean) || [];
    const promiseArray = gptMovies.map(movie => searchMoviesTMDB(movie));
    // [promis, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addgptMoviesResult({moviesNames: gptMovies, moviesResults:tmdbResults})); // passing an object
    } catch (err) {
      console.error('GPT search error', err);
    } finally {
      dispatch(setGptLoading(false));
    }

  }

 return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'
      onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
        onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;