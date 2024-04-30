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

### What are props in React, explain with an example?

In React, `props` (short for properties) are a way to pass data from a parent component to a child component. They are essentially inputs or parameters that you can pass to a React component, similar to function arguments in JavaScript.

Here's an example to illustrate the concept of props:

Let's say we have a parent component called `ParentComponent` and a child component called `ChildComponent`. The `ParentComponent` wants to pass some data to the `ChildComponent`.

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hello from Parent";
  const age = 25;

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} age={age} />
    </div>
  );
};

export default ParentComponent;
```

In the `ParentComponent`, we define two variables `message` and `age`. We then pass these variables as props to the `ChildComponent` using the syntax `<ChildComponent message={message} age={age} />`.

Now, let's look at the `ChildComponent`:

```jsx
// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {props.message}</p>
      <p>Age from Parent: {props.age}</p>
    </div>
  );
};

export default ChildComponent;
```

In the `ChildComponent`, we receive the props from the parent as an object (`props`). We can then access the individual prop values using dot notation (`props.message` and `props.age`).

When the `ParentComponent` is rendered, the output will be:

```
Parent Component
Child Component
Message from Parent: Hello from Parent
Age from Parent: 25
```

Props are read-only in the child component, meaning that the child component cannot modify the prop values directly. If you need to modify the data, you should manage it in the parent component and pass down the updated data as new props to the child component.

Props can be of any JavaScript data type, including strings, numbers, booleans, objects, arrays, and even functions (which are commonly used for event handling and communication between parent and child components).

Here's an example of passing a function as a prop:

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent clickHandler={handleClick} />
    </div>
  );
};

export default ParentComponent;
```

```jsx
// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.clickHandler}>Click me</button>
    </div>
  );
};

export default ChildComponent;
```

In this example, the `ParentComponent` defines a function `handleClick` and passes it as a prop (`clickHandler`) to the `ChildComponent`. The `ChildComponent` can then use this function by attaching it to an event handler, such as `onClick`.

Props are a fundamental concept in React and allow for efficient and reusable component composition. They enable data to flow from parent components to child components, making it easier to manage and update the application state.

### What is config driven UI?

Config Driven UI, also known as Configuration Driven UI or Configurable UI, is an approach to building user interfaces where the layout, components, behaviors, and even the overall structure of the UI are determined by a configuration file or data source, rather than being hard-coded in the application code.

The main idea behind Config Driven UI is to separate the UI concerns from the application logic, making it easier to modify, customize, and adapt the UI without changing the core application code. This approach can be particularly useful in scenarios where the UI needs to be highly customizable, such as:

1. **Multi-tenant applications**: Where different clients or tenants may require different UI configurations.
2. **Highly configurable applications**: Where end-users need to customize the UI according to their preferences or workflows.
3. **White-label applications**: Where the same application needs to be rebranded or reskinned for different customers or partners.

Here's a general overview of how Config Driven UI operates:

1. **Configuration Source**: The UI configuration data can come from various sources, such as a JSON file, a database, or an API. This configuration data typically defines the structure, layout, components, styles, and behaviors of the UI.

2. **Configuration Parser**: The application includes a parser or interpreter that reads and processes the configuration data. This component is responsible for translating the configuration data into a format that can be used to render the UI.

3. **UI Rendering Engine**: Based on the parsed configuration data, the UI rendering engine dynamically generates the UI components, applies styles, and sets up event handlers and behaviors. This can be done either at runtime or during a build process, depending on the specific implementation.

4. **UI Components**: The UI is typically built using reusable and configurable components that can be easily composed and customized based on the configuration data.

5. **Configuration Management**: Depending on the application requirements, the configuration data may be managed centrally, allowing administrators or authorized users to update and modify the UI configurations without needing to change the application code.

Here are some examples of Config Driven UI implementations:

1. **React with JSON Configuration**: In a React application, you can define the UI structure, components, and layouts using JSON or JavaScript objects. These configurations can be imported and used to dynamically render the UI components based on the provided data.

2. **Angular with Configuration Service**: Angular applications can leverage services to fetch and manage UI configurations from various sources, such as API endpoints or static files. These configurations can then be used to render and customize the UI components and templates.

3. **Vue.js with Configurable Components**: Vue.js provides a powerful component system that allows for creating highly configurable and composable UI components. These components can be driven by configuration data, enabling dynamic rendering and customization of the UI.

