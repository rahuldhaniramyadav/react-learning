import { useParams } from "react-router";
import RestShipperUI from "./RestShipperUI"; // Shimmer UI
import useRestaurantMenu from "../utilis/helper/useRestaurantMenu";

// Here we are fetching the data via API and and display data so we can say here we are doing 2 oprration we need to follow the modularity function (diving the the code in chunks(small logic))

// Now we can create component or custom hooks - 
// component rendering JSX but here we want to load the data and so we can go with custom hooks

const Restaurant = () => {

  // const [menuItems, setMenuItems] = useState(null);

  const {restId} = useParams();

  const menuItems = useRestaurantMenu(restId); //created custom hooks to pass the data

  // console.log(menuItems);debugger;
  if (menuItems === null) { return <RestShipperUI />}

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