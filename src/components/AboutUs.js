import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class AboutUs extends React.Component {

  constructor(props){
    super(props)
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent compenent did mount")
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="about-us m-2 p-5 bg-white rounded-md shadow-md border border-green-500 justify-between">
        <h1 className="about-us__title text-2xl font-bold p-3">About Foodie</h1>
        <p className="about-us__description p-3">
          Foodie is a convenient online food delivery platform that connects you
          with a wide variety of restaurants and cuisines. We make it easy to
          find your favorite dishes and have them delivered to your doorstep in a
          timely and hassle-free manner.
        </p>
        <h2 className="text-xl font-bold p-3">Our Mission</h2>
        <p className="about-us__description p-3">
          Our mission is to revolutionize the way people experience food delivery.
          We strive to provide a seamless and user-friendly platform that offers a
          diverse selection of restaurants, competitive prices, and reliable
          delivery services.
        </p>
        <h2 className="text-xl font-bold p-3">Our Values</h2>
        <ul className="about-us__values p-3">
          <li className="p-1">
            Customer Satisfaction: We prioritize customer satisfaction above all
            else. We are committed to providing a positive and convenient
            ordering experience.
          </li>
          <li className="p-1">
            Restaurant Partnership: We value our partnerships with restaurants
            and work diligently to ensure their success on our platform.
          </li>
          <li className="p-1">
            Quality Delivery: We prioritize timely and efficient delivery with
            a focus on maintaining food quality.
          </li>
        </ul>
        <p className="about-us__description p-3">
          We are passionate about food and believe that everyone deserves to enjoy
          delicious meals without the hassle of cooking. Join Foodie today and
          experience the convenience of online food delivery!
        </p>
        <UserClass/>
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
          </div>
      </div>
    );
  }
}

export default AboutUs;
