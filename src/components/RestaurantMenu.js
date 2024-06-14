import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (card) =>
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ).card?.card?.itemCards;

  return (
    <div className="menu m-2 p-5 bg-white rounded-md shadow-md border border-green-500 justify-between">
      <h1 className="text-xl font-bold mb-4 pb-2">{name ?? "Unknown"}</h1>
      <h4 className="font-light mb-4 pb-2">
        {cuisines.join(", ") ?? "Unknown"} - {costForTwoMessage ?? "Unknown"}
      </h4>
      <h2 className="font-bold mb-4 pb-2">Menu</h2>
      <ul className="">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="text-black-500 mb-4 pb-2 flex items-center justify-between">
            {item.card.info.name} - {"Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
