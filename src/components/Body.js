import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { SEARCH_ICON } from "../utils/constants.js";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="main">
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for restaurant, item or more"
        ></input>
        <button className="search-button">
          <img className="search-icon" src={SEARCH_ICON}></img>
        </button>
      </div>
      <div className="filter-container">
        <button
          className="clear-filter-button"
          onClick={() => {
            const clearFilteredList = resList
            setListOfRestaurants(clearFilteredList);
          }}
        >
          Clear filter
        </button>
        <button
          className="ratings-filter-button"
          onClick={() => {
            const ratingsFilteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(ratingsFilteredList);
          }}
        >
          Ratings 4.5+
        </button>
        <button
          className="delivery-time-filter-button"
          onClick={() => {
            const delTimeFilteredList = listOfRestaurants.filter(
              (res) => res.info.sla.deliveryTime < 25
            );
            setListOfRestaurants(delTimeFilteredList);
          }}
        >
          Delivery Time
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
