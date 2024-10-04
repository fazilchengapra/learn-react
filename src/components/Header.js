import Card from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../../util/useIsOnline";
import { useSelector } from "react-redux";

const Header = () => {

  const cart = useSelector((store) => store.cart.items)
  

  const isOnline = useIsOnline()
  const [logBtn, setLogBtn] = useState("Login");
  
  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex p-4 m-4">
        <h3 className="text-yellow-600 font-bold text-xl p-1">Delivee</h3>
      </div>
      <div className="flex p-4 m-4 content-center">
        <ul className="flex gap-5 content-center text-md font-semibold">
          <li className="p-1">Network Status: {isOnline ? '✅' : '🔴'}</li>
          <li className="p-1"><Link to={'/'}>Home</Link></li>
          <li className="p-1"><Link to={'/about'}>About</Link></li>
          <li className="px-6 bg-green-100 rounded-lg">
            {" "}
            <button
              className="p-1"
              onClick={() =>
                logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login")
              }
            >
              {logBtn}
            </button>{" "}
          </li>
          <li className=" px-6">
           <Link to={'/cart'}> Cart - ({cart.length} items)</Link>
          </li>
          <li>
          <li className="p-1"><Link to={'/contact'}>Contact</Link></li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