4. **Low-code/No-code Platforms**: Many low-code and no-code platforms, such as Mendix, OutSystems, and Microsoft Power Apps, heavily rely on Config Driven UI principles. These platforms provide visual editors or configuration interfaces that allow users to define and customize the UI without writing code.

5. **Enterprise Applications**: Enterprise applications, such as CRM systems or ERP software, often employ Config Driven UI approaches to provide flexible and customizable user interfaces that can be tailored to different departments, roles, or business processes.

Config Driven UI can provide several benefits, including improved maintainability, easier customization, and better separation of concerns between the UI and application logic. However, it also introduces additional complexity in managing and validating the configuration data, as well as potential performance implications if not implemented efficiently.

## why do we need key while using loops in react ?

In React, when you render a list of elements using a loop, it's essential to provide each rendered element with a unique `key` prop. The `key` prop helps React identify which items have changed, are added, or are removed from the list. React uses these keys to efficiently update the UI without re-rendering the entire list.

Here's why using keys is important:

1. **Efficient Updates**: When an item in the list changes, React compares the new list with the previous one using the keys. This allows React to identify which items have been added, removed, or modified, enabling it to update only the necessary components in the DOM without re-rendering the entire list.

2. **Preservation of State**: Keys help React maintain component state across re-renders. Without keys, React might mistakenly re-order elements based solely on their positions in the array, potentially leading to state loss or incorrect rendering.

3. **Avoiding Duplicate Key Warnings**: Providing unique keys ensures that each item in the list has a distinct identifier. This prevents React from issuing warnings or errors about duplicate keys, which can cause unexpected behavior in your application.

In summary, using keys is essential for maintaining the integrity and efficiency of your React components, especially when rendering lists or dynamically generated content.

## why can't we use index as key in react while looping why is it regarded as bad practice?

Using the array index as a key in React is not recommended because it can lead to various issues and unintended behaviors in your application. Here's why it's considered bad practice:

1. **Unstable Key Assignments**: Array indices are not stable identifiers. If items are added, removed, or reordered in the array, the indices may change. As a result, React may mistakenly re-render components unnecessarily or fail to update them correctly.

2. **Performance Impact**: When items are added or removed from the beginning or middle of the list, using array indices as keys can cause React to re-render many components unnecessarily. This can degrade performance, especially for large lists, as React may have to recreate and reconcile the entire list.

3. **Potential Key Collisions**: If the items in your list don't have unique and stable identifiers, using array indices as keys may lead to key collisions. This can result in incorrect rendering or unexpected behavior, as React may mistake different items for the same one based solely on their position in the array.

4. **Accessibility Concerns**: Using array indices as keys can cause issues with accessibility, particularly for screen readers. Screen readers rely on stable and meaningful identifiers to navigate and understand the content of a webpage. Using array indices as keys may result in confusing or non-sequential reading order for users relying on screen readers.

To avoid these issues, it's recommended to use stable and unique identifiers as keys whenever possible. If your data doesn't have such identifiers, you can generate unique keys based on the item's content or use libraries like `uuid` to create unique identifiers. This ensures that React can efficiently and accurately update your components when the data changes.

## Is JSX mandatory for React?

No, JSX is not mandatory for React. JSX is an optional syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files. It was introduced with React to make it easier to work with the component structure and UI elements.

While JSX is widely used in React projects and recommended by the React team, it is possible to create React components and build React applications without using JSX. You can use plain JavaScript to create React elements using React's `createElement` method.

Here's an example of creating a React element without JSX:

```jsx
const element = React.createElement(
  'div',
  null,
  'Hello, World!'
);
```

This code creates a `div` element with the text "Hello, World!" using React's `createElement` function.

However, as your components become more complex, writing React code without JSX can become verbose and harder to read. JSX provides a more concise and familiar syntax that closely resembles HTML, making it easier to understand and maintain your code.

Most React developers prefer to use JSX because it simplifies the process of creating and working with components. However, if you have a specific reason to avoid JSX, you can build React applications using plain JavaScript.

## Is ES6 mandatory for React?

No, ES6 (also known as ES2015) is not mandatory for React. React can be used with any version of JavaScript, including older versions like ES5.

