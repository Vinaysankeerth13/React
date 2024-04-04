import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => creates a javascript object => rendered to HTML element with help of reactDOM.

const heading = React.createElement("h1",{id:"heading"}, "Vinay is learning react");
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

// JSX 
const jsxHeading = <h1 id="heading">Vinay is learning React.</h1>
console.log(jsxHeading);
root.render(jsxHeading);