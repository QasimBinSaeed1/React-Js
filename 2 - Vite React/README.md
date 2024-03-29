# React-Js
# React Basic Installation Using Vite

Vite is a build tool that can be categorized as a bundler, although it operates differently from traditional bundlers like Webpack. While Webpack bundles all your assets (JavaScript, CSS, images, etc.) into a single file for production, Vite takes a different approach.

Vite (which means "fast" in French) leverages modern browser capabilities such as ES module (ECMAScript Module) support to provide a significantly faster development experience. Instead of bundling your code in development mode, Vite serves your source files directly to the browser with minimal processing. This allows for faster hot module replacement (HMR) and quicker rebuild times during development.

In production mode, Vite optimizes and bundles your code for performance, similar to traditional bundlers, but it still maintains the speed benefits by leveraging ES module support and other optimizations.

So, while Vite does bundle your code for production, its main distinction lies in its development server's ability to serve unbundled code, resulting in faster development iteration times.

## Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install Node.js from [here](https://nodejs.org/).

## Installation Steps

1. **Create a new directory for your project:**

   ```bash
   mkdir my-react-app
   cd my-react-app
   ```
2. **Initialize a new npm project**:

    ```bash
    npm init -y
    ```
3. **Install Vite globally**:

    ```bash
    npm install -g vite
    ```
4. **Create a new React project with Vite**:

    ```bash
    npm create vite@latest
    ```
5. **Navigate into the newly created directory**:

    ```bash
    cd my-react-app
    ```
6. **Install project dependencies**:

    ```bash
    npm install
    ```
7. **Running the Development Server**:
To start the development server and view your React application in the browser, run:

    ```bash
    npm run dev
    ```
    This command will start the development server on http://localhost:3000.

8. **Building for Production**:
To build your React application for production, run:

    ```bash
    npm run build
    ```
    This will create an optimized build of your application in the dist directory.
