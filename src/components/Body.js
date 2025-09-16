import RestaurantCard from "./RestaurantCard.js";
import { SEARCH_ICON, RESTAURANT_LIST_API } from "../utils/constants.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantsList();
  }, []);

  const getRestaurantsList = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();

    setOriginalListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Apply search
  const applySearch = (currentList) => {
    return currentList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // Apply filter based on the ratings
  const applyRatingsFilter = (currentList) => {
    return currentList.filter((res) => res.info.avgRating >= 4.5);
  };

  // Apply filter based on the delivery time
  const applyDeliveryTimeFiler = (currentList) => {
    return currentList.filter((res) => res.info.sla.deliveryTime < 25);
  };

  // clear the filters
  const clearFilters = () => {
    setSearchText("");
    setFilteredRestaurant(originalListOfRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false ) {
    return (
      <h1>Looks like you're offline. Please check your Internet connection</h1>
    );
  }

  // Conditional Rendering
  return originalListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for restaurant, item or more"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            const newFiltered = applySearch(originalListOfRestaurants);
            setFilteredRestaurant(newFiltered);
          }}
        >
          <img className="search-icon" src={SEARCH_ICON}></img>
        </button>
      </div>
      <div className="filter-container">
        <button className="clear-filter-button" onClick={clearFilters}>
          Clear filter
        </button>
        <button
          className="ratings-filter-button"
          onClick={() => {
            const newFiltered = applyRatingsFilter(filteredRestaurant);
            setFilteredRestaurant(newFiltered);
          }}
        >
          Ratings 4.5+
        </button>
        <button
          className="delivery-time-filter-button"
          onClick={() => {
            const newFiltered = applyDeliveryTimeFiler(filteredRestaurant);
            setFilteredRestaurant(newFiltered);
          }}
        >
          Delivery Time &lt;25 min
        </button>
      </div>
      <div className="res-container-heading">
        Top Restaurants in Chennai
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
