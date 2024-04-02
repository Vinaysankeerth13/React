import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
      "div",
      {id: "child1"},
      React.createElement("h1", {}, "Vinay Sankeerth"),
      React.createElement("h2", {}, "Sankeerth")
    ),
    React.createElement(
      "div",
      {id: "child2"},
      React.createElement("h1", {}, "Aadya"),
      React.createElement("h2", {}, "Dodda")
    )
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading1);
  