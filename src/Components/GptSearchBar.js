import React, { useRef } from 'react'
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const handleGptSearchClick = () => {
      console.log(searchText.current.value);
    }
  return (
    <div className='p-[10%]'>
        <form className=' bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault}>
            <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
            onClick={handleGptSearchClick}
            >
              {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar