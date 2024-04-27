# Day 1 Inception:

### We can use react by simply importing the cdn links.

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- The order of files is very important we can't link our script(App.js) file before importing the react links.

DO :

```javascript
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="App.js"></script>
```

Don't:

```javascript
<script src="App.js"></script>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

This is because we are using react inside our code. which means we need to import it before we use it. It's like trying to make a chicken curry without chicken you can't.

### Initially we used HTML to write a "Hello World" program.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 1 of Learning React</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div id="root"></div>
    <h1>Hello World</h1>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
  </body>
</html>
```

### Then we used JavaScipt to Write the same "Hello world" it looked something like this,

```javascript
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript!";
const route = document.getElementById("root");
route.appendChild(heading);
```

- `const heading = document.createElement("h1");`: This line creates a new `<h1>` element in the DOM using the `createElement()` method provided by the `document` object. It assigns this newly created element to the variable `heading`.

- `heading.innerHTML = "Hello World from JavaScript!";`: This line sets the inner HTML content of the `<h1>` element created in the previous step to the string "Hello World from JavaScript!". This will be the text displayed inside the `<h1>` element.

- `const route = document.getElementById("root");`: This line retrieves an element from the DOM with the ID "root" using the `getElementById()` method provided by the `document` object. It assigns this element to the variable `route`.

- `route.appendChild(heading);`: This line appends the `<h1>` element (stored in the `heading` variable) as a child of the element with the ID "root" (stored in the `route` variable). This means that the `<h1>` element will be added inside the element with the ID "root" in the HTML document.

### But what if we wanted to create the same basic page using react, how would we do this ?

```javascript
const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
```

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
- heading1: This is the React element that we want to render. It was created earlier using React.createElement() and represents an h1 element with the text "Hello World From React!" and an ID of "heading".

### What if we had to nest elements like in HTML ?

In HTML we generally do this right

```html
<div>
  <div>
    <h1>Hello World!</h1>
  </div>
</div>
```

but how can we do this in react ?

```javascript
const heading1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello World From React!")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
```

if you look at this code closely you can observe that we initially created a div element with a id parents and then nested another div element with a id child which had our h1 element, this is how we can nest elements in react as we do in HTML.

Let's go a step deeper into nesting what we had 2 children and not one and each child had an h1 and h2 elements ?

```javascript
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
```

this code looks painfully long and unreadbale for simple headings tags right, this is where JSX comes in to picture.

Fun exercise :

1. `<h1> Vinay is here </h1>`

copy this and put it inside the root element of the HTML document, and see what happens when the page loads, observe the page while it's loading very very carefully.

2. Take this h1 tag and put it above and below the root div and see what happens and try to find why.

### Assignment before going to the next video :

**What is Emmet?**

Emmet is a powerful toolkit for web developers that significantly speeds up HTML and CSS coding. It's built into many code editors and IDEs, including Visual Studio Code, Sublime Text, and Atom. Emmet provides shortcuts, known as abbreviations or snippets, that expand into full HTML or CSS code when triggered.

Here are some key features of Emmet:

1.1 **Abbreviations**: Emmet allows you to write HTML and CSS code using abbreviations that expand into full code snippets. For example, typing `div` and then pressing Tab will expand into `<div></div>`.

1.2 **Nested Structures**: Emmet simplifies the process of creating nested HTML elements by using the `>` character. For example, `ul>li*3` will expand into a `<ul>` element with three nested `<li>` elements.

1.2 **CSS-like Syntax**: Emmet uses a CSS-like syntax to define properties in CSS code. For example, `p#intro.lead` will expand into `<p id="intro" class="lead"></p>`.

1.4 **Math Expressions**: Emmet supports basic math expressions in numeric values, allowing you to perform simple calculations directly in your code. For example, `div.item-$*3` will expand into `<div class="item-1"></div><div class="item-2"></div><div class="item-3"></div>`.

1.5 **Increment and Decrement**: You can use `+` and `-` to increment or decrement numbers in Emmet expressions. For example, `ul>li.item$*3` will expand into a `<ul>` element with three `<li>` elements with classes `item1`, `item2`, and `item3`.

Emmet greatly improves the efficiency and productivity of web developers by reducing the amount of time and effort required to write HTML and CSS code. It's an essential tool for anyone working with web technologies.

**What is the diffrence between a library and a framework?**

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

**What is CDN and why do we use it?**

CDN stands for Content Delivery Network. It is a distributed network of servers that work together to deliver web content to users based on their geographic location. CDN servers cache static content, such as images, CSS files, JavaScript files, and other media files, and serve them to users from the server that is closest to their location.

Here's why we use CDNs:

1. **Faster Content Delivery**: CDNs reduce latency by serving content from servers that are geographically closer to the user. This results in faster loading times for web pages and better user experience.

2. **Improved Performance**: By offloading the delivery of static content to CDN servers, the origin server is freed up to handle dynamic content and application logic. This can lead to improved performance and scalability of web applications.

3. **Increased Reliability**: CDNs distribute content across multiple servers, which enhances redundancy and fault tolerance. If one server fails, the CDN can route requests to other healthy servers, ensuring high availability of content.

4. **Traffic Offloading**: CDNs can help reduce the load on the origin server by caching and serving static content directly to users. This can result in cost savings by reducing bandwidth usage and server load.

5. **Global Reach**: CDNs have servers located in multiple regions around the world, allowing websites to serve content to users globally with minimal latency.

Overall, CDNs are used to improve the performance, reliability, and scalability of websites and web applications by efficiently delivering content to users worldwide.

**Why is React known as React?**

React, the JavaScript library for building user interfaces, was developed by Facebook. It was initially created by Jordan Walke, a software engineer at Facebook, and it was first deployed on Facebook's newsfeed in 2011.

The name "React" was chosen to reflect the library's main purpose, which is to provide a reactive and efficient way to build user interfaces. The term "reactive" refers to the ability of the UI to respond quickly and dynamically to user input and changes in data.

Additionally, the name "React" also emphasizes the declarative and component-based nature of the library. React allows developers to create reusable UI components that react to changes in data, making it easier to build complex and interactive user interfaces.

Overall, the name "React" encapsulates the core principles and goals of the library, making it a fitting choice for a technology focused on building responsive and dynamic user interfaces.

**What is Crossorigin in Script tag?**

In web development, the same-origin policy is a security measure implemented by web browsers to prevent scripts from one origin (e.g., domain, protocol, or port) from accessing resources on a different origin. This policy helps protect user data and prevent malicious attacks, such as cross-site scripting (XSS) and data theft.

When a script tag attempts to load a script from a different origin than the one hosting the web page, it triggers a cross-origin request. By default, web browsers restrict such requests, and the script will not be executed unless the server hosting the script explicitly allows it using Cross-Origin Resource Sharing (CORS) headers.

To mitigate security risks, modern web browsers enforce the same-origin policy by default. However, developers can configure servers to include CORS headers to allow cross-origin requests for specific resources. This allows scripts from one origin to interact with resources hosted on a different origin in a controlled and secure manner.

**What is the diffrence between React and ReactDOM?**

React and ReactDOM are two different packages provided by the React ecosystem, each serving a distinct purpose:

1. **React**: This is the core React library responsible for defining and creating React elements, components, and managing component lifecycle methods. It provides the functionality to create and manage the virtual DOM, handle state and props, and render React components.

2. **ReactDOM**: ReactDOM is a package that provides DOM-specific methods used for interacting with the actual DOM. It contains methods such as `render()` that are used to render React components into the DOM, `hydrate()` for hydrating a container that already contains HTML content, and `unmountComponentAtNode()` for unmounting React components from the DOM.

In summary, while React focuses on defining and managing components and their behavior, ReactDOM focuses on rendering those components into the browser's DOM and interacting with the actual DOM elements. Both React and ReactDOM work together to enable building interactive and dynamic user interfaces in web applications.

**What is difference between react.development.js and react.production.js files via CDN?**

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

**What is async and defer?**

`async` and `defer` are both attributes that can be used with the `<script>` element in HTML to control the loading and execution of external JavaScript files. However, they work differently:

1. **Async (`async`)**:
   - When you add the `async` attribute to a `<script>` tag, it tells the browser to download the script file asynchronously while continuing to parse the HTML document.
   - The script will be executed as soon as it's downloaded, even if the HTML parsing is not yet complete.
   - There is no guarantee about the order of execution of async scripts. Whichever script finishes downloading first will execute first.
   - Useful for non-blocking scripts that do not rely on other scripts or DOM elements.

Example:

```javascript
<script src="script.js" async></script>
```

2. **Defer (`defer`)**:
   - When you add the `defer` attribute to a `<script>` tag, it tells the browser to download the script file asynchronously while continuing to parse the HTML document.
   - However, the script will not be executed until the HTML parsing is complete.
   - Scripts with the `defer` attribute will be executed in the order they appear in the document.
   - Useful for scripts that need to be executed after the DOM has been fully loaded but do not need to block HTML parsing.

Example:

```javascript
<script src="script.js" defer></script>
```

In summary, `async` scripts are executed as soon as they are downloaded, even if HTML parsing is not complete, while `defer` scripts are executed only after HTML parsing is complete, but before the `DOMContentLoaded` event.

**What are arrow functions?**

Arrow functions are a concise way to write function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more concise syntax compared to traditional function expressions. Arrow functions are particularly useful for writing inline functions or callback functions.

Here's the basic syntax of an arrow function:

```javascript
function add(a, b) {
  return a + b;
}

const add = (a, b) => {
  return a + b;
};
```

Arrow functions have the following characteristics:

1. **Concise Syntax**: Arrow functions have a shorter syntax compared to traditional function expressions, especially for simple functions.

2. **Implicit Return**: If the arrow function body consists of a single expression, the curly braces and `return` keyword can be omitted, and the expression will be implicitly returned.

const add = (a, b) => a + b;

3. **Lexical `this` Binding**: Arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the surrounding code (lexical scoping).

```javascript
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // 'this' refers to the Person object
  }, 1000);
}
```

4. **No `arguments` Object**: Arrow functions do not have their own `arguments` object. If you need to access the arguments passed to an arrow function, you can use the rest parameter syntax (`...args`).

```javascript
const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};
```

Arrow functions are commonly used in modern JavaScript development, especially when writing functional programming-style code, working with arrays or objects, and defining callbacks or event handlers.

# Day 2 Igniting the App:

### What is NPM?

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

### What is a bundler?

A bundler is a tool used in web development to combine multiple separate files, typically written in languages like JavaScript, CSS, or TypeScript, into a single file (or sometimes multiple files) for efficient delivery to the client's web browser. Bundlers are essential for modern web development workflows, especially when working with large-scale applications comprised of numerous modules and dependencies.

Key functions and features of bundlers include:

1. **Module Resolution**: Bundlers resolve module dependencies and import statements in the codebase. They analyze the code to identify dependencies and construct a dependency graph.

2. **Code Transformation**: Bundlers often perform transformations on the source code, such as transpilation (e.g., converting TypeScript to JavaScript) or applying optimizations (e.g., minification, dead code elimination) to reduce file size and improve performance.

3. **Dependency Management**: Bundlers handle the inclusion and ordering of dependencies, ensuring that modules are bundled in the correct order to satisfy dependencies.

4. **Asset Management**: In addition to JavaScript files, bundlers can handle other types of assets such as CSS, images, fonts, and more, bundling them together for efficient delivery.

5. **Code Splitting**: Advanced bundlers support code splitting techniques to divide the bundled code into smaller, more manageable chunks. This enables lazy loading of code, where only the necessary parts of the application are loaded initially, improving page load performance.

There are two kinds, the Dev dependency and the normal version. The Dev dependency version is used when the app is in development and normal version can be also used on production.

Popular bundlers in the JavaScript ecosystem include webpack, Parcel, Rollup, and Browserify. These tools offer various configurations, plugins, and optimizations to tailor the bundling process to the specific needs of a project.

### What is the difference between tilde(~) and caret(^) in this line "parcel": "^2.12.0"(in package.json) ?

