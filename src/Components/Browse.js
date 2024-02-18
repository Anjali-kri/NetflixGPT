import React, { useEffect } from 'react'
import Header from './Header'
import { DefaultHeaders } from '../Utils/constant'

const Browse = () => {

  const getNOwPlayMovie = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", DefaultHeaders);
    const abc = await data.json();
    // console.log(json);
  };
  // console.log(getNOwPlayMovie);

  useEffect(() => {
    getNOwPlayMovie();
  }, [])
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse