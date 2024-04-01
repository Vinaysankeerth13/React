Day 1_Inception:

1. We can use react by simply importing the cdn links.

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

- The order of files is very important we can't link our script(App.js) file before importing the react links.

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
    <title>Day 1 of Learning React</title>
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

Assignment before going to the next video :

1. What is Emmet?
Emmet is a powerful toolkit for web developers that significantly speeds up HTML and CSS coding. It's built into many code editors and IDEs, including Visual Studio Code, Sublime Text, and Atom. Emmet provides shortcuts, known as abbreviations or snippets, that expand into full HTML or CSS code when triggered.

Here are some key features of Emmet:

1.1 **Abbreviations**: Emmet allows you to write HTML and CSS code using abbreviations that expand into full code snippets. For example, typing `div` and then pressing Tab will expand into `<div></div>`.

1.2 **Nested Structures**: Emmet simplifies the process of creating nested HTML elements by using the `>` character. For example, `ul>li*3` will expand into a `<ul>` element with three nested `<li>` elements.

1.2 **CSS-like Syntax**: Emmet uses a CSS-like syntax to define properties in CSS code. For example, `p#intro.lead` will expand into `<p id="intro" class="lead"></p>`.

1.4 **Math Expressions**: Emmet supports basic math expressions in numeric values, allowing you to perform simple calculations directly in your code. For example, `div.item-$*3` will expand into `<div class="item-1"></div><div class="item-2"></div><div class="item-3"></div>`.

1.5 **Increment and Decrement**: You can use `+` and `-` to increment or decrement numbers in Emmet expressions. For example, `ul>li.item$*3` will expand into a `<ul>` element with three `<li>` elements with classes `item1`, `item2`, and `item3`.

Emmet greatly improves the efficiency and productivity of web developers by reducing the amount of time and effort required to write HTML and CSS code. It's an essential tool for anyone working with web technologies.

2. What is the diffrence between a library and a framework?

The main difference between a library and a framework lies in the inversion of control:

1. **Library**:
   - A library is a collection of functions, classes, or modules that you can use to perform specific actions or tasks.
   - You call the functions or use the classes directly in your code.
   - In a library, you have control over the flow of your program.
   - Examples of libraries include React, jQuery, and NumPy.

2. **Framework**:
   - A framework is a pre-defined structure that dictates the flow and architecture of your application.
   - Your code plugs into the framework, and the framework controls the flow of your application.
   - In a framework, the control of your program is inverted, meaning the framework calls your code based on predefined rules and lifecycle events.
   - Examples of frameworks include Angular, Django, and Spring.

In summary, with a library, you call the code, while with a framework, the framework calls your code.

3. What is CDN and why do we use it?

CDN stands for Content Delivery Network. It is a distributed network of servers that work together to deliver web content to users based on their geographic location. CDN servers cache static content, such as images, CSS files, JavaScript files, and other media files, and serve them to users from the server that is closest to their location. 

Here's why we use CDNs:

1. **Faster Content Delivery**: CDNs reduce latency by serving content from servers that are geographically closer to the user. This results in faster loading times for web pages and better user experience.

2. **Improved Performance**: By offloading the delivery of static content to CDN servers, the origin server is freed up to handle dynamic content and application logic. This can lead to improved performance and scalability of web applications.

3. **Increased Reliability**: CDNs distribute content across multiple servers, which enhances redundancy and fault tolerance. If one server fails, the CDN can route requests to other healthy servers, ensuring high availability of content.

4. **Traffic Offloading**: CDNs can help reduce the load on the origin server by caching and serving static content directly to users. This can result in cost savings by reducing bandwidth usage and server load.

5. **Global Reach**: CDNs have servers located in multiple regions around the world, allowing websites to serve content to users globally with minimal latency.

Overall, CDNs are used to improve the performance, reliability, and scalability of websites and web applications by efficiently delivering content to users worldwide.

4. Why is React known as React?

React, the JavaScript library for building user interfaces, was developed by Facebook. It was initially created by Jordan Walke, a software engineer at Facebook, and it was first deployed on Facebook's newsfeed in 2011. 