In simpler terms,

A caret(^) updates the dependency when a minor upgrade is pushed out such as 2.12.1
whereas
A tilde(~) updates the dependency when there is a major change such as 3.0

It is always advised to use caret(^) as minor upgrades might not break the app but a major update in a dependency might break the app in case of a tilde(~).

### What is package-lock.json and how is it different from package.json?

Package-lock.json keeps track of the exact versions of the dependencies that we have installed in the project.

`package.json` and `package-lock.json` are both important files used in Node.js projects, particularly those managed with npm or Yarn. While they serve related purposes, they have distinct roles:

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

### What are transitive dependencies?

Transitive dependencies refer to the dependencies of your project's direct dependencies. In other words, when your project depends on a library (direct dependency), and that library depends on other libraries, those additional libraries are considered transitive dependencies.

Here's an example to illustrate transitive dependencies:

Let's say your project directly depends on Library A. Library A, in turn, depends on Library B and Library C. In this scenario:

- Library A is a direct dependency of your project.
- Library B and Library C are transitive dependencies of your project because they are dependencies of Library A.

Transitive dependencies are important to consider because they can affect your project's behavior and performance. They are automatically resolved and installed by package managers like npm or Yarn when you install your project's direct dependencies. Managing transitive dependencies becomes crucial to ensure that your project uses compatible versions of all dependencies and functions as expected. This is where tools like package-lock.json (in npm) or yarn.lock (in Yarn) come into play, as they help lock down the specific versions of transitive dependencies used in your project to maintain consistency across different environments.

### Why do we not push our node modules to Git?

Primary reason is that all the metadata of the dependencies our project needs are already stored in package.json and the exact versions are stored in package-lock.json so instead of pushing the huge node modules file to Git, we can just push package.json and package-lock.json to Git and install node modules based on the metadata locally when and where we need them.

Node modules are not typically pushed to Git repositories for several reasons:

1. **Size:** Node modules can be quite large, especially for projects with many dependencies. Including them in the repository would bloat the size of the repository unnecessarily.

2. **Redundancy:** Node modules are usually installed via package managers like npm or Yarn based on the dependencies listed in the package.json file. Including node modules in the repository would be redundant since they can be easily recreated by running `npm install` or `yarn install` based on the package.json file.

3. **Version Control:** The versions of dependencies listed in the package.json file are what really matter for reproducibility and consistency across different environments. Committing node modules to version control could lead to issues related to version conflicts, as different contributors or environments might have different versions of the same dependency committed.

4. **Build Artifacts:** In some cases, node modules may include build artifacts or platform-specific binaries that are not relevant for version control or may cause issues when shared across different environments.

For these reasons, it's a best practice to add a .gitignore file to your project and include node_modules/ in it. This ensures that node modules are not tracked by Git and not pushed to the repository.

### What is npx ?

The `npx` command is a package runner tool that comes with npm version 5.2.0 or higher. It is used to execute Node.js packages directly, without the need to install them globally or locally beforehand.

When you run `npx <command>`, npm checks whether the specified command exists in your local `node_modules/.bin` directory or in the npm cache. If the command is found, `npx` runs it. If the command is not found locally, `npx` downloads the latest version of the package from the npm registry, executes the command, and then removes the package.

For example, you can use `npx` to run a package's executable script:

npx create-react-app my-app

This command will download the latest version of the `create-react-app` package from the npm registry, execute it to create a new React application named `my-app`, and then clean up the downloaded package afterward.

Using `npx` is particularly useful when you want to run one-off commands or scripts without cluttering your global or local npm installations with dependencies that you only use occasionally.

### Why is it better to not use cdn links to install react rather do it using npm ?

Using npm to install React instead of relying on CDN (Content Delivery Network) links offers several advantages:

1. **Version Control**: With npm, you have precise control over the version of React you are installing. You can specify the exact version or use semantic versioning to ensure compatibility with your project. With CDN links, you typically get the latest version, which might introduce breaking changes or compatibility issues with your existing code.

2. **Dependency Management**: npm allows you to manage dependencies effectively. When you install React using npm, it automatically installs all required dependencies and keeps track of them in your project's `package.json` file. This makes it easier to share your project with others and ensures consistent development environments across different machines.

3. **Offline Development**: When you install React using npm, all dependencies are downloaded and stored locally in your project's `node_modules` directory. This means you can develop offline without relying on an internet connection to fetch React files from a CDN.

4. **Build Process Integration**: Using npm to install React fits seamlessly into your project's build process. You can use tools like webpack, Babel, or TypeScript to compile and bundle your code, optimizing performance and ensuring browser compatibility. CDN links do not integrate as easily into build processes and may require additional configuration to work with build tools.

5. **Security and Reliability**: npm provides a secure and reliable way to manage dependencies. Packages are regularly audited for security vulnerabilities, and you can easily update to patched versions when security issues are discovered. CDN links might not offer the same level of security and reliability, as you are relying on external servers to serve the files.

Overall, while CDN links offer convenience for quickly prototyping or experimenting with React, using npm provides more control, consistency, and reliability for production-grade applications.

### Why can we use normal script tag when we have import statements in our JavaScript file ?

When using import statements in JavaScript files, it indicates that the code is written using ES modules (ECMAScript modules), which is a standardized way of organizing and importing/exporting code in JavaScript.

The `<script>` tag traditionally used in HTML files doesn't support ES module syntax. Instead, you need to use a special attribute called `type="module"` to inform the browser that the script should be treated as an ES module. This tells the browser to load the script as a module and handle imports correctly.

Here's how you would use the `<script>` tag with `type="module"` to include a JavaScript file with import statements in an HTML file:

<script type="module" src="your-script.js"></script>

Using `type="module"` allows you to leverage the ES module syntax, including `import` and `export` statements, enabling better code organization and reuse.

### How does parcel help in development ?

Parcel is a web application bundler that simplifies the process of building modern web applications by automating tasks such as transpilation, bundling, and optimization. Here's how Parcel helps in development:

