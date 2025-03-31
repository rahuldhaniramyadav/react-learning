import { useState, useEffect } from "react";
import { MENU_URL } from "../utilis/constant";
import { useParams } from "react-router";
import RestShipperUI from "./RestShipperUI"; // Shimmer UI

const Restaurant = () => {

  const [menuItems, setMenuItems] = useState(null);

  const {restId} = useParams();

  // it will rendered the coponent on initial load only
  useEffect(() => {
    fetchMenuItem();
  }, []);

  const fetchMenuItem = async () => {
    try {
      const response = await fetch(MENU_URL + restId);
      if(!response.ok) {
        throw new Error("API Failed!!!");
      }
      const data = await response.json();
      if (data?.statusMessage) {
        throw new Error("NO DATA Found!!!");
      }
      // console.log(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.
      //   card.card.itemCards);
      setMenuItems(data);
    } catch(err) {
      console.log(err);
      // alert(err);
    }
  }

  // console.log(menuItems);
  if (menuItems === null) { return <RestShipperUI />}

  // console.log(menuItems);
  const {name, cuisines, costForTwoMessage, avgRating} = menuItems.data?.cards[2]?.card.card.info;
  const {itemCards} = menuItems.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return(
    <div>
      <h1>Name: {name}</h1>
      <h2>Cuisines: {cuisines.join(", ")}</h2>
      <h3>Cost For Two: {costForTwoMessage}</h3>
      <h4>avgRating: {avgRating}</h4>
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name + " - Rs." + item.card.info.price}</li>)}
      </ul>
    </div>
  );

}

export default Restaurant;