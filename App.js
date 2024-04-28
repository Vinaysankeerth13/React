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
 *     - Image
 *     - Name
 *     - Rating
 *     - Cuisine
 *     - Delivery time
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

const RestaurantCard = () =>{
  return (
    <div className="res-card" style={{backgroundColor: "#BACD92"}}>
      <div>
      <img className="resImg" src="https://play-lh.googleusercontent.com/vWZoY6BBFTAUDpSwsyzGiWdKXkLXN6VdFm9DXaMPiWs8LdsfCdlWHRNu2zrjqfElKlC8"></img> 
      </div>
      <h3>Concu</h3>
      <h4>Dessert, Italian and Coffee</h4>
      <h5>4.3 Stars</h5>
      <h5>38 min</h5>
    </div>
  )
}

const Body = () =>{
  return(
    <div className="body">
      <div className="searchbar">Search</div>
      <div className="rest-container">
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
      </div>
    </div>
  )
}
const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
