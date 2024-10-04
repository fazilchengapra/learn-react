import { useDispatch } from "react-redux";
import constant from "../../util/constant";
import { addItem } from "../../util/cartSlice";


const RestroItemCard = ({ itemInfo }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex mt-2 p-2 border-b-2" key={itemInfo?.id}>
      <div className="w-9/12 mx-3">
        <h3 className="text-start font-extrabold text-gray-800 text-md">
          {itemInfo?.name}
        </h3>
        <p className="mt-2 font-bold">
          ₹{itemInfo?.price / 100 || itemInfo?.defaultPrice / 100}
        </p>
        <p>{itemInfo?.description}</p>
      </div>
      <div className="w-3/12 p-4 relative">
        <img
          className="w-full rounded-lg"
          src={constant.IMG_URL + itemInfo?.imageId}
          alt=""
        />
        <div className="absolute p-12 bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full">
          <button className="bg-white rounded-lg shadow-xl font-bold text-lg uppercase text-green-700 py-2 px-4 mb-4"
          onClick={() => dispatch(addItem(itemInfo))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export const DefaultPrice = (RestroItemCard) => {
  return (props) => {
    return (
      <div>
        <p className="text-lg font-bold">Default Price</p>
        <RestroItemCard {...props} />
      </div>
    );
  };
};

export default RestroItemCard;
