import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="border-b-2 border-lime-600 pb-2 mb-2 text-left"
        >
          <div className="flex justify-between my-2 py-2">
            <div>
              <div className="my-1 py-1">
                <span className="font-semibold">{items.card.info.name}</span>
              </div>
              <div className="my-1 py-1 font-light">
                <span>
                  Rs.{" "}
                  {items.card.info.price / 100 ||
                    items.card.info.defaultPrice / 100}
                </span>
              </div>
            </div>
            <div className="">
              <div><img
                src={CDN_URL + items.card.info.imageId}
                className="w-[100px] h-[100px] rounded-md"
              /></div>
              <div className="">
              <button className="mt-1 ml-5 py-1 px-2 text-black rounded-md bg-white border-2 border-black shadow-md">
                Add +
              </button>
            </div>
            </div>
            
          </div>
          <p className="flex text-xs">{items.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