1. **Zero Configuration**: Parcel requires little to no configuration out of the box. You can start using it immediately without the need to set up complex configuration files like webpack.

2. **Automatic Dependency Resolution**: Parcel automatically resolves dependencies in your project. This means you don't have to explicitly specify import paths for modules, as Parcel figures it out for you.

3. **Built-in Development Server**: Parcel comes with a built-in development server, allowing you to run your application locally during development. The development server includes features like hot module replacement (HMR), which updates modules in the browser without requiring a full page refresh.

4. **Support for Various File Types**: Parcel supports a wide range of file types out of the box, including JavaScript, CSS, HTML, images, and more. This makes it easy to import and use different types of assets in your project without additional configuration.

5. **Optimized Production Builds**: In addition to development builds, Parcel can generate optimized production builds for your application. It automatically minifies and bundles your code for production, optimizing performance and reducing file sizes.

6. **Easy Integration with Frameworks and Libraries**: Parcel seamlessly integrates with popular JavaScript frameworks and libraries like React, Vue.js, and Angular. You can use Parcel with these frameworks without any additional configuration.

Overall, Parcel simplifies the development workflow by providing a fast and efficient bundling process with minimal setup required, allowing developers to focus more on writing code and less on configuring build tools.

### What is hot module replacement and what is the role of parcel in it?

Hot Module Replacement (HMR) is a feature in modern web development that allows developers to update modules in an application without requiring a full page refresh. Instead of reloading the entire page, HMR only updates the modules that have changed, preserving the application's state and providing a faster development experience.

When a developer makes changes to a module (e.g., a JavaScript file), the updated module is sent to the browser, which applies the changes without reloading the entire page. This means that developers can see their changes reflected immediately, making the development process more efficient and productive.

Parcel plays a crucial role in enabling Hot Module Replacement by providing built-in support for this feature. When you run your application using Parcel's development server, HMR is automatically enabled, allowing you to take advantage of this feature without any additional configuration. Parcel handles the necessary wiring behind the scenes, making it seamless for developers to use HMR in their projects.

Additionally, Parcel's HMR implementation is optimized for speed and reliability, ensuring that module updates are applied quickly and accurately. This helps developers maintain a fast and responsive development workflow, as they can see their changes reflected in the browser almost instantly without needing to manually refresh the page.

### How does parcel track files ?

Parcel uses a content-based approach to track files and their dependencies, rather than relying on explicit configuration files or build scripts. It employs a technique called content hashing to generate unique identifiers (hashes) for each file based on its content. These hashes are used to determine if a file has changed since the last build.

When Parcel builds a project, it recursively traverses the file tree starting from the entry point(s) specified in the project configuration. As it encounters files, it calculates a hash for each one and stores this information in a persistent cache. Additionally, Parcel analyzes the dependencies of each file to construct a dependency graph, which it uses to understand the relationships between different files in the project.

During subsequent builds, Parcel compares the hashes of the files in the project with those stored in the cache. If a file's hash has changed, Parcel knows that the file has been modified and triggers a rebuild of the affected parts of the project. This incremental approach to building allows Parcel to efficiently update only the files that have changed, speeding up the development workflow.

Overall, Parcel's content-based approach, combined with its use of content hashing and dependency analysis, enables efficient and reliable tracking of files and their dependencies, making it a powerful tool for building modern web applications.

### Caching in parcel ?

Yes, Parcel does cache certain information to improve build performance. When Parcel builds a project, it stores various data in a cache directory, including:

1. **File metadata**: Parcel caches information about files, such as their paths, sizes, and modification timestamps.

2. **Content hashes**: Parcel calculates and stores hashes of file contents to determine whether a file has changed since the last build.

3. **Dependency graphs**: Parcel analyzes the dependencies of each file and constructs dependency graphs. These graphs are cached to avoid redundant analysis during subsequent builds.

4. **Compiled output**: Parcel caches compiled output, such as bundled JavaScript, CSS, and other assets, to avoid recompilation when the source files haven't changed.

By caching this information, Parcel can significantly speed up build times, especially for large projects with complex dependency trees. Additionally, Parcel automatically invalidates the cache when files or their dependencies change, ensuring that the build remains up to date.

### What all does parcel do ?

- Dev Build
- Local server
- HMR == Hot Module Replacement
- File watching algoritm - written in C++
- Caching - gives you faster builds
- Image optimizasion
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Spliting
- Diffrential Bundiling - it bundles diffrently for each browser and its versions
- Diagonostics
- Error Handling
- HTTPS support
- Tree Shaking - remove unused code
- Diffrent Dev and Production bundles

Note : While running a build you might encounter an error saying the entry point you sepcified is not the main mentioned in package.json file so it adviced to get rid of main in the package.json

### What is BrowsersList and how does it help in development ?

Browserslist is a configuration file or setting that specifies which browsers and browser versions your application should support. It is commonly used in web development tools like bundlers (e.g., webpack, Parcel), CSS preprocessors (e.g., Autoprefixer), and JavaScript transpilers (e.g., Babel).

Here's how Browserslist helps in development:

1. **Compatibility**: Browserslist allows you to define a list of target browsers and their versions that your application should support. This ensures that your website or web application functions correctly and looks consistent across different browsers and browser versions.

2. **Vendor Prefixing**: Browserslist is often used in conjunction with tools like Autoprefixer to automatically add vendor prefixes to CSS properties based on the specified target browsers. This saves developers from manually adding prefixes for different browser versions, improving development efficiency and reducing potential errors.

3. **Optimized Bundling**: Build tools like webpack and Parcel use Browserslist to determine which browser-specific code transformations and optimizations are necessary during the bundling process. This helps generate optimized bundles tailored to the target browsers, resulting in smaller file sizes and improved performance.

4. **Development Workflow**: Browserslist configurations can be shared across different development tools and environments, providing consistency in browser targeting throughout the development workflow. This simplifies configuration management and ensures that development, testing, and production environments use the same browser compatibility settings.

Overall, Browserslist helps streamline the development process by providing a standardized way to define target browsers and automate browser-specific tasks, ultimately enhancing cross-browser compatibility and user experience.