The name "React" was chosen to reflect the library's main purpose, which is to provide a reactive and efficient way to build user interfaces. The term "reactive" refers to the ability of the UI to respond quickly and dynamically to user input and changes in data. 

Additionally, the name "React" also emphasizes the declarative and component-based nature of the library. React allows developers to create reusable UI components that react to changes in data, making it easier to build complex and interactive user interfaces.

Overall, the name "React" encapsulates the core principles and goals of the library, making it a fitting choice for a technology focused on building responsive and dynamic user interfaces.

5. What is Crossorigin in Script tag?

In web development, the same-origin policy is a security measure implemented by web browsers to prevent scripts from one origin (e.g., domain, protocol, or port) from accessing resources on a different origin. This policy helps protect user data and prevent malicious attacks, such as cross-site scripting (XSS) and data theft.

When a script tag attempts to load a script from a different origin than the one hosting the web page, it triggers a cross-origin request. By default, web browsers restrict such requests, and the script will not be executed unless the server hosting the script explicitly allows it using Cross-Origin Resource Sharing (CORS) headers.

To mitigate security risks, modern web browsers enforce the same-origin policy by default. However, developers can configure servers to include CORS headers to allow cross-origin requests for specific resources. This allows scripts from one origin to interact with resources hosted on a different origin in a controlled and secure manner.

6. What is the diffrence between React and ReactDOM?

React and ReactDOM are two different packages provided by the React ecosystem, each serving a distinct purpose:

1. **React**: This is the core React library responsible for defining and creating React elements, components, and managing component lifecycle methods. It provides the functionality to create and manage the virtual DOM, handle state and props, and render React components.

2. **ReactDOM**: ReactDOM is a package that provides DOM-specific methods used for interacting with the actual DOM. It contains methods such as `render()` that are used to render React components into the DOM, `hydrate()` for hydrating a container that already contains HTML content, and `unmountComponentAtNode()` for unmounting React components from the DOM.

In summary, while React focuses on defining and managing components and their behavior, ReactDOM focuses on rendering those components into the browser's DOM and interacting with the actual DOM elements. Both React and ReactDOM work together to enable building interactive and dynamic user interfaces in web applications.

7. What is difference between react.development.js and react.production.js files via CDN?

The main difference between `react.development.js` and `react.production.js` files when using them via CDN lies in their optimization level and the additional debugging information they provide:

1. **react.development.js**:
   - This file is intended for development purposes.
   - It contains additional debugging information, such as warnings and error messages, which can help developers identify issues and debug their code more easily.
   - It is not optimized for production use and may have larger file size and slower performance compared to the production version.
   - It is suitable for use during development and testing stages when debugging and error tracking are crucial.

2. **react.production.js**:
   - This file is optimized for production use.
   - It removes all debugging information and console logs to reduce file size and improve performance.
   - It is suitable for use in production environments where minimizing file size and optimizing performance are critical.
   - It may not provide as much detailed error information or debugging support as the development version, but it offers better performance and smaller file size for production deployments.

In summary, `react.development.js` is used during development for its additional debugging features, while `react.production.js` is used in production environments for its optimized performance and smaller file size.

8. What is async and defer?

`async` and `defer` are both attributes that can be used with the `<script>` element in HTML to control the loading and execution of external JavaScript files. However, they work differently:

1. **Async (`async`)**:
   - When you add the `async` attribute to a `<script>` tag, it tells the browser to download the script file asynchronously while continuing to parse the HTML document.
   - The script will be executed as soon as it's downloaded, even if the HTML parsing is not yet complete.
   - There is no guarantee about the order of execution of async scripts. Whichever script finishes downloading first will execute first.
   - Useful for non-blocking scripts that do not rely on other scripts or DOM elements.

Example:
<script src="script.js" async></script>

2. **Defer (`defer`)**:
   - When you add the `defer` attribute to a `<script>` tag, it tells the browser to download the script file asynchronously while continuing to parse the HTML document.
   - However, the script will not be executed until the HTML parsing is complete.
   - Scripts with the `defer` attribute will be executed in the order they appear in the document.
   - Useful for scripts that need to be executed after the DOM has been fully loaded but do not need to block HTML parsing.

Example:
<script src="script.js" defer></script>

