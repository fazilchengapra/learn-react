import React from "react";
import { useState, useEffect } from "react";
import useMainapi from "../../util/useMainApi";
import Card from "./Card";
import data from "../../util/data";
import Shimmer from "../Shimmer";
import useIsOnline from "../../util/useIsOnline";

function Body() {
  const resData = useMainapi();
  const [filterRes, setFilterRes] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [constData, setConstData] = useState(null);
  const isOnline = useIsOnline();

  useEffect(() => {
    console.log("useEffect call");

    setFilterRes(
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setConstData(
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    console.log(filterRes);
    
  }, [resData]);

  if (isOnline === false) {
    return <h1>Plese Check Your Network Connection</h1>;
  }

  if (filterRes == null) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="m-4 p-4 flex content-center">
        <button
          className="px-6 py-1 bg-blue-600 text-white font-semibold rounded-lg mr-4"
          onClick={() => {
            const filter = filterRes.filter((res) => res.star > 4);
            setFilterRes(filter);
          }}
        >
          Filter Rest
        </button>
        <input
          className="border border-solid border-gray-900 pl-1 focus:outline-none rounded-md mr-1"
          type="search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="bg-black text-white font-semibold px-4 rounded-md"
          onClick={() => {
            const searchRes = constData.filter((res) =>
              res?.info?.cuisines[0]
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            );
            setFilterRes(searchRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards flex flex-wrap p-4 m-4 gap-10">
        {filterRes.map((resData, index) => (
          <div className="w-64" key={index}>
            <Card resData={resData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
