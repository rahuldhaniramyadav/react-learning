import restrautArr from "../utilis/restaurantdata";
import RestaurantCard from "./RestaurantCard";

const Main = () => {
  return (
    <main>
      <div className="res-container">
        {
          restrautArr.map((restrautItem) => <RestaurantCard key={restrautItem.data.id} resData={restrautItem} />)
        }
        {/* <RestaurantCard resData = {restrautArr[0]} /> */}
      </div>
    </main>
  )
}

export default Main;