import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
  if (!movies) return;
  return(
    <div className="p-6">
      <h1 className="text-2xl text-white px-2 py-2">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {
              movies.map(movie => <MovieCard key={movie?.id} image={movie?.poster_path} name={movie?.original_title} />)
            }
          </div>
        </div>
    </div>
  );
}

export default MovieList;