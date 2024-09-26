import { useEffect, useState } from "react";
import CONSTANT from "./constant";
import useIsOnline from "./useIsOnline";

const useMainapi = () => {
  const [data, setData] = useState(null);
  const isOnline = useIsOnline();
  useEffect(() => {
    fetchRestroInfo();
  }, []);

  const fetchRestroInfo = async () => {
    const res = await fetch(CONSTANT.MAIN_API);
    const resToJson = await res.json();
    // console.log(resToJson);

    setData(resToJson);
  };

  return data;
};

export default useMainapi;
