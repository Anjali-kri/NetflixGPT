// import React, { useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { DefaultHeaders } from '../Utils/constant';
// import { addTrailerVedio } from '../Utils/movieSlice';

// const VedioBackground = ({movieId}) => {
//   console.log(movieId, "moviid");
//   const subsTrailerVedio = useSelector(store => store.movie?.trailerVedios);
//   console.log(subsTrailerVedio, "store");
//   const dispatch = useDispatch();
//   // const[trailerVedio, setTrailerVedio] = useState(null);
  
//   const getMovieVedio = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
//       DefaultHeaders
//     );
//     const json = await data.json();
//     console.log(json);

//     const filterData = json.results.filter((vedio) => vedio.type === "Trailer");
//     const trailer = filterData.length ? filterData[0] : json.results[0];
//     console.log(trailer, "trail");
//     // setTrailerVedio(trailer.key);
//     dispatch(addTrailerVedio(trailer));
//   };

//   useEffect(() => {
//     getMovieVedio();
//   }, []);
//   return (
//     <div>
//     <iframe
//       width="560"
//       height="315"
//       src={"https://www.youtube.com/embed/"+subsTrailerVedio?.key}
//       title="YouTube video player"
//       frameborder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       allowfullscreen
//     ></iframe>
//   </div>
//   )
// };

// export default VedioBackground;




import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VedioBackground = ({ movieId }) => {
  const subsTrailerVedio = useSelector(store => store.movie?.trailerVedios);
 
  useMovieTrailer(movieId);
  // Conditionally render the iframe when subsTrailerVedio is not null
  return subsTrailerVedio ? (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + subsTrailerVedio.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : null;
};

export default VedioBackground;
