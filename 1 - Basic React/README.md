## React Basic Installation

To get started with React development, follow these basic installation steps:

1. **Node.js Installation**: React requires Node.js, a JavaScript runtime, to be installed on your machine. You can download and install Node.js from [here](https://nodejs.org/).

2. **Create React App**: React offers a convenient tool called Create React App, which sets up a new React project with a default directory structure and configuration. Install Create React App globally using npm (Node Package Manager) by running the following command in your terminal:

   ```bash
   npm install -g create-react-app
   ```
3. **Create a New React Project**: Once Create React App is installed, you can create a new React project by running the following command:
    ```bash
    npx create-react-app my-react-app
    ```
    Replace my-react-app with the desired name of your project. This command will create a new directory with the specified name and set up a basic React project inside it.

4. **Navigate to Project Directory**: Change your current directory to the newly created project directory:

    ```bash
    cd my-react-app
    ```
5. **Start Development Server**: You can start the development server provided by Create React App to see your React application in action. Run the following command:

    ```bash
    npm start
    ```
    This will start the development server and open your default web browser to display your React application. Any changes you make to your code will automatically be reflected in the browser.

6. **Happy Coding!**: With your React project set up and running, you're ready to start coding your web application using React components.

## React Basic Installation

| Feature            | NPM                                  | NPX                                      |
|--------------------|--------------------------------------|------------------------------------------|
| **Package Manager**| Manages packages and dependencies locally | Executes packages from the npm registry |
| **Installation**   | Installed globally with Node.js      | Comes pre-installed with Node.js (>=v5.2.0) |
| **Usage**          | Used to install, manage, and run packages | Used to execute packages without installing globally |
| **Global Packages**| Installs packages globally for command-line usage | Does not install packages globally    |
| **Updates**        | Requires manual updating of global packages | Uses the latest version of packages from the registry |

### NPM
Package -------> Local Storage -------> Dir(To be Used)
### NPX
Package -------> Dir(To be Used)