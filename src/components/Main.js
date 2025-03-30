import { useEffect, useState } from "react";
import restrautArr from "../utilis/restaurantdata"; // this not need as we are fetching the real time api data
import RestaurantCard from "./RestaurantCard";
import RestShipperUI from "./RestShipperUI";

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

  // call the api with default promise of fetch
  // const fetchApiData = () => {
  //   fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Not able to fetched");
  //     }
  //     return response.json();
  //   }).then((data) => {
  //     console.log(data);
  //     // option chaining it is like isset of array in php for understanding not fully but we can understand it
  //     // console.log(data?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  //     setRestList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   }).catch((error) => {
  //     console.log("There is sone error", error);
  //     // the error due CORS policy
  //     //There is sone error TypeError: Failed to fetch at fetchApiData (Main.js:22:5) at eval (Main.js:17:5)

  //   })
  // };

  const fetchApiData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    // enabled the CORS via chrome extension to fetch the data, else it was giving the below error 
    // Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

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
  return restList.length === 0 ? <RestShipperUI /> : (
    <main>
      <div className="searchWrapper">
        {/* <input type="text" className="search-bar1" value={searchFilter} onChange={(e) => {setSearchFilter(e.target.value); }} /> */}
        <input type="search" className="search-bar" value={searchFilter} onChange={(e) => {setSearchFilter(e.target.value); }} />
        <button className="filter-search-btn" onClick={() => {
          const filterData = restList.filter((res) => {
            return res.info.name.toLowerCase().includes(searchFilter.toLowerCase());
          });
          if (filterData.length === 0) {
            return <NotFound />
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
          restListFilte.map((restrautItem) => <RestaurantCard key={restrautItem.info.id} resData={restrautItem} />)
        }
      </div>
    </main>
  )
}

export default Main;