However, many modern React codebases and tutorials heavily utilize ES6 features like arrow functions, classes, template literals, destructuring, and import/export statements. These features can make React code more concise, readable, and maintainable.

Here are a few reasons why ES6 is commonly used with React:

1. **Class Components**: Before the introduction of React Hooks, class components were the primary way to create components with state and lifecycle methods. These components relied on ES6 class syntax.

2. **Arrow Functions**: Arrow functions provide a more concise syntax for defining function expressions and lexically bind the `this` value, which is useful for event handlers and callback functions in React.

3. **Destructuring**: Destructuring makes it easier to extract values from objects and arrays, which is helpful when working with props and state in React components.

4. **Template Literals**: Template literals allow for more readable string interpolation, which can be useful for constructing dynamic strings or JSX elements.

5. **Module System**: ES6 introduced a standard module system with `import` and `export` statements, which is used extensively in React projects to manage dependencies and organize code.

While you can use React with older versions of JavaScript, most modern React projects and tools (like Create React App) assume ES6 or a more recent version of JavaScript by default. If you need to support older browsers or environments that don't support ES6, you'll need to transpile (convert) your code using a tool like Babel.

In summary, while ES6 is not strictly mandatory for React, using ES6 features can make your React code more readable, maintainable, and aligned with modern JavaScript best practices.

**"{TitleComponent}" vs {< TitleComponent/>} vs{< TitleComponent></ TitleComponent>} in JSX?**

In JSX, all three of these forms are valid and represent different ways of rendering a React component, but they have slightly different implications and use cases.

1. `{TitleComponent}`:
This form is used when you want to render a React component as a self-closing tag. It is suitable for components that don't require any children or additional props. This syntax is a shorthand version of `{<TitleComponent />}`.

2. `{<TitleComponent />}`:
This syntax is also used for rendering a self-closing component. It's an explicit way of writing a component tag without any children or additional props. This form is more common and more widely used than the shorthand version.

3. `{<TitleComponent></TitleComponent>}`:
This syntax is used when you want to render a component with children or additional props. The opening and closing tags allow you to nest other elements or components inside the `TitleComponent`, or pass props as attributes in the opening tag.

Here's an example to illustrate the differences:

```jsx
// Rendering a self-closing component
<div>
  {TitleComponent} {/* or {<TitleComponent />} */}
</div>

// Rendering a component with children
<div>
  {<TitleComponent>Hello, World!</TitleComponent>}
</div>

// Rendering a component with props
<div>
  {<TitleComponent title="My Title" />}
</div>

// Rendering a component with children and props
<div>
  {<TitleComponent title="My Title">Hello, World!</TitleComponent>}
</div>
```

In general, you should use the `{<TitleComponent />}` form when rendering a self-closing component without children or props, and the `{<TitleComponent>...</TitleComponent>}` form when rendering a component with children or additional props.

The shorthand `{TitleComponent}` form is less common and can make your code harder to read if you're not familiar with this syntax. It's usually recommended to use the more explicit `{<TitleComponent />}` or `{<TitleComponent>...</TitleComponent>}` forms for better readability and consistency.

## How can I write comments in JSX?

In JSX, you can write comments using the same syntax as JavaScript comments. There are two types of comments you can use:

1. **Single-line comments**
Single-line comments use two forward slashes (`//`) and span until the end of the line. For example:

```jsx
import React from 'react';

const App = () => {
  // This is a single-line comment
  return <div>Hello, World!</div>;
}

export default App;
```

2. **Multi-line comments**
Multi-line comments are enclosed between `/*` and `*/`. They can span multiple lines. For example:

```jsx
import React from 'react';

const App = () => {
  /*
   * This is a
   * multi-line
   * comment
   */
  return <div>Hello, World!</div>;
}

export default App;
```

You can place comments anywhere in your JSX code, both inside and outside of the JSX tags. However, it's important to note that comments inside JSX tags must be enclosed in curly braces `{}` because JSX treats any text without curly braces as a string literal.

```jsx
const App = () => {
  return (
    <div>
      {/* This is a comment inside JSX tags */}
      Hello, World!
    </div>
  );
}
```

Comments are useful for adding explanations, notes, or temporary disabling code during development. However, it's generally recommended to keep comments concise and clear, as excessive or unnecessary comments can make the code harder to read and maintain.

## What is <React.Fragment></React.Fragment>and <></> ?