### Termial commands used to run the project

`npx parcel index.html`
`npx parcel build index.html`

# Day 3 Laying the foundation :

### If you joining a company and find it difficult to start a new project then just go to there package.json and see in the scripts section if there are any commmands that run the app for you.

So basically we can mention scripts inside our package.json that run our app such as,

"start" : "parcel index.html",

"build" : "parcel build indx.html",

now instead of running the,
**npx parcel index.html** we can just use **npm run start**
similarly **npm run build** for production ready application.

### What is React.createElement ?

`React.createElement` is a method used in React to create a React element. It takes three arguments:

1. **Type**: The type of element to create. This can be a string representing an HTML element (e.g., `"div"`, `"span"`, `"h1"`) or a reference to a React component (e.g., `MyComponent`).

2. **Props**: An object containing properties (or props) to be passed to the element or component being created.

3. **Children**: Additional arguments representing the children of the element. These can be other React elements, strings, or numbers.

For example:

const element = React.createElement('div', { className: 'container' }, 'Hello, world!');

This creates a React element representing a `<div>` with a class name of `'container'` and the text content `'Hello, world!'`.

`React.createElement` creates a JavaScript object. Specifically, it creates a React element, which is a lightweight representation of a DOM element or a component.

The structure of the object created by `React.createElement` typically looks like this:

```jsx
{
type: 'div', // Type of element or component
props: { // Props passed to the element or component
className: 'container',
children: 'Hello, world!'
}
}
```

This object describes what should appear on the screen. React then uses this object to construct and update the DOM accordingly. Each time you call `React.createElement`, you are describing what you want to render, and React takes care of rendering it efficiently.

### What is JSX ?

JSX stands for JavaScript XML. It's an extension to JavaScript syntax that allows developers to write HTML-like code directly within JavaScript. JSX makes it easier to create and manipulate the DOM elements in React applications by blending HTML-like syntax with JavaScript.

Here's an example of JSX code:

```jsx
const element = <h1>Hello, world!</h1>;
```

In the above example, `<h1>Hello, world!</h1>` is JSX syntax, which looks similar to HTML but is actually a JavaScript expression. When transpiled, JSX is converted into regular JavaScript function calls, typically using `React.createElement()` under the hood.

The equivalent JavaScript code for the JSX above would be:

```jsx
const element = React.createElement("h1", null, "Hello, world!");
```

JSX allows developers to write code that is more readable and closely resembles the final output. It's widely used in React applications for defining the UI components.

### React.createElement vs JSX

In React, `React.createElement` and JSX are two different ways to create React elements, but they serve the same purpose.

**React.createElement**:
`React.createElement` is a function provided by the React library that creates React elements. It takes three or more arguments:

1. The type of the element (a string for HTML elements or a reference to a React component).
2. An object representing the props or attributes of the element.
3. The children of the element (can be a string, another React element, or an array of React elements).

Example:

```javascript
const element = React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", null, "Hello, World!")
);
```

This code creates a `div` element with a class name of `container`, which contains an `h1` element with the text "Hello, World!".

**JSX (JavaScript XML)**:
JSX is a syntax extension to JavaScript that allows you to write HTML-like code within your JavaScript files. It provides a more intuitive and declarative way to create React elements compared to using `React.createElement` directly.

Example:

```jsx
const element = (
  <div className="container">
    <h1>Hello, World!</h1>
  </div>
);
```

This JSX code produces the same output as the previous `React.createElement` example, but it's more readable and resembles the structure of HTML.

**Comparison:**

1. **Syntax**: JSX provides a more concise and readable syntax compared to `React.createElement`, making it easier to understand and write React components.

2. **Tooling Support**: Most modern development tools, such as code editors and linters, provide better support for JSX syntax, offering features like autocompletion, syntax highlighting, and error checking.

3. **Performance**: When using JSX, the code is transpiled (converted) into `React.createElement` calls during the build process. The performance of JSX and `React.createElement` is essentially the same, as the final output is the same.

4. **Readability and Maintainability**: JSX code is generally more readable and easier to maintain, especially for larger and more complex components, as it closely resembles HTML and allows for better code organization.

While `React.createElement` is the underlying function used by React to create elements, most developers prefer to use JSX syntax because it provides a more intuitive and developer-friendly way to write React components. JSX is widely adopted and recommended in the React community due to its readability, tooling support, and ease of use.

However, it's important to note that JSX is not a requirement for using React. You can still create React elements using `React.createElement` directly if you prefer, but the majority of React developers use JSX for its benefits.

### Benifits of JSX

JSX (JavaScript XML) provides several benefits when working with React. Here are some of the key advantages of using JSX:

1. **Improved Readability**: JSX syntax resembles HTML, making it easier for developers to understand and reason about the structure of a React component's user interface. This familiarity with HTML-like syntax can help developers quickly grasp the structure and logic of a component.

2. **Better Maintainability**: With JSX, the markup and logic are kept together in the same file, making it easier to maintain and modify components. This co-location of markup and logic can improve developer productivity and reduce the cognitive load of switching between different files or languages.

3. **Code Reusability**: JSX promotes the creation of reusable UI components. Components can be easily composed, nested, and passed props, leading to a more modular and reusable codebase.

4. **Tooling Support**: Most modern development tools, such as code editors, linters, and IDEs, provide excellent support for JSX syntax. This includes features like syntax highlighting, code completion, and error checking, which can significantly improve developer productivity and catch potential issues early.

5. **Simplified Injection of Logic**: With JSX, you can easily inject JavaScript expressions and logic into the markup by using curly braces `{ }`. This allows you to create dynamic and interactive user interfaces by seamlessly combining markup and logic.

6. **Improved Developer Experience**: JSX provides a more intuitive and declarative way to define user interfaces compared to creating React elements programmatically using `React.createElement`. This can lead to a better developer experience and make it easier to reason about and modify the UI.

7. **Performance Optimization**: While JSX may introduce an additional step of transpilation (converting JSX to `React.createElement` calls), modern build tools optimize this process, and the performance impact is generally negligible compared to the benefits JSX provides.

