
//the resturant list is update from many areas so need to check detaily

const useRestaurantList = () => {

  // useEffect(() => {
  //   fetchApiData();
  // }, []);

  // const fetchApiData = async () => {
  //   const data = await fetch(GET_RESTAURANT);

  //   // console.log(data);
  //   const jsonData = await data.json();

  //   // console.log(jsonData);

  //   // option chaining - if thekey is null or undefined expression will short-circuit and return undefined, without throwing an error.
  //   // console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setRestList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setRestListFilter(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  //   //here unless data is loading we want to show something which help to make user wait for the response so we use shimmer UI

  // }


}

export default useRestaurantList;