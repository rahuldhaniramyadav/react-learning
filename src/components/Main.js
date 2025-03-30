import { useState } from "react";
import restrautArr from "../utilis/restaurantdata";
import RestaurantCard from "./RestaurantCard";

const Main = () => {

  // local state variable - super powerful variable
  const [restList, setRestList] = useState(restrautArr);

  // const restArray = useState(restrautArr);
  // const [restList, setRestList] = restArray;
  // const restList  =  restArray[0];
  // const setRestList  =  restArray[1];

  const filterFun = () => {
    const result  = restList.filter((rest) => {
      return rest.data.avgRating > 3;
    })
    setRestList(result);
  }

  return (
    <main>
      <button  onClick={() => {
        const result  = restList.filter((rest) => {
        return rest.data.avgRating > 4;
      })
      setRestList(result);
      }}>Filter </button>
      <button onClick={filterFun}>Filter with create function name</button>
      <div className="res-container">
        {
          // restrautArr.map((restrautItem) => <RestaurantCard key={restrautItem.data.id} resData={restrautItem} />)
          restList.map((restrautItem) => <RestaurantCard key={restrautItem.data.id} resData={restrautItem} />)
        }
        {/* <RestaurantCard resData = {restrautArr[0]} /> */}
      </div>
    </main>
  )
}

export default Main;