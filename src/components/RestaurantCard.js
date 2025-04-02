// import Rahu, {CDN_IMAGE, LOGO_URL} from "../utilis/constant";
import { Link } from "react-router-dom";
import {CDN_IMAGE} from "../utilis/constant";
import { Link } from "react-router-dom";

const RestaurantCard = (pro) => {

  // console.log(pro);
  // console.log(pro.resData);
  // console.log("RAHUL" , pro.resData.info);

  const restId = pro.restId; // fetching the dynamic restaurant ID
  // console.log(restId) //resData

  const { name, cuisines, costForTwo,  avgRating, cloudinaryImageId} = pro.resData.info;

  // const { resData } = ;
  // console.log(resData);
  // console.log(resData.data);
  return (
    <div className="res-card">
      <Link key={restId} to={"/restaurant/" + restId}>
        <img className="res-image" src={CDN_IMAGE+cloudinaryImageId}  alt="resaurant" />
        <h3>{name}</h3>
      </Link>
      <h4>{cuisines.join(', ')}</h4>
      {/* <span>₹{costForTwo / 100} For TWO</span> */}
      <span>{costForTwo}</span>
      <p>{avgRating}</p>
      {/* {LOGO_URL}
      <Rahu /> */}
    </div>
  )
}

export default RestaurantCard;