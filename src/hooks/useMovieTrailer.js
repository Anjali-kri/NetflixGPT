import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DefaultHeaders } from "../Utils/constant";
import { addTrailerVedio } from "../Utils/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVedio = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          DefaultHeaders
        );
        const json = await data.json();
  
        const filterData = json.results.filter((vedio) => vedio.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
  
        dispatch(addTrailerVedio(trailer));
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };
  
  
    useEffect(() => {    
      getMovieVedio();
    }, [dispatch, movieId]);
  
};

export default useMovieTrailer;