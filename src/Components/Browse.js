import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import Vediocontainer from './Vediocontainer';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <Vediocontainer />
      {/* <secondaryContainer /> */}
      {/* mainContainer
          - vedioBackground
          - vedopTitle
          secondary
          - MovieList * n
            - cards*n
       */}
    </div>
  )
}

export default Browse