In summary, `async` scripts are executed as soon as they are downloaded, even if HTML parsing is not complete, while `defer` scripts are executed only after HTML parsing is complete, but before the `DOMContentLoaded` event.

9. What are arrow functions?

Arrow functions are a concise way to write function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more concise syntax compared to traditional function expressions. Arrow functions are particularly useful for writing inline functions or callback functions.

Here's the basic syntax of an arrow function:

function add(a, b) {
  return a + b;
}


const add = (a, b) => {
  return a + b;
};


Arrow functions have the following characteristics:

1. **Concise Syntax**: Arrow functions have a shorter syntax compared to traditional function expressions, especially for simple functions.

2. **Implicit Return**: If the arrow function body consists of a single expression, the curly braces and `return` keyword can be omitted, and the expression will be implicitly returned.

const add = (a, b) => a + b;

3. **Lexical `this` Binding**: Arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the surrounding code (lexical scoping).

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // 'this' refers to the Person object
  }, 1000);
}

4. **No `arguments` Object**: Arrow functions do not have their own `arguments` object. If you need to access the arguments passed to an arrow function, you can use the rest parameter syntax (`...args`).

const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

Arrow functions are commonly used in modern JavaScript development, especially when writing functional programming-style code, working with arrays or objects, and defining callbacks or event handlers.










Day 2_Igniting the App:

- What is NPM? 

It is a package manager. That's it.

Package.json is a configuration for npm.

It is a package manager for JavaScript, primarily used for managing dependencies in Node.js projects. NPM allows developers to easily install, update, and manage third-party libraries and tools needed for their projects.

Key features of NPM include:

1. **Package Installation**: NPM provides a vast repository of packages that can be easily installed in a project using simple commands like `npm install <package-name>`.

2. **Dependency Management**: NPM helps manage project dependencies by automatically installing the required packages and their dependencies. It also allows developers to specify exact versions or version ranges for dependencies.

3. **Version Management**: NPM enables developers to manage different versions of packages within their projects, ensuring consistency and compatibility.

4. **Scripting**: NPM allows developers to define and run custom scripts in their projects using the `scripts` field in the `package.json` file. These scripts can automate tasks such as testing, building, and deployment.

5. **Publishing Packages**: Developers can publish their own packages to the NPM registry, making them available for others to use.

NPM comes pre-installed with Node.js, so when you install Node.js on your system, NPM is also installed automatically. It is widely used in the JavaScript ecosystem and has become the de facto standard for managing dependencies in Node.js projects.

- What is a bundler?

A bundler is a tool used in web development to combine multiple separate files, typically written in languages like JavaScript, CSS, or TypeScript, into a single file (or sometimes multiple files) for efficient delivery to the client's web browser. Bundlers are essential for modern web development workflows, especially when working with large-scale applications comprised of numerous modules and dependencies.

Key functions and features of bundlers include:

1. **Module Resolution**: Bundlers resolve module dependencies and import statements in the codebase. They analyze the code to identify dependencies and construct a dependency graph.

2. **Code Transformation**: Bundlers often perform transformations on the source code, such as transpilation (e.g., converting TypeScript to JavaScript) or applying optimizations (e.g., minification, dead code elimination) to reduce file size and improve performance.

3. **Dependency Management**: Bundlers handle the inclusion and ordering of dependencies, ensuring that modules are bundled in the correct order to satisfy dependencies.

4. **Asset Management**: In addition to JavaScript files, bundlers can handle other types of assets such as CSS, images, fonts, and more, bundling them together for efficient delivery.

5. **Code Splitting**: Advanced bundlers support code splitting techniques to divide the bundled code into smaller, more manageable chunks. This enables lazy loading of code, where only the necessary parts of the application are loaded initially, improving page load performance.

There are two kinds, the Dev dependency and the normal version. The Dev dependency version is used when the app is in development and normal version can be also used on production.

Popular bundlers in the JavaScript ecosystem include webpack, Parcel, Rollup, and Browserify. These tools offer various configurations, plugins, and optimizations to tailor the bundling process to the specific needs of a project.

- What is the difference between tilde(~) and caret(^) in this line "parcel": "^2.12.0"(in package.json) ?

In simpler terms,

