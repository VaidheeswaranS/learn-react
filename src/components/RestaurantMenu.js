import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategories from "./RestaurantMenuCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  
  const { resId } = useParams();
  const restaurantDetails = useRestaurantMenu(resId);

  if (restaurantDetails === null) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = restaurantDetails?.cards[2]?.card?.card?.info;

  const { minDeliveryTime, maxDeliveryTime } =
    restaurantDetails?.cards[2]?.card?.card?.info?.sla;

  const { itemCards } =
    restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card.card;

  const categories =
    restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="flex flex-col w-[900px] my-5 ml-5">
      <div className="mb-5 ml-5 text-[24px] font-bold">{name}</div>
      <div className="flex flex-col w-[890px] h-[150px] border-none rounded-4xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] ml-2.5 mb-[30px]">
        <div className="text-[18px] font-bold mt-2.5 mb-1.5 mx-5">
          {avgRating} ({totalRatingsString}) &bull; {costForTwoMessage}
        </div>
        <div className="text-[14px] text-orange-600 mt-2.5 mb-1.5 mx-5">
          {cuisines.join(", ")}
        </div>
        <div className="text-[14px] font-bold mt-2.5 mb-1.5 mx-5">
          {areaName}
        </div>
        <div className="text-[14px] font-bold mx-5">
          {minDeliveryTime} - {maxDeliveryTime} mins
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantMenuCategories
          key={category?.card?.card?.title}
          menuList={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
