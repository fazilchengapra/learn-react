import { useState } from "react";
import RestroItemList from "./RestroItemList";

const RestroCategery = ({ data, showItem, setShowItem }) => {
  const [click, setClick] = useState(false);

  return (
    <div>
      <div
      data-testid='restrocCatId'
        className="flex justify-between mt-10 border-b-2 border-solid p-2 shadow-sm cursor-pointer select-none"
        onClick={() => {
          setClick(!click)
          setShowItem(!click)
        }}
      >
        <div>
          <h3 className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </h3>
        </div>
        <div className="text-lg">{showItem ? "⬆️" : "⬇️"}</div>
      </div>
      {showItem && <RestroItemList item={data?.itemCards} />}
    </div>
  );
};

export default RestroCategery;