`<React.Fragment></React.Fragment>` and `<></>` are both ways to define a React Fragment, which is a special type of component that doesn't render any extra HTML elements.

Fragments are used when you need to return multiple elements from a React component, as React components can only return a single root element. Instead of wrapping the elements in a `div` or other HTML tag, you can use a Fragment to avoid introducing unnecessary nodes in the DOM.

Here's an example that demonstrates the difference between using a `div` wrapper and a Fragment:

```jsx
// Using a div wrapper
const MyComponent = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  );
}

// Using a Fragment
const MyComponent = () => {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </React.Fragment>
  );
}

// Using the shorthand <></> syntax (introduced in React 16.2)
const MyComponent = () => {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </>
  );
}
```

All three examples above render the same output, but the last two use Fragments instead of a `div` wrapper.

The `<React.Fragment></React.Fragment>` syntax is the longer, more explicit way to use a Fragment, while `<></>`is a shorthand syntax introduced in React 16.2. Both achieve the same result, but the shorthand syntax is more concise and easier to read.

Fragments are lightweight and don't add any extra nodes to the DOM, making them preferable over wrapping elements in `div` or other HTML tags when you don't need those extra elements for styling or other purposes.

It's important to note that Fragments can also be used with `keys` when rendering lists of elements, as keys must be placed on the outermost element in a list.

## What is Virtual DOM?

The Virtual DOM (Virtual Document Object Model) is a programming concept used in modern JavaScript UI libraries and frameworks like React, Vue, and others. It is a lightweight in-memory representation of the actual DOM (Document Object Model), which is the tree-like structure representing the HTML elements on a web page.

The main purpose of the Virtual DOM is to improve the performance of updating the UI in React applications. When the state of a React component changes, the Virtual DOM compares the new state with the previous state and calculates the minimum number of changes needed to update the actual DOM. This process is called "reconciliation" or "diffing."

Here's how the Virtual DOM works:

1. **Render**: When a React component is rendered, React creates a Virtual DOM tree, which is a lightweight JavaScript object representation of the actual DOM.

2. **Diffing**: When the component's state or props change, React creates a new Virtual DOM tree. It then compares (diffs) the new Virtual DOM tree with the previous Virtual DOM tree to identify the minimal set of changes needed to update the actual DOM.

3. **Batch Updates**: After the diffing process, React applies the minimal set of changes to the actual DOM in a batch operation, which is more efficient than directly manipulating the DOM for each individual change.

The Virtual DOM provides several benefits:

1. **Improved Performance**: Manipulating the actual DOM is a relatively slow operation, as it involves updating the layout and repainting the UI. By minimizing the number of DOM updates, React can significantly improve the performance of UI updates, especially in complex applications.

2. **Efficient Diffing**: The Virtual DOM diffing algorithm is highly optimized and can quickly identify the minimal set of changes needed to update the UI, reducing the number of expensive DOM operations.

3. **Cross-Platform**: The Virtual DOM is a conceptual representation of the UI, allowing React to be used for rendering on different platforms, such as native mobile apps (React Native) or server-side rendering (Next.js, Gatsby).

It's important to note that the Virtual DOM is an implementation detail of React and is not directly exposed to developers. React handles the creation, diffing, and updating of the Virtual DOM internally, allowing developers to focus on building components and managing state.

While the Virtual DOM introduces some overhead in terms of memory and processing, the performance benefits it provides are generally considered worthwhile, especially for complex and frequently updating UIs.

## What is Reconciliation in React?

Reconciliation is the process in React where it updates the actual DOM to match the new desired state represented by the React elements. It is the process that follows after the Virtual DOM has been created and diffed with the previous Virtual DOM representation.

When a React component's state or props change, React creates a new Virtual DOM tree based on the updated state or props. This new Virtual DOM tree is then compared (diffed) with the previous Virtual DOM tree to identify the minimum set of changes needed to update the actual DOM.

The reconciliation process consists of the following steps:

1. **Render the New Virtual DOM Tree**: React renders the new Virtual DOM tree based on the updated state or props of the component.

2. **Diff the New Virtual DOM Tree with the Previous Virtual DOM Tree**: React compares the new Virtual DOM tree with the previous Virtual DOM tree and calculates the minimum set of changes required to update the actual DOM.

