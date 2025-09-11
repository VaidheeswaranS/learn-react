import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { SEARCH_ICON } from "../utils/constants.js";

const Body = () => {
  return (
    <div className="main">
      <div className="search-container">
        <input className="search-bar" type="text" placeholder="Search for restaurant, item or more"></input>
        <button className="search-button">
          <img className="search-icon" src={SEARCH_ICON}></img>
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body ;