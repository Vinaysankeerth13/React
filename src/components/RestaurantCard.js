import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
      resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
      <div className="res-card">
        <div>
          <img
            className="resImg"
            src={
              CDN_URL +
              cloudinaryImageId
            }
          ></img>
        </div>
        <h3 className="card-text">{name}</h3>
        <h4 className="card-text">{avgRating}</h4>
        <h4 className="card-text">{costForTwo}</h4>
        <h5 className="card-text">{cuisines.join(", ")}</h5>
        <h5 className="card-text">{deliveryTime + " min"}</h5>
      </div>
    );
};

export default RestaurantCard;