3. **Apply the Minimal Set of Changes to the Actual DOM**: React applies the minimal set of changes identified during the diffing process to the actual DOM, updating only the necessary nodes. This process is designed to be efficient and minimize expensive DOM operations.

React uses a heuristic algorithm called the "diffing algorithm" to determine the minimal set of changes needed to update the actual DOM. This algorithm is based on two key assumptions:

1. **Different Types of Elements**: If two elements have different types (e.g., `<div>` and `<span>`), React will tear down the old tree and build the new tree from scratch.

2. **Same Types of Elements**: If two elements have the same type, React will update the attributes of the DOM node and recursively update the children.

Additionally, React uses "keys" to identify which child elements have changed, been added, or been removed. By assigning unique keys to each element in a list, React can efficiently update only the necessary elements in the list, without having to re-render the entire list.

The reconciliation process is an essential part of React's performance optimization strategy. By minimizing the number of DOM operations required to update the UI, React can efficiently update even complex user interfaces without causing significant performance issues.

## What is React Fiber?

React Fiber is a complete rewrite of React's core algorithm, introduced in React 16.8. It is an ongoing re-implementation of React's reconciliation algorithm, which is responsible for efficiently updating the React components and their respective DOM nodes when changes occur.

The main goals of React Fiber were to:

1. **Improve Performance**: React Fiber aims to provide better performance, especially for applications with frequent updates and complex user interfaces.

2. **Better React Component Tree Traversal**: React Fiber introduces a new way of traversing and updating the React component tree, allowing better use of system resources and prioritizing updates for critical components.

3. **Support for Async Rendering**: React Fiber enables asynchronous rendering, which means that React can pause and resume rendering work as needed, allowing higher-priority updates to take precedence and improving the responsiveness of the application.

4. **Improved Error Handling**: React Fiber provides better error handling and recovery mechanisms, making it easier to understand and fix issues in complex React applications.

5. **Layout Thrashing Reduction**: React Fiber reduces the amount of layout thrashing (unnecessary DOM rearrangements) that can occur during updates, improving the overall user experience.

React Fiber achieves these goals by introducing several new concepts and features:

1. **Fiber Nodes**: React Fiber represents the component tree using a linked list data structure called "Fiber nodes." These nodes contain information about the component, its children, and their state.

2. **Incremental Rendering**: With Fiber, React can pause and resume rendering work as needed, allowing higher-priority updates to take precedence and improving the responsiveness of the application.

3. **Prioritization of Work**: React Fiber allows developers to prioritize certain updates over others, ensuring that critical updates are handled first and improving the overall user experience.

4. **Improved Commit Phase**: React Fiber introduces a new "commit phase" that handles the actual updating of the DOM, reducing the impact of layout thrashing.

5. **Backwards Compatibility**: React Fiber is designed to be backwards compatible, allowing existing React applications to upgrade without breaking changes.

While React Fiber is a significant architectural change, it is largely transparent to developers writing React components. However, it provides a solid foundation for future performance improvements and new features in React.

It's important to note that React Fiber is an ongoing effort, and its capabilities and benefits will continue to evolve with future releases of React.

## Why we need keys in React? When do we need keys in React?

In React, keys are used to identify unique elements in a list or array of elements. They help React keep track of which items have changed, been added, or been removed between renders. This is especially important when you're dynamically rendering a list of components, as React needs a way to efficiently update and re-order the components in the list without having to completely re-render the entire list.

We need to use keys in React in the following situations:

1. **Rendering Lists or Arrays**: Whenever you're rendering a list or array of components, you should provide a unique key for each item in the list. For example, when rendering a list of `<li>` elements, each `<li>` should have a unique key.

```jsx
const numbers = [1, 2, 3, 4, 5];

const ListItems = () => (
  <ul>
    {numbers.map(number => (
      <li key={number.toString()}>
        {number}
      </li>
    ))}
  </ul>
);
```

2. **Reordering or Updating Items**: If you need to reorder or update items in a list, React uses the keys to determine which components need to be re-rendered, updated, or moved. Without keys, React would have to re-render the entire list, which can lead to performance issues, especially for large lists.

3. **Dynamically Added or Removed Items**: When items are dynamically added or removed from a list, keys help React identify which components have been added, removed, or moved, so it can update the DOM efficiently.

4. **Nested Components**: If you have nested components within a list, you'll need to provide keys at the top-level of the nested components as well.

