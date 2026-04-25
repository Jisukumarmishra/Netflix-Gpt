import React, { useRef } from 'react'
import lang from 'Utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  // const selectedLanguage = useSelector((store) => store.gpt?.selectedLanguage || "en");
  // const translatedText = lang[selectedLanguage] || lang.en;
  const searchText = useRef(null);

  const handleGptSearchClick = () => {
  
  }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'
      onSubmit={(e) => e.preventDefault}
      >
        <input
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

export default GptSearchBar