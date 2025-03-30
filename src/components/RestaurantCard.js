// import Rahu, {CDN_IMAGE, LOGO_URL} from "../utilis/constant";
import {CDN_IMAGE} from "../utilis/constant";

const RestaurantCard = (pro) => {

  // console.log(pro);
  // console.log(pro.resData);
  // console.log(pro.resData.data);

  const { name, cuisines, costForTwo,  avgRating, cloudinaryImageId} = pro.resData.data;

  // const { resData } = ;
  // console.log(resData);
  // console.log(resData.data);
  return (
    <div className="res-card">
      <img className="res-image" src={CDN_IMAGE+cloudinaryImageId}  alt="resaurant" />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <span>₹{costForTwo / 100} For TWO</span>
      <p>{avgRating}</p>
      {/* {LOGO_URL}
      <Rahu /> */}
    </div>
  )
}

export default RestaurantCard;