It's important to choose keys that are unique and stable across re-renders. A good choice for a key is a unique identifier from your data source, such as an `id` or a combination of unique values. Using indexes as keys should be avoided if the order of items in the list may change, as it can lead to performance issues and unexpected behavior.

If you don't provide keys when rendering a list of components, React will display a warning in the console, reminding you to add keys. While your application will still work without keys, it may have performance issues and display unexpected behavior, especially when updating or reordering items in the list.

## Can we use index as keys in React?

Using the index as a key in React is possible but not recommended in most cases. React specifically warns against using indexes as keys, as it can lead to performance issues and unexpected behavior when the order of items in the list changes.

Here's why using indexes as keys is generally not a good idea:

1. **Performance Issues**: When the order of items in the list changes (e.g., reordering, adding, or removing items), React will re-render all components in the list even if their content hasn't changed. This is because React uses the keys to identify which components have been added, removed, or moved, and when indexes are used as keys, React can't reliably determine which components have actually changed.

2. **Unexpected Behavior**: If you insert an item at the beginning of the list, React will re-render all existing items, as their indexes will have changed. This can lead to unexpected behavior, such as losing component state or causing unnecessary re-renders.

3. **Key Uniqueness**: Indexes are not guaranteed to be unique across different render passes. If you have multiple lists on the same page, their indexes could collide, leading to unpredictable behavior.

However, there are certain scenarios where using the index as a key can be acceptable:

1. **Static Lists**: If you have a list that will never be reordered and its items will never be added or removed, using indexes as keys is acceptable since the order will never change.

2. **Rendering a Simple List of Non-Component Elements**: If you're rendering a simple list of non-component elements (e.g., `<li>` elements), using indexes as keys may be acceptable since there's no component state or lifecycle methods involved.

In general, it's recommended to use unique and stable identifiers from your data source as keys. For example, if you're rendering a list of items from an API, you could use the `id` property from the API response as the key. If no unique identifier is available, you can generate a unique key based on a combination of the item's properties.

Here's an example of using a unique identifier as a key:

```jsx
const people = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const ListItems = () => (
  <ul>
    {people.map(person => (
      <li key={person.id}>
        {person.name}
      </li>
    ))}
  </ul>
);
```

By following this practice, you'll ensure that React can efficiently update and reorder components in your list, improving performance and avoiding unexpected behavior.

## What are props in React and how can we use them ?

In React, `props` (short for properties) are a way to pass data from a parent component to a child component. They are a way to make components reusable and configurable, allowing you to customize their behavior and appearance.

Here are the main points about props in React:

1. **Props are read-only**: Once a parent component passes props to a child component, the child component cannot modify those props. This helps maintain the one-way data flow in React, where data flows from parent to child.

2. **Props are immutable**: Props should be treated as immutable data, meaning they should not be directly modified within the component. If you need to modify some data based on a prop, you should use state instead.

3. **Props can be any data type**: Props can be strings, numbers, booleans, arrays, objects, functions, or even React elements.

There are two ways to use props in React:

**1. Functional Components:**
In functional components, props are passed as an argument to the function:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="John" />;
```

You can also use destructuring to access specific props directly:

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Usage
<Welcome name="John" />;
```

