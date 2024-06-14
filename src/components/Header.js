// import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Header = () => {
//   const [btnName,setbtnName] = useState("Login");
//   const onlineStatus = useOnlineStatus();
//     return (
//       <div className="header">
//         <div className="logo">
//           <img
//             className="logo"
//             src = {LOGO_URL}
//           />
//         </div>
//         <div className="navbtn">
//           <ul>
//             <li>
//               Online Staus: {onlineStatus ? "🟢": "🔴"}
//             </li>
//             <li>
//               <Link to="/" onClick="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//             <Link to="/contact">Contact Us</Link>
//             </li>
//             <li>
//             <Link to="/cart">Cart</Link>
//             </li>
//             <button className="button" onClick={() => {
//              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
//             }}>{btnName}</button>
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   function refreshPage() {
//     window.location.reload(false);
//   }

// export default Header;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="header flex justify-between bg-white rounded-md shadow-md border border-green-500 m-2 items-center">
      <div className="logo">
        <img
          className="w-32 h-100 m-1"
          src={LOGO_URL}
          alt="Company Logo"
        />
      </div>
      <nav className="navbtn flex items-center">
        <ul className="flex space-x-4">
          <li>
            Online Status: {onlineStatus ? <span className="text-green-500">🟢</span> : <span className="text-red-500"></span>}
          </li>
          <li>
            <Link to="/" className="text-black hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-gray-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-gray-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-black hover:text-gray-500">
              Cart
            </Link>
          </li>
          <li>
            <button
              className="button mx-2 px-4 py-2 pb-2 mb-2 text-black rounded-md hover:bg-green-100 focus:outline-none border-2 border-green-300"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;