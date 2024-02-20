import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { DefaultHeaders } from "../Utils/constant";


const useNowPlayingMovies = () => {
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
  }, []);
};

export default useNowPlayingMovies;