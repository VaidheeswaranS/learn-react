import { RESTAURANT_LIST } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props ;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info
  const { deliveryTime } = resData?.info.sla
  return (
    <div className="res-card">
      <div className="image-container">
        <img alt="res-logo" className="res-logo" src={RESTAURANT_LIST + cloudinaryImageId} />
      </div>
      <div className="name-container">
        <p className="name">{name}</p>
        <p className="cuisine">{cuisines.join(", ")}</p>
      </div>
      <div className="details-container">
        <p className="rating">{avgRating}</p>
        <p className="delivery-time">{deliveryTime} mins</p>
        <p className="amount-for-two">{costForTwo}</p>
      </div>
    </div>
  );
}

export default RestaurantCard ;