8. **Encourages Best Practices**: JSX encourages developers to follow best practices, such as separating concerns between presentation and logic, and creating reusable components. This can lead to more maintainable and scalable codebases.

9. **Familiarity with HTML**: Developers familiar with HTML can easily understand and work with JSX syntax, reducing the learning curve when starting with React.

10. **Ecosystem Support**: JSX is widely adopted and supported by the React ecosystem, including libraries, tools, and community resources, making it easier to find solutions and collaborate with other developers.

While JSX is not a strict requirement for using React, it has become the de facto standard for writing React components due to its numerous benefits and the enhanced developer experience it provides.

### Is JSX valid JavaScript Syntax ?

No, JSX is not valid JavaScript syntax on its own. JSX is a syntax extension that allows you to write XML-like syntax within JavaScript code. It is commonly used in React applications to describe the structure of UI components.

While browsers and JavaScript engines don't natively understand JSX, it is typically transformed into regular JavaScript code using a tool like Babel before being executed in the browser. This transformation process converts JSX syntax into regular function calls that create React elements.

So, while JSX isn't directly understood by JavaScript engines, it's a widely used and accepted syntax in the React ecosystem thanks to tools like Babel that can transpile it into JavaScript code that browsers can understand.

### Components in React

In React, components are the building blocks of user interfaces. Components can be created using either function components or class components (although class components are being phased out in favor of function components with hooks). Here's how you can define components in React using JSX syntax:

**1. Function Components**:
Function components are the recommended way to create components in modern React applications. They are simple JavaScript functions that return JSX code representing the component's UI.

```jsx
import React from "react";

// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// or with arrow function syntax
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
```

**2. Class Components**:
Class components are the traditional way of creating components in React, using ES6 classes. While they are still supported, function components with hooks are generally preferred.

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**3. Nested Components**:
Components can be nested inside other components, allowing for composition and reusability.

```jsx
import React from "react";

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <Greeting />
    </div>
  );
}

function Greeting() {
  return <p>This is a nested component.</p>;
}
```

**4. Component with Props**:
Components can receive data from their parent components through props (properties).

```jsx
import React from "react";

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <Greeting message={props.message} />
    </div>
  );
}

function Greeting(props) {
  return <p>{props.message}</p>;
}
```

**5. Component with State (Class Component)**:
Class components can have state, which is an internal data store for managing component-specific data.

```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

**6. Component with Hooks (Function Component)**:
Function components can use hooks to manage state and lifecycle methods.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

These examples demonstrate how to create and use components in React using JSX syntax. Components can be combined and nested to build complex user interfaces, and they can manage state and props to create dynamic and interactive applications.

### What is Transpiling ?

Imagine you have a secret code that only you and your friend understand, but your teacher can't read it. Now, if you want to show your secret code to your teacher, you'll need to translate it into something your teacher can understand. That's kind of what transpiling means in programming.

When we say code is transpiled, it means that we're taking code written in one language, like modern JavaScript with all its fancy features, and converting it into an older version of JavaScript that all browsers can understand. It's like translating your secret code into a language that everyone can read, so that it works correctly on all computers, not just yours and your friend's.

Transpiling is a process in which source code written in one programming language is converted into equivalent source code in another programming language. This is commonly done when developers want to write code using features from a newer version of a language but need it to be compatible with older versions or different environments.

In the context of JavaScript, transpiling often refers to converting modern JavaScript code (written using newer syntax or features) into equivalent code that is compatible with older browsers or environments. For example, developers might use transpilers like Babel to convert code written using ES6 (ECMAScript 2015) syntax into ES5 (ECMAScript 5) syntax, which is supported by older browsers. This allows developers to take advantage of the latest language features while ensuring their code works across different platforms.

### What is babel and how does it work ?

Babel is a popular JavaScript compiler that enables developers to write code using the latest ECMAScript (JavaScript) syntax and features, while ensuring compatibility with older browsers and environments that may not support those features natively. Here's how it works:

1. **Parsing**: Babel first parses the input code using a JavaScript parser. This step involves breaking down the code into its individual components (tokens) and building an abstract syntax tree (AST) representation.

2. **Transformation**: Once the code is parsed, Babel applies a series of transformations to the AST. These transformations typically involve converting modern ECMAScript syntax and features (such as arrow functions, classes, template literals, etc.) into equivalent code that is compatible with older JavaScript environments. Babel also supports plugins that allow developers to customize the transformation process or add support for experimental language features.

3. **Generation**: After applying transformations, Babel generates the output code by converting the modified AST back into JavaScript source code. This output code is typically optimized and minified to improve performance and reduce file size.

4. **Output**: Finally, the transpiled code is outputted either to a file or directly to the browser, depending on how Babel is configured.

Overall, Babel plays a crucial role in modern JavaScript development by allowing developers to take advantage of new language features without sacrificing compatibility with older browsers or environments. It's an essential tool in the JavaScript ecosystem, particularly for projects that target a wide range of platforms.

### Explain about babel's role in converting JSX to build websites using React ?

Babel plays a crucial role in converting JSX (JavaScript XML) code into standard JavaScript code that browsers can understand when building websites with React.

React uses JSX, a syntax extension to JavaScript, which allows developers to write HTML-like code within JavaScript files. This JSX code is not directly understood by web browsers, which expect regular JavaScript. This is where Babel comes into play.

Babel is a JavaScript compiler that transpiles modern JavaScript code (including JSX) into older versions of JavaScript that can be understood by most web browsers. Here's how Babel helps with JSX in React:

1. **Parsing**: Babel first parses the code containing JSX and creates an Abstract Syntax Tree (AST) representation of the code.

2. **Transforming**: Babel then applies specific plugins or presets to transform the JSX code in the AST. One of these plugins is the `@babel/plugin-transform-react-jsx` plugin, which is responsible for converting JSX into regular JavaScript function calls.

   For example, the JSX code:

```jsx
   const element = <h1>Hello, World!</h1>;

   is transformed by Babel into something like:

   const element = React.createElement("h1", null, "Hello, World!");
