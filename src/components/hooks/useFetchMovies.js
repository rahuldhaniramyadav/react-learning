import { useEffect } from "react";
import { IMDB_MOVIE_LIST_API, IMDB_OPTIONS } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addMovies } from "../../utils/redux/moviesSlice";

const useFetchMovies = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getMoviesdata();
  }, []);

  const getMoviesdata = async () => {
    const data = await fetch(IMDB_MOVIE_LIST_API, IMDB_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addMovies(json.results));
  }
}

export default useFetchMovies;