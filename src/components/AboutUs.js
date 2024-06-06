import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="about-us__title">About Foodie</h1>
      <p className="about-us__description">
        Foodie is a convenient online food delivery platform that connects you
        with a wide variety of restaurants and cuisines. We make it easy to
        find your favorite dishes and have them delivered to your doorstep in a
        timely and hassle-free manner.
      </p>
      <h2>Our Mission</h2>
      <p className="about-us__description">
        Our mission is to revolutionize the way people experience food delivery.
        We strive to provide a seamless and user-friendly platform that offers a
        diverse selection of restaurants, competitive prices, and reliable
        delivery services.
      </p>
      <h2>Our Values</h2>
      <ul className="about-us__values">
        <li>
          Customer Satisfaction: We prioritize customer satisfaction above all
          else. We are committed to providing a positive and convenient
          ordering experience.
        </li>
        <li>
          Restaurant Partnership: We value our partnerships with restaurants
          and work diligently to ensure their success on our platform.
        </li>
        <li>
          Quality Delivery: We prioritize timely and efficient delivery with
          a focus on maintaining food quality.
        </li>
      </ul>
      <p className="about-us__description">
        We are passionate about food and believe that everyone deserves to enjoy
        delicious meals without the hassle of cooking. Join Foodie today and
        experience the convenience of online food delivery!
      </p>
    </div>
  );
};

export default AboutUs;

