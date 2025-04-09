import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import useFetchMovies from "./hooks/useFetchMovies";
import useFetchPopularMovies from "./hooks/useFetchPopularMovies";
import VideoTitle from "./VideoTitle";

const MainData = () => {

  useFetchMovies();
  useFetchPopularMovies();

  const movies = useSelector(state => state.movies?.initialRender);

  if (!movies) return;

  const {original_title, overview, id} = movies[0];

  return(
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo id={id} />
    </div>

  )
}

export default MainData;