import { useEffect, useState } from "react";
import { MENU_URL } from "../constant";

const useRestaurantMenu = (restId) => {

  const [menuItems, setMenuItems] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // });

  // const fetchData = async () => {
  //   const data = await fetch(MENU_URL + restId);
  //   const json = await data.json();

  //   console.log(json);
  //   setMenuItems(menuItems);
  // }

  console.log("useRestaurantMenu ");

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
    console.log(menuItems);
  }
  return menuItems;
}

export default useRestaurantMenu;