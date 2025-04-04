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
    <div className="res-card m-4 p-4 shadow w-[270px] bg-gray-50 hover:bg-gray-300">
      <Link key={restId} to={"/restaurant/" + restId} className="mb-4">
        <img className="res-image" src={CDN_IMAGE+cloudinaryImageId}  alt="resaurant" />
        <h2>{name}</h2>
      </Link>
      <h4 className="p-1 m-1">{cuisines.join(', ')}</h4>
      {/* <span>₹{costForTwo / 100} For TWO</span> */}
      <span className="p-1 m-1">{costForTwo}</span>
      <p className="p-1 m-1">{avgRating}</p>
      {/* {LOGO_URL}
      <Rahu /> */}
    </div>
  )
}

export const RestaurantCardWithPromoted = (RestaurantCard) => {
  return (props) => {
    console.log(props);
    return (
      <div className="relative">
        <label className="p-2 m-2 absolute border-2 left-4 bg-black text-white">{`${props.resData.info?.aggregatedDiscountInfoV3.header} and ${props.resData.info?.aggregatedDiscountInfoV3.subHeader}`}</label>
        <RestaurantCard {...props} />
      </div>
      // <RestaurantCardWithPromoted key={restrautItem.info.id} resData={restrautItem} restId={restrautItem.info.id} />
    );
  };
};

export default RestaurantCard;