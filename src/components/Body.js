import RestaurantCard from "./RestaurantCard.js";
import { SEARCH_ICON, RESTAURANT_LIST_API } from "../utils/constants.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    // doing optional chaining to handle run time errors and null values
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

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
