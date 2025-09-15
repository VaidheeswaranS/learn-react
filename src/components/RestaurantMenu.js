import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_IMAGE, RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router";

export const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantDetails()
  }, []);

  const getRestaurantDetails = async () => {
    /**
     * 473029 - Chinese Wok //
     * 785199 - Theobrama Cafe
     * 6448 - A2B
     * 34889 - Pizza hut
     * 815923 - Olio //
     * 249766 - Baskin Robbins
     * 654276 - KFC //
     * 24349 - Dominos //
     * 639426 - Dum Safar Biryani
     * 23724 - MCD
     * 470708 - Big bowl //
     * 17993 - fasoos //
     * 450605 - subway
     * 
     */

    const data = await fetch(RESTAURANT_MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");

    const json = await data.json();
    setRestaurantDetails(json.data);
  }

  if (restaurantDetails === null) return <Shimmer />;

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName } = restaurantDetails?.cards[2]?.card?.card?.info ;
  const { minDeliveryTime, maxDeliveryTime } = restaurantDetails?.cards[2]?.card?.card?.info?.sla ;
  const { itemCards } = restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card ;

  console.log (itemCards);

  return (
    <div className="main-res-menu-container">
      <div className="res-menu-res-name">
        {name}
      </div>
      <div className="res-details-container">
        <div className="ratings-and-price">
          {avgRating} ({totalRatingsString}) &bull; {costForTwoMessage}
        </div>
        <div className="cuisines">
          {cuisines.join(", ")}
        </div>
        <div className="outlet">
          {areaName}
        </div>
        <div className="res-menu-delivery-time">
          {minDeliveryTime} - {maxDeliveryTime} mins
        </div>
      </div>
      <div className="menu-name">
          Recommended
      </div>
      <div className="item-list-container">
        {itemCards.map((item) => (
          <div className="item-details-container" key={item?.card?.info?.id}>
            <div className="item-details-mini-container">
              <div className="item-name">
                {item?.card?.info?.name}
              </div>
              <div className="item-price">
                {(item?.card?.info?.finalPrice/100) || (item?.card?.info?.price/100) || (item?.card?.info?.defaultPrice/100)}
              </div>
              <div className="item-rating">
                {item?.card?.info?.ratings?.aggregatedRating?.rating} <span className="items-ratings-span-element">({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
              </div>
              <p className="item-description">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="item-image-container">
              <img className="item-image" src={RESTAURANT_MENU_IMAGE + item?.card?.info?.imageId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}