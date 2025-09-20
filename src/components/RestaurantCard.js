import { RESTAURANT_IMAGE } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    /**
     * need to check later (ml-2.5 flex-col flex-wrap w-52 p-2.5)
     */
    <div
      className="ml-2.5 mb-2.5 flex-col flex-wrap w-52 p-3.5 hover:border cursor-pointer"
      data-testid="resCard"
    >
      <div className="image-container">
        <img
          alt="res-logo"
          className="h-48 w-48 mb-2 object-cover"
          src={RESTAURANT_IMAGE + cloudinaryImageId}
        />
      </div>
      <div className="name-container">
        <p className="mt-0 font-bold text-base/5 mb-2">{name}</p>
        <p className="mt-0 text-sm mb-2 text-gray-500">{cuisines.join(", ")}</p>
      </div>
      <div className="flex items-center justify-around text-xs">
        <p className="border-none bg-green-500 text-black py-1 px-2">
          {avgRating}
        </p>
        <p className="py-1 px-2">{sla?.deliveryTime} mins</p>
        <p className="py-1 px-1">{costForTwo}</p>
      </div>
    </div>
  );
};

export const isRestaurantOnline = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="p-1.5 m-1 absolute bg-black text-white">
          Offline
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
