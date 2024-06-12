import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName,setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <div className="logo">
          <img
            className="logo"
            src = {LOGO_URL}
          />
        </div>
        <div className="navbtn">
          <ul>
            <li>
              Online Staus: {onlineStatus ? "🟢": "🔴"}
            </li>
            <li>
              <Link to="/" onClick="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
            <button className="button" onClick={() => {
             btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  function refreshPage() {
    window.location.reload(false);
  }

export default Header;