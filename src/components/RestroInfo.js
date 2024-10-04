const { useEffect, useState } = require("react");
const { useParams } = require("react-router-dom");
import useRestoInfo from "../../util/useRestroInfo";
import RestroCategery from "./RestroCategery";

const RestroInfo = () => {
  const [data, setData] = useState(null);
  const param = useParams();
  const resData = useRestoInfo(param);
  const [showItem, setShowItem] = useState(null);

  useEffect(() => {
    setData(resData);
  }, [resData]);

  const resCatogary =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="w-6/12 m-auto">
      {data && (
        <div className="mt-10">
          <div className="flex justify-center">
            <h3 className="font-bold text-xl">
              {data?.data?.cards[0]?.card?.card?.text}
            </h3>
          </div>
          <div>
            {resCatogary.map((d, index) => (
              <RestroCategery
                data={d?.card?.card}
                showItem={index === showItem && true}
                setShowItem={(status) => {
                  status ? setShowItem(index) : setShowItem(null);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestroInfo;
