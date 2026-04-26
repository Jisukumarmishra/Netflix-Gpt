import React, { useRef } from 'react'
import lang from 'Utils/languageConstants'
import { useSelector } from 'react-redux'
import { createChatCompletion } from 'Utils/openai'

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  // const selectedLanguage = useSelector((store) => store.gpt?.selectedLanguage || "en");
  // const translatedText = lang[selectedLanguage] || lang.en;
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value?.trim();
    if (!query) return;

    const prompt = `Act as a movie recommendation system. Suggest 5 movies for: ${query}. Return only comma-separated movie names.`;

    try {
      const result = await createChatCompletion([
        { role: 'user', content: prompt }
      ]);

      console.log(result?.choices?.[0]?.message?.content || 'No response');
    } catch (error) {
      console.error('API Call Failed:', error);
      alert(error.message || 'Failed to fetch from API');
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

export default GptSearchBar