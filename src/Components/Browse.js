import React, { useEffect } from 'react'
import Header from './Header'
import { DefaultHeaders } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/movieSlice'

const Browse = () => {

  const dispatch = useDispatch();

  const getNOwPlayMovie = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", DefaultHeaders);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
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