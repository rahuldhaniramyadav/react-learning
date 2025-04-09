import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import UserProfileTest from "./UserProfileTest";
import NoRender from "./NoRender";

const SecondaryComponent = () => {

  const movies =  useSelector(stat => stat.movies);
  
  return( movies &&
    <div className="bg-black">
      <div className="-mt-56 relative z-40">
        <MovieList title={"Now Playing"} movies={movies?.initialRender} />
        <MovieList title={"Upcoming Movies"} movies={movies?.initialRender} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
      </div>
      {/* <UserProfileTest /> */}
      {/* <NoRender /> */}
    </div>
  )
}

export default SecondaryComponent;