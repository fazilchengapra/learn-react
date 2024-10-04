import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";


const User = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const {logginuser, setUserName} = useContext(UserContext)
  

  const fetchData = async () => {
    const res = await fetch("https://api.github.com/users/fazilchengapra");
    const data = await res?.json();
    
    setData(data)
    
  };
  console.log("render");

  return (
    <div className="mt-5 p-4 justify-center m-auto w-3/12">
      <h3 className="text-sm text-red-500 font-semibold">Default user : {logginuser}</h3>
      <h3 className="text-lg font-semibold">Name: {data?.name}</h3>
      <img src={data?.avatar_url} alt="Avathar image" className="w-40 h-40 mt-6 rounded-md" />
      <input type="text" value={logginuser} className="border border-black p-2 mt-2" onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

export default User;
