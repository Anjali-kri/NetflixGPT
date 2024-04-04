import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className=' bg-black'>
      <div className='-mt-56 pl-12 relative z-20'>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Tranding"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
      </div>

    </div>
  )
}

export default SecondaryContainer