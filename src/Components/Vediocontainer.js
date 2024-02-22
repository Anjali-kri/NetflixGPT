import React, { useEffect } from "react";
import { DefaultHeaders } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../Utils/movieSlice";

const Vediocontainer = ({ movieId }) => {
  const subsTrailerVedio = useSelector(store => store.movie?.trailerVedios);
  // console.log(subsTrailerVedio, "store");
  const dispatch = useDispatch();
  // const[trailerVedio, setTrailerVedio] = useState(null);
  
  const getMovieVedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/933131/videos?language=en-US",
      DefaultHeaders
    );
    const json = await data.json();
    // console.log(json);

    const trailer = json.results.filter((vedio) => vedio.type === "Trailer");
    const trailerVedio = trailer.length ? trailer : json.results[0];
    // console.log(trailerVedio, "trail");
    // setTrailerVedio(trailerVedio[0].key);
    dispatch(addTrailerVedio(trailerVedio));
  };

  useEffect(() => {
    getMovieVedio();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + subsTrailerVedio[0].key}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Vediocontainer;
