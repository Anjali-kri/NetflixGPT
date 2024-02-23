import { useDispatch } from "react-redux";
import {addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { DefaultHeaders } from "../Utils/constant";


const usePopularMovies = () => {
    const dispatch = useDispatch();

  const getPopularMovie = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", DefaultHeaders);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    // console.log(json);
  };
  // console.log(getNOwPlayMovie);

  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default usePopularMovies;