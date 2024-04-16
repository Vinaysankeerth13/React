import React from "react";
import ReactDOM from "react-dom/client";

// React Compon
const Title = () => (
  <h1 className="head" tabIndex="5">
    Hi this is Vinay.
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

// React Component
// Class based Components - old
// Functional Components - new
const Heading = () => (
    <div id="container">
      <Title/>
    <h1 className="heading">I'm learning React.</h1>
  </div>
);

root.render(<Heading/>);
