import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LISTING } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filteredRestuarants, setfilteredRestuarants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log(listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LISTING);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <OfflinePage />;
  }
  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-2 p-5 bg-white rounded-md shadow-md border border-green-500 justify-between">
      <div className="filter flex items-center justify-between">
        <div className="search mr-2 p-4 ">
          <input
            type="text"
            className="searchBox border border-solid border-green-500 mr-4"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-custom-color rounded-md  hover:border-green-500"
            onClick={() => {
              const filteredRestuarants = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestuarants(filteredRestuarants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-1 bg-custom-color rounded-md  hover:border-green-500"
            onClick={() => {
              const filteredList = filteredRestuarants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestuarants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="rest-container flex justify-between gap-4 flex-wrap">
        {filteredRestuarants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
