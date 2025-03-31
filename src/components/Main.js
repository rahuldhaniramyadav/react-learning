import { useEffect, useState } from "react";
import restrautArr from "../utilis/restaurantdata"; // this not need as we are fetching the real time api data
import RestaurantCard from "./RestaurantCard";
import RestShipperUI from "./RestShipperUI"; // Shimmer UI
import {GET_RESTAURANT} from "../utilis/constant";

const Main = () => {

  const [restList, setRestList] = useState([]);
  const [restListFilte, setRestListFilter] = useState([]);

  const [searchFilter, setSearchFilter] = useState("");

  const filterFun = () => {
    const result  = restList.filter((rest) => {
      return rest.info.avgRating === 4.5;
    })
    setRestListFilter(result);
  }

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(GET_RESTAURANT);

    // console.log(data);
    const jsonData = await data.json();

    // console.log(jsonData);

    // option chaining - if thekey is null or undefined expression will short-circuit and return undefined, without throwing an error.
    // console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestListFilter(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //here unless data is loading we want to show something which help to make user wait for the response so we use shimmer UI

  }

  //Condition Rendering
  return restListFilte.length === 0 ? <RestShipperUI /> : (
    <main>
      <div className="searchWrapper">
        {/* <input type="text" className="search-bar1" value={searchFilter} onChange={(e) => {setSearchFilter(e.target.value); }} /> */}
        <input type="search" className="search-bar" value={searchFilter} onChange={(e) => {setSearchFilter(e.target.value); }} />
        <button className="filter-search-btn" onClick={() => {
          const filterData = restList.filter((res) => {
            return res.info.name.toLowerCase().includes(searchFilter.toLowerCase());
          });
          if (filterData.length === 0) {
            // return <NotFound />
          }
          setRestListFilter(filterData);
        }}>Filter Data</button>
      </div>
      <button className="filter-btn" onClick={() => {
        const result  = restList.filter((rest) => {
        return rest.info.avgRating > 4.2;
      })
      setRestListFilter(result);
      }}>Filter </button>
      <button className="filter-btn" onClick={filterFun}>Filter with create function name</button>
      <div className="res-container">
        {
          // restList.map((restrautItem) => <RestaurantCard key={restrautItem.data.id} resData={restrautItem} />)
          restListFilte.map((restrautItem) => <RestaurantCard key={restrautItem.info.id} resData={restrautItem} restId={restrautItem.info.id} />)
        }
      </div>
    </main>
  )
}

export default Main;