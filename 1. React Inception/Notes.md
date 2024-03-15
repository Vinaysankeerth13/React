Inception:

1. We can use react by simply importing the cdn links.

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

- The order of files is very important we can't link our script (App.js) file before importing the react links.

DO :
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="App.js"></script>

Don't:
<script src="App.js"></script>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

This is because we are using react inside our code. which means we need to import it before we use it. It's like tring to make a chicken curry without chicken you can't.

2. Initially we used HTML to write a "Hello World" program.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 1 of Learning React and GitHub vs code syncing</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="root"></div>
       <h1>Hello World</h1>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
</html>


3. Then we used JavaScipt to Write the same "Hello world" it looked something like this,

            const heading = document.createElement("h1");
            heading.innerHTML = "Hello World from JavaScript!";
            const route = document.getElementById("root");
            route.appendChild(heading);

- `const heading = document.createElement("h1");`: This line creates a new `<h1>` element in the DOM using the `createElement()` method provided by the `document` object. It assigns this newly created element to the variable `heading`.

- `heading.innerHTML = "Hello World from JavaScript!";`: This line sets the inner HTML content of the `<h1>` element created in the previous step to the string "Hello World from JavaScript!". This will be the text displayed inside the `<h1>` element.

- `const route = document.getElementById("root");`: This line retrieves an element from the DOM with the ID "root" using the `getElementById()` method provided by the `document` object. It assigns this element to the variable `route`.

- `route.appendChild(heading);`: This line appends the `<h1>` element (stored in the `heading` variable) as a child of the element with the ID "root" (stored in the `route` variable). This means that the `<h1>` element will be added inside the element with the ID "root" in the HTML document.

4. But what if we wanted to create the same basic page using react, how would we do this ?

            const heading1 = React.createElement("h1",{id:"heading"},"Hello World From React!");
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(heading1);
Line 1 
React.createElement is a function that takes in 3 arguments 
- The first argument is about what kind of element we would like to create like div,h1,h2.
- The second argument is an optional but it is often used to give these HTML elements a ID or class tag.
- The third argument is what content we want to put inside that HTML element.

Line 2
- ReactDOM.createRoot(): This method is used to create a new React root. It takes a single argument, which is the DOM element where the root will be mounted. In this case, document.getElementById("root") selects the DOM element with the ID "root" from the HTML document.

Line 3
- root: This refers to the React root element that was created earlier using ReactDOM.createRoot().
- render(): This method is used to render a React element into the specified root. It takes a single argument, which is the React element to be rendered.
- heading1: This is the React element that we want to render. It was created earlier using React.createElement() and represents an <h1> element with the text "Hello World From React!" and an ID of "heading".

5. What if we had to nest elements like in HTML ?

In HTML we generally do this right 
<div>
    <div>
         <h1>Hello World!</h1>
    </div>
</div>

but how can we do this in react ?

const heading1 =
React.createElement
("div",{id:"parent"},React.createElement
("div",{id: "child"},React.createElement
("h1",{id:"heading"},"Hello World From React!")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);

if you look at this code closely you can observe that we initially created a div element with a id parents and then nested another div element with a id child which had our h1 element, this is how we can nest elements in react as we do in HTML. 

Let's go a step deeper into nesting what we had 2 children and not one and each child had an h1 and h2 elements ?

const heading1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I am h1 tag of child 1."),
    React.createElement("h2", {}, "I'm a h2 tag of child 1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "I am h1 tag of child 2"),
    React.createElement("h2", {}, "I'm a h2 tag of child 2")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);

this code looks painfully long and unreadbale for simple headings tags right, this is where JSX comes in to picture.

Fun exercise : 

1. <h1>Vinay is here</h1>
copy this and put it inside the root element of the HTML document, and see what happens when the page loads, observe the page while it's loading very very carefully.

2. Take this h1 tag and put it above and below the root div and see what happens and try to find why.