**2. Class Components:**
In class components, props are accessible through `this.props`:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Usage
<Welcome name="John" />;
```

Here are some additional ways to use props:

- **Spreading props:** You can use the spread operator (`...`) to pass all props from a parent component to a child component:

```jsx
const ChildComponent = (props) => <div {...props} />;
```

- **Prop types:** You can use the `prop-types` library to define the expected data types for your component's props, which helps catch bugs and document your component's API.

- **Default props:** You can define default values for props using the `defaultProps` static property in class components or the function component's second argument.

- **Children prop:** React components can also receive children elements as a special `children` prop.

Props are a fundamental concept in React, allowing you to create reusable and composable components. By passing data through props, you can build complex user interfaces from small, isolated building blocks.

## What is a Config Driven UI ?

A Config Driven UI (User Interface) is an approach to building user interfaces where the structure, behavior, and appearance of the UI components are determined by configuration data, rather than being hard-coded directly into the application code.

In a Config Driven UI, the UI components are designed to be flexible and adaptable, with their behavior and rendering controlled by external configuration files or data sources. These configuration sources can be in various formats such as JSON, YAML, XML, or even databases.

The main idea behind Config Driven UIs is to separate the concerns of the UI logic and the UI configuration, making it easier to modify, extend, or customize the UI without having to change the application code. This approach provides several benefits:

1. **Flexibility and Extensibility**: By decoupling the UI logic from the configuration, it becomes easier to add, modify, or remove UI components without touching the core application code. This allows for greater flexibility and extensibility in the long run.

2. **Customization**: Config Driven UIs enable easier customization of the UI for different users, environments, or scenarios. Different configurations can be loaded to provide tailored experiences or branding for different clients or use cases.

3. **Simplified Code Maintenance**: Since the UI logic is separated from the configuration, the codebase becomes more maintainable and easier to reason about. Developers can focus on building robust UI components, while UI designers or product managers can manage the configuration files without needing to dive into the code.

4. **Dynamic UI Updates**: With a Config Driven UI, it's possible to update the UI dynamically at runtime by loading new configurations, without requiring a full application restart or redeployment.

5. **Separation of Concerns**: By separating the UI logic and configuration, it promotes a better separation of concerns, making it easier for different teams (e.g., developers and designers) to work on their respective areas without stepping on each other's toes.

Config Driven UIs are often used in enterprise applications, content management systems, or any application that requires a high degree of flexibility and customization in the UI. However, it's important to strike a balance between configurability and complexity, as overly complex configuration systems can become difficult to manage and maintain.

## What did we do in this episode :

[Day 4 code](https://docs.google.com/document/d/1DNmkEywI8R1QDVvv-Fqhrstl-Z7nsECn2-sNVCo-i6k/edit?usp=sharing)

We built the basic UI of a food delivery application in react using components:

It displays a header with a logo and navigation buttons, and a body section with a search bar and a container for displaying restaurant cards. Each restaurant card shows information about a restaurant, including its image, name, cuisine types, rating, cost for two, and delivery time.

The application is structured into several components:

1. `Header` component: Renders the header section with the logo and navigation buttons.
2. `RestaurantCard` component: Renders a card displaying information about a restaurant.
3. `Body` component: Renders the search bar and a container that maps over a list of restaurants (`resList`) and renders a `RestaurantCard` component for each restaurant.
4. `AppLayout` component: The root component that combines the `Header` and `Body` components to create the overall layout of the application.

The restaurant data is hardcoded in the `resList` array, which is an array of objects containing information about different restaurants.

When the application is rendered using `ReactDOM.createRoot` and `root.render(<AppLayout/>)`, it displays the header, search bar, and a list of restaurant cards on the web page.

There are multiple concepts that we're used to build this code:

These concepts include :

Certainly! This code covers several important React concepts:

1. **Components**: The code is divided into reusable components like `Header`, `RestaurantCard`, `Body`, and `AppLayout`. This demonstrates the concept of building user interfaces using composable components in React.

2. **JSX**: The code uses JSX syntax, which allows you to write HTML-like code within JavaScript. JSX is a syntax extension that makes it easier to create and work with React components.

3. **State and Props**: Although not explicitly demonstrated in this code, the concept of state and props is fundamental in React. `RestaurantCard` receives data as props (`resData`) from its parent component (`Body`). This showcases the one-way data flow in React, where data is passed from parent to child components via props.

4. **Rendering Lists**: The `Body` component renders a list of `RestaurantCard` components by mapping over the `resList` array. This demonstrates how to render dynamic lists in React using the `map` function.

5. **Conditional Rendering**: While not present in this specific code snippet, React provides various techniques for conditional rendering, such as using ternary operators, logical operators, or conditional statements.

6. **React DOM**: The code utilizes `ReactDOM.createRoot` to create a root for rendering the React application and `root.render(<AppLayout/>)` to render the root component (`AppLayout`) into the DOM.

7. **Functional Components**: All the components in the provided code are functional components, which are simpler and more lightweight compared to class components in React.

8. **Hooks**: Although not used in this particular code, React Hooks (like `useState`, `useEffect`, etc.) are essential for managing state and side effects in functional components.

9. **Component Composition**: The `AppLayout` component demonstrates component composition by combining the `Header` and `Body` components to create the overall application layout.

10. **Styling**: The code includes inline styles (e.g., `style={{ backgroundColor: "#BACD92" }}`) for styling components, although it's recommended to use CSS modules or styled components for better separation of concerns and maintainability.

Overall, this code provides a solid foundation for understanding and working with React components, JSX syntax, rendering lists, and component composition.

# Day 5 Let's get Hooked :

## Website Structure :

 1. Header 
 * logo
 * Navigaion buttons

 2. Body

    2.1 Search
 
     2.2 Card Container (for restaurants)
 *   Restaurant cards
 *    - Image
 *    - Name
 *    - Rating
 *    - Cuisine
 *    - Delivery time

 3. Footer
 * - Copyrights
 * - Links
 * - Address 
 * - Contact info
 
## What diffrence does .js vs .jsx make to the app ?

The difference between naming files with `.js` and `.jsx` extensions in a React application is primarily a matter of convention and personal preference. It does not have any direct impact on the performance or bundling/packaging of the application.

Here's a breakdown of the differences and implications:

1. **File Extension Convention**:
   - `.js` is the standard file extension for JavaScript files.
   - `.jsx` is a conventional extension used specifically for files containing JSX (JavaScript XML) syntax, which is commonly used in React components.

2. **Performance Impact**:
   - The file extension itself does not affect the performance of your React application. Both `.js` and `.jsx` files are treated the same way by the React toolchain and bundlers.

3. **Bundling and Packaging**:
   - Modern bundlers like Webpack and Rollup can automatically handle both `.js` and `.jsx` files without any special configuration.
   - During the bundling process, JSX code in `.jsx` files is transpiled (converted) to regular JavaScript by tools like Babel. This transpilation happens regardless of whether the file has a `.js` or `.jsx` extension.
   - The bundlers and packagers treat both file extensions equally and do not differentiate between them in terms of bundling or packaging logic.

4. **Code Editor Integration**:
   - Some code editors and IDEs may provide better syntax highlighting, auto-completion, and other features for `.jsx` files since they can easily identify them as React components containing JSX syntax.
   - However, most modern code editors can also recognize JSX syntax in `.js` files and provide similar features, although you may need to configure them accordingly.

5. **Team Conventions**:
   - The choice between `.js` and `.jsx` often comes down to team conventions and personal preferences.
   - Some developers prefer using `.jsx` for files containing JSX syntax to make it more explicit that the file contains React components with JSX.
   - Others prefer using `.js` for all JavaScript files, including those with JSX, to maintain consistency and avoid having multiple file extensions for the same language.

In summary, while the `.jsx` extension is a convention specifically for React components with JSX syntax, using `.js` or `.jsx` does not have a direct impact on the performance or bundling/packaging of your React application. It's more a matter of personal preference, team conventions, and potentially better code editor integration when using the `.jsx` extension.

## What are the two types of export/import ? 

In React development, there are two main kinds of exports and imports: named exports/imports and default exports/imports.

1. **Named Exports/Imports**:
   - **Export**: With named exports, you can export multiple values (variables, functions, classes, etc.) from a module by explicitly naming them. Each named export is wrapped in `{}` brackets.
   ```javascript
   // Named exports
   export const add = (a, b) => a + b;
   export const subtract = (a, b) => a - b;
   ```
   - **Import**: When importing named exports, you must use the same names specified in the export statements.
   ```javascript
   // Importing named exports
   import { add, subtract } from './math';
   console.log(add(5, 3)); // Output: 8
   console.log(subtract(5, 3)); // Output: 2
   ```

   **Use Cases**:
   - When a module exports multiple values that need to be imported individually.
   - When importing only specific values from a module to keep the code clean and readable.

2. **Default Exports/Imports**:
   - **Export**: With default exports, you can export only one value (variable, function, class, etc.) from a module as the default export. The default export is not wrapped in `{}` brackets.
   ```javascript
   // Default export
   const greet = (name) => `Hello, ${name}!`;
   export default greet;
   ```
   - **Import**: When importing a default export, you can name the imported value anything you want.
   ```javascript
   // Importing default export
   import greeting from './greet';
   console.log(greeting('John')); // Output: Hello, John!
   ```

   **Use Cases**:
   - When a module exports a single value that represents the main functionality of the module.
   - When importing a value that doesn't have a specific name or needs to be renamed for clarity.

In summary, named exports are suitable for exporting multiple values from a module, while default exports are useful when exporting a single value as the main feature of the module. The choice between them depends on the structure and requirements of your application.