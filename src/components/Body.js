import RestaurantCard from "./RestaurantCard.js";
import { RESTAURANT_LIST_API } from "../utils/constants.js";
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
    return currentList.filter((res) => res.info.sla.deliveryTime < 30);
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
      <div className="flex items-center justify-center my-15 mx-auto w-full">
        <input
          className="w-86 px-4 py-2 text-sm box-border rounded-l-lg bg-white shadow-2xl border border-gray-600 border-r-0 text-black"
          type="search"
          placeholder="Search for restaurant, item or more"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button
          className="w-26 px-4 py-2 text-sm box-border border border-gray-600 font-semibold bg-red-800 rounded-r-lg text-white cursor-pointer outline-none"
          onClick={() => {
            const newFiltered = applySearch(originalListOfRestaurants);
            setFilteredRestaurant(newFiltered);
          }}
        >
          Search
        </button>
      </div>
      <div className="ml-5 mb-2.5">
        <button className="mr-2.5 p-2 border-none rounded-lg cursor-pointer bg-gray-300 text-sm text-black" onClick={clearFilters}>
          Clear filter
        </button>
        <button
          className="mr-2.5 p-2 border-none rounded-lg cursor-pointer bg-gray-300 text-sm text-black active:bg-green-400 transition duration-300 ease-in-out"
          onClick={() => {
            const newFiltered = applyRatingsFilter(filteredRestaurant);
            setFilteredRestaurant(newFiltered);
          }}
        >
          Ratings 4.5+
        </button>
        <button
          className="mr-2.5 p-2 border-none rounded-lg cursor-pointer bg-gray-300 text-sm text-black active:bg-green-500 transition duration-300 ease-in-out"
          onClick={() => {
            const newFiltered = applyDeliveryTimeFiler(filteredRestaurant);
            setFilteredRestaurant(newFiltered);
          }}
        >
          Delivery Time &lt;30 min
        </button>
      </div>
      <div className="ml-5 mb-2 text-2xl font-bold">
        Top Restaurants in Chennai
      </div>
      <div className="ml-2.5 flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
