import RestroItemCard, { DefaultPrice } from "./RestroItemcard";

const RestroItemList = ({ item }) => {
  console.log(item);

  const WithDefaultPrice = DefaultPrice(RestroItemCard);

  return (
    <div>
      {item.map((itemInfo) => (
        <div>
          {itemInfo?.card?.info?.defaultPrice ? (
            <WithDefaultPrice itemInfo={itemInfo?.card?.info} />
          ) : (
            <RestroItemCard itemInfo={itemInfo?.card?.info} />
          )}
        </div>
      ))}
    </div>
  );
};

export default RestroItemList;
