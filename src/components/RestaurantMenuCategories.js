import { useState } from "react";
import { RESTAURANT_MENU_IMAGE } from "../utils/constants";

const RestaurantMenuCategories = (props) => {
  const [showItems, setShowItems] = useState(false);

  const { categoryHeading } = props;
  const { title, itemCards } = categoryHeading;

  const menuListCollapser = () => {
    console.log("clicked");
    setShowItems(!showItems);
  };

  return (
    <div>
      <div
        className="w-full flex flex-row justify-between items-center cursor-pointer"
        onClick={() => {
          menuListCollapser();
        }}
      >
        <span className="text-[20px] font-bold ml-[30px] mb-5">
          {title} ({itemCards.length})
        </span>
        <span className="text-[20px] font-bold mb-5">⌄</span>
      </div>
      {showItems && (
        <div className="flex flex-col ml-5">
          {itemCards.map((item) => (
            <div
              className="flex flex-row justify-between mb-[30px] items-center border-b"
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
                    (
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </span>
                </div>
                <p className="text-gray-900 text-[13px] ml-2.5 mb-2 w-[500px]">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="w-[140px] h-[140px] ml-5 flex flex-col relative">
                <img
                  className="w-[140px] h-auto object-contain"
                  src={RESTAURANT_MENU_IMAGE + item?.card?.info?.imageId}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="px-5 py-1 border bg-white rounded-lg shadow-lg transform translate-y-2/2 cursor-pointer">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuCategories;
