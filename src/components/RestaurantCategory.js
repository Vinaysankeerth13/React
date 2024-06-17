import ItemsList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data , showItems, setShowIndex }) => {
    // const[showItems, setshowItems]  = useState(false); 

    const handleClick = () => {
      setShowIndex();
    }
    
  return (
    <div>
      <div className="m-auto w-6/12 shadow-lg p-4 my-2 bg-green-100">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-semibold text-md">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="pl-5">{showItems ? "↑" : "↓"}</span>
        </div>
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
      
    </div>
  );
};

export default RestaurantCategory;
