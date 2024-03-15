const heading1 = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
      "div",
      {id: "child1"},
      React.createElement("h1", {}, "I am h1 tag of child 1."),
      React.createElement("h2", {}, "I'm a h2 tag of child 1")
    ),
    React.createElement(
      "div",
      {id: "child2"},
      React.createElement("h1", {}, "I am h1 tag of child 2"),
      React.createElement("h2", {}, "I'm a h2 tag of child 2")
    )
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading1);
  