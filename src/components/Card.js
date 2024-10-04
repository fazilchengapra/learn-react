import CONSTANT from "../../util/constant";
import { Link } from "react-router-dom";
const Card = ({resData}) => {
  const { name, cuisines, deliveryTime, subHeader, cloudinaryImageId} = resData?.info;
  return (
    <div className="flex m-4 p-4 bg-gray-100 rounded-md hover:bg-gray-200 hover:rounded-lg cursor-pointer">
      <Link to={'restro/'+resData?.info?.id}>
        <div className="">
          <img
            className="rounded-lg"
            src={CONSTANT.IMG_URL + cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="p-2">
          <h3 className="pb-2 font-bold">{name}</h3>
          <h4>{cuisines[0]}</h4>
          <h4>{deliveryTime} minuts</h4>
          <h4>{subHeader}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Card;
