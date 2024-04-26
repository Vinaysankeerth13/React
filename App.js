import React from "react";
import ReactDOM from "react-dom/client";

// React Compon
const title = (
  <h1 className="head" tabIndex="5">
    Hi this is Vinay as a Functional.
  </h1>
);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Hi this is Vinay as a component.
  </h1>
);
const Title1 = () => (
  <h1 className="head" tabIndex="5">
    Hi this is Vinay as a component 1.
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

// React Component
// Class based Components - old
// Functional Components - new
const Heading = () => (
    <div id="container">
      {title}
      <Title/>
      <Title></Title>
      {Title1()}
    <h1 className="heading">I'm learning React.</h1>
  </div>
);

root.render(<Heading/>);
