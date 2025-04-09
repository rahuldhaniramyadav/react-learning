import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({image, name}) => {
  return (
    <div className="w-52 mx-2">
      <img src={IMG_CDN_URL+image} alt={name} />
    </div>
  )
}

export default MovieCard;