# What is `NPM`?

- Node package manager (npm) is a package manager and a software register but it's also a place where developers can find, build and manage code packages.

# What is `Parcel/Webpack`? Why do we need it?

- Parcel and Webpack are popular bundlers that help developers manage complex projects by combining dependencies into a single, optimized file. Both tools reduce the time it takes to transfer data and files to the server from the application.

# What is `.parcel-cache`?

- .parcel-cache is a directory created by the Parcel bundler to store cached data related to the project being built. Parcel uses this cache to speed up subsequent builds by reusing previously processed files and dependencies.

The .parcel-cache directory typically contains cached versions of processed files, dependency information, and other metadata that Parcel uses to efficiently bundle the project. It is safe to delete the .parcel-cache directory if you want to clear the cache, but Parcel will recreate it during the next build process.

Overall, the .parcel-cache directory helps improve the performance of Parcel by avoiding redundant processing of files and dependencies, especially in large projects with complex build configurations.

# What is `npx` ?

- npx is a command-line tool that comes with npm (Node Package Manager) version 5.2.0 and higher. It is used to execute Node.js packages without having to install them globally. The npx command installs the package (if not already installed) in a temporary directory and then runs the executable, after which the installed package is removed.

For example, if you want to run a package called create-react-app to create a new React application, you can use npx like this:

`npx create-react-app my-react-app`

This command will download the latest version of create-react-app, use it to scaffold a new React application in a directory called my-react-app, and then remove the create-react-app package.

Using npx in this way is useful for running packages that you only need to use once or infrequently, as it avoids cluttering your global npm packages with dependencies that are only used occasionally.

# What is difference between `dependencies` vs `devDependencies`?

- dependencies and devDependencies are both types of dependencies in a Node.js project managed by npm (Node Package Manager) or Yarn. They serve different purposes and are used in different contexts:

dependencies:

Dependencies listed under dependencies in the package.json file are packages that are required for the application to run in production.
These packages are installed when someone runs npm install or yarn install to install the project's dependencies.
Examples of dependencies include libraries and frameworks used by the application, such as React, Express, or lodash.
devDependencies:

Dependencies listed under devDependencies in the package.json file are packages that are only needed for development and testing purposes.
These packages are not necessary for the application to run in production and are typically tools or libraries used during development, such as testing frameworks (e.g., Jest, Mocha), build tools (e.g., webpack, Babel), or linters (e.g., ESLint, Prettier).
DevDependencies are not installed when someone installs the project for production (npm install --production or yarn install --production), which helps keep the production build leaner.
In summary, dependencies are packages required for the application to run, while devDependencies are packages used for development and testing purposes. Separating them allows for better management of the project's dependencies and ensures that only necessary packages are included in the production build.

# What is Tree Shaking?

- Tree shaking is a term commonly used in the context of JavaScript module bundlers, such as webpack or Rollup. It refers to the process of eliminating dead code (i.e., code that is not used or referenced anywhere in the application) from the final bundle.

The term "tree shaking" comes from the idea of shaking a tree to remove dead leaves, keeping only the necessary parts. In the context of JavaScript bundling, tree shaking analyzes the static module import/export statements in your code and only includes the code that is actually imported and used, discarding the rest.

Tree shaking is particularly useful for optimizing the size of your JavaScript bundles, especially when using large libraries or frameworks. By removing unused code, tree shaking reduces the size of the bundle, resulting in faster loading times for your web application.

To take advantage of tree shaking, it's important to use ES modules (import and export statements) and ensure that the modules you are using are designed to be tree-shakable, meaning they export specific parts of their code that can be individually imported.

# What is Hot Module Replacement?

- Hot Module Replacement (HMR) is a feature in webpack, a popular module bundler for JavaScript applications, that allows developers to update modules in a running application without a full page reload. This means that you can see changes to your code reflected in the browser almost instantly, without losing the current state of your application.

Here's how Hot Module Replacement works:

Watch Mode: When webpack is running in watch mode (webpack --watch), it keeps track of changes to the source files.

Module Replacement: When a change is detected in a module, webpack replaces the updated module in the running application without reloading the entire page.

Preserve State: HMR preserves the application's state, such as the current component's state in a React application, so that you don't lose data or have to manually navigate back to the same state.

Fast Updates: HMR updates are typically much faster than a full page reload, making the development process more efficient.

Hot Module Replacement is particularly useful during development, as it allows developers to see the effects of their code changes immediately, without the need to manually refresh the page. This can lead to a more productive and enjoyable development experience.

# What is `.gitignore`? What should we add and not add into it?

- .gitignore is a file used by Git to specify which files and directories should be ignored and not tracked by version control. When you add a file or directory to .gitignore, Git will ignore it and not include it in commits or consider it when checking for changes.

Here's what you should add to a .gitignore file:

Node modules: Ignore the node_modules directory, as it contains all the dependencies of your Node.js project and can be large and contain files that don't need to be tracked.

Dependency lock files: Ignore lock files like package-lock.json or yarn.lock, as these are generated by package managers and are used to lock dependency versions. They are not meant to be tracked in version control.

Compiled files: Ignore any files that are generated as a result of the build process, such as compiled code, minified files, or transpiled files. These can be regenerated from the source code and don't need to be tracked.

Environment-specific files: Ignore files that contain environment-specific configurations or sensitive information, such as .env files or configuration files specific to your development environment.

Logs and temporary files: Ignore log files, temporary files, and any other files that are generated during the development or build process and are not needed for the project.

Editor or IDE-specific files: Ignore files that are specific to your code editor or IDE, such as .vscode, .idea, or .DS_Store files.

Here's an example of a .gitignore file for a Node.js project:

