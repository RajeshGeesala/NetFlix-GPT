import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { language } from '../assets/languageConst'
import openAi from '../utils/openAi';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null)
  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    // making api call to get api results 
    const gptQuery = "Acts as a movie Recommedation system and suggest movies for the query "
      + searchText.current.value
      + "only give me 5 movies , comma separated like the example result given ahead. Example Result : Gadar , Sholay , Don , Golmaal , Koi Mil Gaya "
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices)
  }
  return (
    <div className='pt-[9%] flex justify-center'>
      <form className='bg-black  w-1/2 grid grid-cols-12 '
        onSubmit={(e) => { e.preventDefault() }}>
        <input type="search"
          name=""
          id=""
          ref={searchText}
          className='p-2 m-4  col-span-9'
          placeholder={language[langKey].gptSearchPlaceHolder} />
        <button className='col-span-3 m-4 bg-red-700 text-white py-2 px-4 rounded-lg '
          onClick={handleGptSearch} >
          {language[langKey].search} </button>
      </form>
    </div>
  )
}

export default GptSearchBar