import { useEffect } from "react";
import { IMDB_POPULAR_MOVIE_LIST_API, IMDB_OPTIONS } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { popularMovies } from "../../utils/redux/moviesSlice";

const useFetchPopularMovies = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getMoviesdata();
  }, []);

  const getMoviesdata = async () => {
    const data = await fetch(IMDB_POPULAR_MOVIE_LIST_API, IMDB_OPTIONS);
    const json = await data.json();
    dispatch(popularMovies(json.results));
  }
}

export default useFetchPopularMovies;