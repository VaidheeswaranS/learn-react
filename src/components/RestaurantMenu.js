import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_IMAGE } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
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
      <div className="text-[20px] font-bold ml-[30px] mb-5">Recommended</div>
      <div className="flex flex-col ml-5">
        {itemCards.map((item) => (
          <div
            className="flex flex-row justify-between mb-[30px] items-center"
            key={item?.card?.info?.id}
          >
            <div className="flex flex-col">
              <div className="text-[16px] font-bold mb-2 ml-2.5 text-gray-500">
                {item?.card?.info?.name}
              </div>
              <div className="text-[14px] font-bold mb-2 ml-2.5">
                ₹
                {item?.card?.info?.finalPrice / 100 ||
                  item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </div>
              <div className="text-[13px] font-bold text-green-500 mb-2 ml-2.5">
                <span className="item-ratings-star">&#9733;</span>{" "}
                {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                <span className="text-gray-500 text-[13px] font-bold">
                  ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </div>
              <p className="text-gray-900 text-[13px] ml-2.5 w-[500px]">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-[140px] h-[140px] ml-5">
              <img
                className="w-[140px] h-auto object-contain"
                src={RESTAURANT_MENU_IMAGE + item?.card?.info?.imageId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
