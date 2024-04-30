const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return (
      <div className="res-card" style={{ backgroundColor: "#BACD92" }}>
        <div>
          <img className="resImg" src={cloudinaryImageId} alt="Restaurant Image" />
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} Stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} Min</h5>
      </div>
    );
  };

  export default RestaurantCard;