import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

/**
 * These are the ID's working (this might change)---------------
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
 */

const useRestaurantMenu = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const data = await fetch(
      RESTAURANT_MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setRestaurantDetails(json.data);
  };

  return restaurantDetails;
};

export default useRestaurantMenu;