bash
Copy code

# Ignore node_modules directory

node_modules/

# Ignore dependency lock files

package-lock.json
yarn.lock

# Ignore compiled files

dist/
build/

# Ignore environment-specific files

.env

# Ignore logs and temporary files

_.log
_.tmp

# Ignore editor or IDE-specific files

.vscode/
.idea/
.DS_Store
It's important to add only files and directories that are specific to your project or development environment to .gitignore. Avoid adding generic rules that could ignore important files or directories needed for the project to function correctly.

# What is the difference between `package.json` and `package-lock.json`?

- package.json and package-lock.json are both files used in Node.js projects to manage dependencies, but they serve different purposes and are used in different ways.

package.json:

package.json is a file that contains metadata about the project and its dependencies.
It includes information such as the project name, version, description, entry point, scripts, and dependencies.
Developers can manually edit package.json to add, remove, or update dependencies, as well as to configure scripts or specify project metadata.
When running npm install or yarn install, the dependencies listed in package.json are installed into the node_modules directory.
package-lock.json:

package-lock.json is a file generated by npm (Node Package Manager) to lock down the versions of dependencies installed in a project.
It ensures that the same versions of dependencies are installed across different machines or environments, making the project more deterministic and reducing the risk of dependency conflicts.
The package-lock.json file is automatically generated and updated by npm whenever dependencies are added, removed, or updated using npm install.
Developers typically do not manually edit package-lock.json, as it is meant to be managed by npm.
In summary, package.json is a file used to define the project metadata and dependencies, while package-lock.json is a file generated by npm to lock down the versions of dependencies installed in the project, ensuring consistency across different environments.

# Why should I not modify `package-lock.json`?

- Dependency consistency: package-lock.json is intended to ensure that the exact same versions of dependencies are installed across different environments. Modifying it manually can lead to inconsistencies in dependency versions, which can cause issues when the project is built or deployed in different environments.

Automatic generation: package-lock.json is automatically generated and updated by npm whenever dependencies are added, removed, or updated using npm install. Manually modifying it can lead to conflicts with the automatically generated content.

Reproducibility: By not modifying package-lock.json, you ensure that the project can be easily reproduced in the exact same state on different machines or by other developers. This is important for maintaining a consistent development environment.

Dependency resolution: package-lock.json includes information about the resolved dependencies and their sub-dependencies. Manually modifying it can result in incorrect dependency resolution, leading to unexpected behavior in the project.

Overall, it's best to let npm manage package-lock.json automatically to ensure that your project's dependencies are consistent and correctly resolved across different environments.

# What is `node_modules` ? Is it a good idea to push that on git?

- node_modules is a directory that contains all the dependencies of a Node.js project. When you run npm install or yarn install, the package manager downloads and installs the dependencies listed in the package.json file into the node_modules directory.

It is generally not a good idea to push the node_modules directory to git for the following reasons:

Size: The node_modules directory can be quite large, especially for projects with many dependencies. Including it in the git repository can bloat the repository size and slow down cloning and fetching operations.

Reproducibility: It's recommended to use the package.json and package-lock.json (or yarn.lock) files to manage dependencies. These files specify the exact versions of dependencies required for the project, ensuring that the same versions are installed across different environments. Pushing node_modules would bypass this and can lead to inconsistencies in dependencies between developers and environments.

Version control: The purpose of version control is to track changes to your code and collaborate with others. Including node_modules in version control goes against this principle, as it does not contain code that you have authored and is more appropriately managed by a package manager.

To avoid pushing node_modules to git, you can add it to your .gitignore file. This will prevent it from being included in git commits. Instead, other developers can run npm install or yarn install to install the dependencies specified in package.json on their own machines.

# What is dist folder?

- The dist folder (short for "distribution") is a common convention used in software development to store files that are ready for deployment. It typically contains compiled or transpiled code, minified files, and other assets that are optimized for production use.

Here's what you might find in a dist folder:

Compiled code: For projects using languages like TypeScript, CoffeeScript, or modern JavaScript (ES6+), the dist folder might contain the compiled JavaScript code that is compatible with older browsers or environments.

Minified files: JavaScript, CSS, and HTML files are often minified to reduce their size, improving load times for users. The minified versions of these files are often stored in the dist folder.

Bundled files: Projects using module bundlers like webpack or Rollup may have their bundled files (e.g., bundle.js) stored in the dist folder. These files combine multiple modules into a single file for optimized loading.

Static assets: Images, fonts, and other static assets that are used by the application may also be stored in the dist folder, often optimized for production use (e.g., compressed images).

The dist folder is typically not included in version control (e.g., Git) and is generated as part of the build process. Developers can use tools like webpack, Babel, or other build tools to compile, bundle, and optimize their code, generating the dist folder ready for deployment.

# What is browserlist?

- browserslist is a configuration file used by various front-end tools and libraries, such as autoprefixer, Babel, and eslint, to target specific browsers or browser versions for compatibility purposes. It allows developers to define a list of target browsers in a .browserslistrc file or in the browserslist field of their package.json file.

Here's an example of a .browserslistrc file:

# Browsers that we support

`last 2 versions`

> 1%
> In this example, last 2 versions means the last two versions of all major browsers, and > 1% means browsers with more than 1% global usage. browserslist uses this configuration to determine which browser versions to consider when applying compatibility transformations to your code.

The browserslist configuration is used by tools like autoprefixer to add vendor prefixes to CSS properties, by Babel to transform JavaScript code to be compatible with the specified browsers, and by eslint to enforce browser compatibility rules.

By using browserslist, developers can ensure that their web applications are compatible with a specific set of browsers, making it easier to maintain cross-browser compatibility.
