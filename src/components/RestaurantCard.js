import { RESTAURANT_IMAGE } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props ;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info

  return (
    <div className="res-card">
      <div className="image-container">
        <img alt="res-logo" className="res-logo" src={RESTAURANT_IMAGE + cloudinaryImageId} />
      </div>
      <div className="name-container">
        <p className="name">{name}</p>
        <p className="cuisine">{cuisines.join(", ")}</p>
      </div>
      <div className="details-container">
        <p className="rating">{avgRating}</p>
        <p className="delivery-time">{sla?.deliveryTime} mins</p>
        <p className="amount-for-two">{costForTwo}</p>
      </div>
    </div>
  );
}

export default RestaurantCard ;