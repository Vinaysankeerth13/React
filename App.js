import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header 
 * - logo
 * - Navigaion buttons
 * Body
 * - Search
 * - Card Container (for restaurants)
 *   - Restaurant cards
 * Footer
 * - Copyrights
 * - Links
 * - Address 
 * - contact info
 */

const Header = () => {
  return (
      <div className="header">
        <div className="logo">
        <img className="logo" src="https://img.freepik.com/free-vector/food-delivery-man-riding-motorcycles-cartoon-art-illustration_56104-610.jpg?w=1800&t=st=1714230361~exp=1714230961~hmac=e0fce15b499fa8134dfd386a4020664a75019b7940343d88da421b0e7ef9f38f"/>
        </div>
        <div className="navbtn">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
  )
}
const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
