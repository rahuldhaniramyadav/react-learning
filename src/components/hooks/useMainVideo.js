import { useEffect } from "react";
import { IMDB_OPTIONS } from "../../utils/constant";
import { addMainMovie } from "../../utils/redux/moviesSlice";
import { useDispatch } from "react-redux";

const useMainVideo = (id) => {

  const dispatch = useDispatch();

  console.log(id);

  useEffect(() => {

    const fetchMainVideo = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US", IMDB_OPTIONS);
      const json = await data.json();

      const trailer = json.results.filter(trailer => {
        return trailer.type === "Trailer"
      })
      const mainTrailer = (trailer) ? trailer[0] : json.results[0];
      dispatch(addMainMovie(mainTrailer));
    }
    fetchMainVideo();
  }, [])

}

export default useMainVideo;