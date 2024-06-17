import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card w-[300px] h-[480px] p-3 bg-custom-color rounded-md shadow-md hover:border hover:border-green-500 hover:cursor-pointer">
      <div>
        <img
          className="resImg p-2 w-[300px] h-[300px]"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className="p-2">
        <h3 className="card-text font-bold">{name}</h3>
        <h4 className="card-text">{avgRating}</h4>
        <h4 className="card-text">{costForTwo}</h4>
        <h5 className="card-text">{cuisines.join(", ")}</h5>
        <h5 className="card-text font-semibold">{deliveryTime + " min"}</h5>
      </div>
    </div>
  );
};

// Enhanced restaurant card - Higher order components

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 rounded-md absolute bg-zinc-100 text-black">Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
export default RestaurantCard;
