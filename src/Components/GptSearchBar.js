import React, { useRef } from 'react'
import openai from "../Utils/openai"
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async () => {
      console.log(searchText.current.value);

      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gader, Don, Dilwale, Golmar Returns, Koi mil gya";

      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });  
      console.log(gptResult, "result");    
    };

  return (
    <div className='p-[10%]'>
        <form className=' bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input 
            ref={searchText}
            type='text' 
            className='p-4 m-4 col-span-9' 
            placeholder={lang[langKey].gptSearchPlaceHolder} 
            />
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
            onClick={handleGptSearchClick}
            // type='button'
            >
              {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar