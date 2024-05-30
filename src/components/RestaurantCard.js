import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
      resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
      <div className="res-card" style={{ backgroundColor: "#BACD92" }}>
        <div>
          <img
            className="resImg"
            src={
              CDN_URL +
              cloudinaryImageId
            }
          ></img>
        </div>
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{deliveryTime + " min"}</h5>
      </div>
    );
};

export default RestaurantCard;