```

Here, the `React.createElement` function is used to create a React element object that represents the JSX element.

3. **Code Generation**: After transforming the AST, Babel generates the final, transpiled JavaScript code that can be understood by web browsers or bundlers like Webpack or Rollup.

By converting JSX into standard JavaScript function calls, Babel enables React to work seamlessly with web browsers that don't natively support JSX syntax. This process also allows developers to write more concise and readable code using JSX, which is then converted into JavaScript that browsers can execute.

It's important to note that Babel is not limited to JSX transformation; it can also transpile modern JavaScript features (e.g., arrow functions, classes, destructuring) into older, browser-compatible versions of JavaScript. This ensures that websites built with React and other modern JavaScript libraries can be used across a wide range of browsers, including older ones that may not fully support the latest JavaScript features.

### What is the difference between React element and React Component ?

In React, there is a distinction between a React element and a React component:

1. **React Element**:

   - A React element is a lightweight object that represents a DOM element (or a component) in the React virtual DOM.
   - It is the simplest form of a React component and is typically created using JSX syntax.
   - React elements are immutable and describe what you want to see on the screen.

   Example:

```jsx
const element = <h1>Hello, world!</h1>;
```

2. **React Component**:

   - A React component is a JavaScript class or function that returns a React element.
   - Components allow you to split the UI into independent, reusable pieces, each responsible for a specific part of the UI.
   - Components can be created using either class-based syntax (class components) or function-based syntax (functional components).
   - They can also accept inputs called props and maintain their own internal state.

   Example (Class Component):

```jsx
class Greeting extends React.Component {
   render() {
   return <h1>Hello, {this.props.name}!</h1>;
   }
   }

   Example (Functional Component):

   function Greeting(props) {
   return <h1>Hello, {props.name}!</h1>;
   }
```

Its basically a function that returns a jsx code.

In summary, a React element is a description of what you want to see on the screen, while a React component is a JavaScript class or function that generates React elements based on input data (props) and state. Components are the building blocks of React applications, allowing for modularity, reusability, and maintainability.

### How to create and render a React Element ?

```jsx
// React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Vinay is learning React.
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

### How to create and render a React Component ?

Note: this is a functional component

```jsx
const Heading = () => (
  <div id="container">
    <h1 className="heading">Hi I'm Vinay.</h1>
  </div>
);

root.render(<Heading />);
```

### What if we have multiple components then how would we code and render it ?

```jsx
const Title = () => (
  <h1 className="head" tabIndex="5">
    Hi this is Vinay.
  </h1>
);
const Heading = () => (
  <div id="container">
    <Title />
    <h1 className="heading">I'm learning React.</h1>
  </div>
);
root.render(<Heading />);
```

It is basically like nesting.

### What is Component composition ?

Component composition in React refers to the practice of building complex user interfaces by combining smaller, reusable components together. Instead of creating one large component that handles all the functionality and rendering, you break down the UI into smaller, manageable pieces, each responsible for a specific part of the interface.

Here's how component composition works:

1. **Reusable Components**: You create small, reusable components that encapsulate a specific piece of functionality or UI. For example, you might have a `Button` component, a `Navbar` component, or a `Card` component.

2. **Combine Components**: You combine these smaller components together to create more complex UIs. For example, you might use the `Button` component inside the `Navbar` component, and then use the `Navbar` component inside a `Header` component.

3. **Nested Components**: Components can be nested inside one another to create a hierarchy of UI elements. This allows you to build up complex UIs from simpler building blocks.

4. **Passing Props**: Components can communicate with each other by passing props. Props allow you to pass data from a parent component to a child component, enabling customization and reusability.

5. **Reusable and Modular**: Component composition promotes code reusability and modularity. You can easily reuse components across different parts of your application, and changes to one component don't affect other parts of the UI.

Overall, component composition is a fundamental concept in React development that encourages a modular and reusable approach to building user interfaces. By breaking down your UI into smaller, composable components, you can create more maintainable, scalable, and flexible codebases.

Example :

```jsx
import React from "react";

// Button component
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={{ padding: "5px 10px", fontSize: "16px" }}>
      {children}
    </button>
  );
};

// Navbar component
const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <Button onClick={() => console.log("Home clicked")}>Home</Button>
      <Button onClick={() => console.log("About clicked")}>About</Button>
      <Button onClick={() => console.log("Contact clicked")}>Contact</Button>
    </nav>
  );
};

// App component combining Navbar and other components
const App = () => {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Navbar />
      <p>This is the main content of the website...</p>
    </div>
  );
};

export default App;
```

In this example:

We have a Button component that represents a simple button.
We have a Navbar component that renders a navigation bar using the Button component.

Finally, we have the App component, which combines the Navbar component with other content to create the main application layout.
This demonstrates how smaller components (Button and Navbar) are composed together to create a larger, more complex component (App). Each component is responsible for a specific part of the UI, making the code easier to manage, reuse, and maintain.

### Can we inject ant JS code inside perenthesis in jsx ? if yes give a couple of examples of how it works.

Yes, you can inject JavaScript code inside parentheses in JSX. This is a powerful feature of JSX that allows you to embed expressions and execute logic within the JSX code.

Here are a couple of examples to illustrate how it works:

1. **Rendering Dynamic Content**:

```jsx
import React from "react";

const App = () => {
  const name = "John Doe";
  const age = 30;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

export default App;
```

In this example, we have two JavaScript variables `name` and `age`. We can inject their values within the JSX code by wrapping them with curly braces `{}`. The expressions inside the curly braces will be evaluated, and their values will be rendered as part of the JSX output.

2. **Conditional Rendering**:

```jsx
import React from "react";

const App = () => {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome</h1>
      {isLoggedIn ? <p>You are logged in</p> : <p>Please log in to continue</p>}
    </div>
  );
};

export default App;
```

In this example, we use a ternary operator inside the curly braces to conditionally render different elements based on the value of `isLoggedIn`. If `isLoggedIn` is `true`, the first part of the ternary operator `<p>You are logged in</p>` will be rendered; otherwise, the second part `<p>Please log in to continue</p>` will be rendered.

