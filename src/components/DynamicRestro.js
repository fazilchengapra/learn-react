import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";

const DynamicRestro = () => {
  const [dish, setDish] = useState(null);
  const [menu, setMenu] = useState(null);
  const param = useParams()

  console.log(param);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Dish = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0861633&lng=75.9760699&restaurantId="+param?.id+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await Dish.json();

    setMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );

    setDish(json.data);
  };

  if (dish === null && menu === null) {
    return <Shimmer />;
  }
  return (
    <div>
      <h1>{dish?.cards[0]?.card?.card?.text}</h1>
      <h3>Menu:</h3>
      {menu?.map((resData) => (
        <li>{resData.card.info.name}</li>
      ))}
    </div>
  );
};

export default DynamicRestro;