A caret(^) updates the dependency when a minor upgrade is pushed out such as 2.12.1 
whereas
A tilde(~) updates the dependency when there is a major change such as 3.0

It is always advised to use caret(^) as minor upgrades might not break the app but a major update in a dependency might break the app in case of a tilde(~).

- What is package-lock.json and how is it different from package.json?

Package-lock.json keeps track of the exact versions of the dependencies that we have installed in the project.

`package.json` and `package-lock.json` are both important files used in Node.js projects, particularly those managed with npm (Node Package Manager) or Yarn. While they serve related purposes, they have distinct roles:

1. **package.json**:
   - **Role**: The `package.json` file is a metadata file for your project. It contains various details about the project, such as its name, version, description, dependencies, scripts, and more.
   - **Contents**:
     - Project metadata: name, version, description, author, license, etc.
     - Dependencies: lists the packages required by the project, along with their versions.
     - Scripts: defines custom scripts that can be executed via npm/yarn commands.
     - Configuration settings: various configuration options for npm/yarn.
   - **Editable**: Developers typically edit this file directly to manage project metadata, dependencies, and scripts.
   - **Version Control**: This file should be versioned and committed to version control systems like Git.

2. **package-lock.json**:
   - **Role**: The `package-lock.json` file is used to lock down the version of each package's dependencies. It ensures that the project always installs the exact same versions of dependencies, regardless of where it is being installed.
   - **Contents**:
     - Dependency tree: lists the entire tree of dependencies, including their versions and resolved locations.
     - Integrity checksums: provides cryptographic hashes to verify the integrity of downloaded packages.
   - **Generated**: This file is automatically generated by npm/yarn when installing or updating dependencies. It should not be directly edited by developers.
   - **Version Control**: Like `package.json`, `package-lock.json` should also be versioned and committed to version control to ensure consistent dependency resolution across different environments.

In summary, while `package.json` contains metadata and project configuration, `package-lock.json` ensures deterministic dependency resolution by locking down the exact versions of dependencies. Both files are crucial for managing Node.js projects with npm or Yarn and should be used together.

- What are transitive dependencies?

Transitive dependencies refer to the dependencies of your project's direct dependencies. In other words, when your project depends on a library (direct dependency), and that library depends on other libraries, those additional libraries are considered transitive dependencies.

Here's an example to illustrate transitive dependencies:

Let's say your project directly depends on Library A. Library A, in turn, depends on Library B and Library C. In this scenario:
- Library A is a direct dependency of your project.
- Library B and Library C are transitive dependencies of your project because they are dependencies of Library A.

Transitive dependencies are important to consider because they can affect your project's behavior and performance. They are automatically resolved and installed by package managers like npm or Yarn when you install your project's direct dependencies. Managing transitive dependencies becomes crucial to ensure that your project uses compatible versions of all dependencies and functions as expected. This is where tools like package-lock.json (in npm) or yarn.lock (in Yarn) come into play, as they help lock down the specific versions of transitive dependencies used in your project to maintain consistency across different environments.

- Why do we not push our node modules to Git? 

Primary reason is that all the metadata of the dependencies our project needs are already stored in package.json and the exact versions are stored in package-lock.json so instead of pushing the huge node modules file to Git, we can just push package.json and package-lock.json to Git and install node modules based on the metadata locally when and where we need them. 

Node modules are not typically pushed to Git repositories for several reasons:

1. **Size:** Node modules can be quite large, especially for projects with many dependencies. Including them in the repository would bloat the size of the repository unnecessarily.

2. **Redundancy:** Node modules are usually installed via package managers like npm or Yarn based on the dependencies listed in the package.json file. Including node modules in the repository would be redundant since they can be easily recreated by running `npm install` or `yarn install` based on the package.json file.

3. **Version Control:** The versions of dependencies listed in the package.json file are what really matter for reproducibility and consistency across different environments. Committing node modules to version control could lead to issues related to version conflicts, as different contributors or environments might have different versions of the same dependency committed.

4. **Build Artifacts:** In some cases, node modules may include build artifacts or platform-specific binaries that are not relevant for version control or may cause issues when shared across different environments.

For these reasons, it's a best practice to add a .gitignore file to your project and include node_modules/ in it. This ensures that node modules are not tracked by Git and not pushed to the repository.