You can inject any valid JavaScript expression inside the curly braces in JSX, including function calls, calculations, and more complex logic. Here's another example that demonstrates rendering a list of items:

```jsx
import React from "react";

const App = () => {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

In this example, we use the `map` method to iterate over the `items` array and render a list item (`<li>`) for each item inside the `<ul>` element.

It's important to note that while you can inject JavaScript code inside curly braces in JSX, you should avoid putting statements like `if` or `for` statements directly inside JSX. Instead, you should move the logic to separate JavaScript functions or variables and then use those functions or variables within the JSX code.

### {TitleComponent} vs {} vs {} in JSX

In JSX (JavaScript XML), the curly braces `{}` are used to embed expressions or JavaScript code within the JSX markup. The way these curly braces are used can vary depending on the context. Here's an explanation of the different usages:

1. **`{TitleComponent}`**:
   When you have a pair of curly braces containing a capitalized identifier like `TitleComponent`, it is interpreted as a React component. React treats these capitalized identifiers as custom components, and they will be rendered within the JSX markup.

   Example:

   ```jsx
   import React from "react";
   import TitleComponent from "./TitleComponent";

   const App = () => {
     return (
       <div>
         <h1>My App</h1>
         {TitleComponent} {/* Renders the TitleComponent */}
       </div>
     );
   };
   ```

2. **`{expression}`**:
   When you have a pair of curly braces containing an expression (e.g., a variable, a function call, or any valid JavaScript expression), the expression will be evaluated, and its result will be rendered within the JSX markup.

   Example:

   ```jsx
   const name = "John";
   const greetUser = () => `Hello, ${name}!`;

   const App = () => {
     return (
       <div>
         <h1>{name}</h1> {/* Renders 'John' */}
         <p>{greetUser()}</p> {/* Renders 'Hello, John!' */}
       </div>
     );
   };
   ```

3. **`{}`**:
   An empty set of curly braces is used when you want to create a fragment or an empty component. Fragments are a way to group multiple elements together without adding an extra node to the DOM tree.

   Example:

   ```jsx
   const App = () => {
     return (
       <>
         <h1>Hello</h1>
         <p>This is a fragment.</p>
       </>
     );
   };
   ```

   In this example, `<>...</>` is a shorthand syntax for `<React.Fragment>...</React.Fragment>`, which is a way to create a fragment without adding an extra node to the DOM tree.

It's important to note that JSX is just a syntax extension for writing React components, and it ultimately gets transpiled into regular JavaScript function calls using `React.createElement()`. The curly braces are used to embed JavaScript expressions within the JSX markup, allowing you to create dynamic and interactive user interfaces.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
// React Components
const title = (
  <h1 className="head" tabIndex="5">
    {" "}
    Hi this is Vinay as a Functional.{" "}
  </h1>
);
const Title = () => (
  <h1 className="head" tabIndex="5">
    Hi this is Vinay as a component.{" "}
  </h1>
);
const Title1 = () => (
  <h1 className="head" tabIndex="5">
    {" "}
    Hi this is Vinay as a component 1.{" "}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
// React Component // Class based Components - old
// Functional Components - new
const Heading = () => (
  <div id="container">
    {title}
    <Title />
    <Title></Title>
    {Title1()}
    <h1 className="heading">I'm learning React.</h1>
  </div>
);
root.render(<Heading />);
```
Explaination for code of day 3: 

Sure, let's go through the code and explain the concepts used in it.

1. **Importing React and ReactDOM**:
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
```
These lines import the necessary modules from the React and ReactDOM libraries. The `React` module is used for creating React components, and the `ReactDOM` module provides methods for rendering those components to the browser's DOM (Document Object Model).

2. **React Components**:
In this code, we have three different ways of defining React components:

```jsx
const title = (
  <h1 className="head" tabIndex="5">
    Hi this is Vinay as a Functional.
  </h1>
);
```
This is a JSX element stored in a variable `title`. It's not a React component per se, but it can be rendered within a React component.

```jsx
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
```
These are functional components defined using arrow functions. Functional components are the modern and recommended way of creating components in React. They are simple JavaScript functions that return JSX elements representing the component's UI.

3. **Creating a Root for Rendering**:
```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
```
This line creates a root for rendering React components. The `createRoot` method from `ReactDOM` is used to create a new root for rendering, and it takes the DOM element where the React app will be rendered (in this case, the element with the id `"root"`).

4. **Rendering Components**:
```jsx
const Heading = () => (
  <div id="container">
    {title}
    <Title />
    <Title></Title>
    {Title1()}
    <h1 className="heading">I'm learning React.</h1>
  </div>
);

root.render(<Heading />);
```
Here, we have another functional component called `Heading`. Inside this component, we render various elements and components:

- `{title}`: This renders the JSX element stored in the `title` variable.
- `<Title />` and `<Title></Title>`: These render the `Title` component.
- `{Title1()}`: This calls the `Title1` function component and renders its return value.
- `<h1 className="heading">I'm learning React.</h1>`: This renders a regular JSX element.

Finally, we call `root.render(<Heading />)` to render the `Heading` component inside the DOM element with the id `"root"`.

5. **JSX Syntax**:
The code utilizes JSX syntax, which is a syntax extension to JavaScript that allows you to write HTML-like code within your JavaScript files. JSX elements are transpiled into regular JavaScript function calls using `React.createElement()` during the build process.

In the code, you can see JSX elements like `<h1>`, `<div>`, etc. These elements have attributes like `className` (instead of `class` in regular HTML) and `tabIndex`. JSX also allows embedding JavaScript expressions within curly braces `{}`, as demonstrated with `{title}` and `{Title1()}`.

6. **Components and Composition**:
React encourages modular and reusable code through the use of components. In this example, we have multiple components (`Title`, `Title1`, and `Heading`) that can be composed together to build the final UI. This promotes code reusability and separation of concerns.

Overall, this code demonstrates the basics of creating and rendering React components using functional components, JSX syntax, and ReactDOM for rendering the components to the browser's DOM.

# Day 4 Talk is cheap, show me the code:



