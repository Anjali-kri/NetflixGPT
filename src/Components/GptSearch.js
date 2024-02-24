import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggession from './GptMovieSuggession'
import { BG_URL } from '../Utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="background_img"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggession />
    </div>
  )
}

export default GptSearch