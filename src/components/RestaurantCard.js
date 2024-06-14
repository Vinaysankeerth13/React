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
            src={
              CDN_URL +
              cloudinaryImageId
            }
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
export default RestaurantCard;