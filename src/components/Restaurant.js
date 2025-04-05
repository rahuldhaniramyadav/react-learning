import { useParams } from "react-router";
import RestShipperUI from "./RestShipperUI"; // Shimmer UI
import MenuHeading from "../components/MenuHeading"; // it is not working - import MenuHeading from ".MenuHeading"
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

  // console.log(menuItems.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  const categories = (menuItems.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards).filter((cat) => cat.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log(categories)

  return(
    <div className="text-center">
      <h1 className="font-bold">{name}</h1>
      <h2>Cuisines: {cuisines.join(", ")}, {costForTwoMessage}</h2>
      {
        categories.map((cat) => <MenuHeading key={cat.card.card.title} data={cat.card.card} />
      )}
      {/* <h4>avgRating: {avgRating}</h4>
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name + " - Rs." + item.card.info.price}</li>)}
      </ul> */}
    </div>
  );

}

export default Restaurant;