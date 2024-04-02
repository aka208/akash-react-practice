import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("Use Effect Called");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-red-500 shadow-lg sm:bg-yellow-500 lg:bg-green-300">
      <div className="logo-container">
        <img className="w-56" alt="Namaste Food App Logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "👍" : "👎"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocerry">Grocerry</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
