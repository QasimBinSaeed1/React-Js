# React Hooks: useEffect, useRef, useCallback

## useEffect

### Description:
`useEffect` is a built-in React Hook that allows you to perform side effects in function components. Side effects may include data fetching, subscriptions, or manually changing the DOM. It runs after every render and replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

### Key Points:
- Executes after every render.
- Handles side effects in function components.
- Cleans up previous effects before applying the next ones.
- Accepts a callback function as its first parameter and an optional dependencies array as its second parameter.
- Useful for handling asynchronous operations, timers, and subscriptions.

## useRef

### Description:
`useRef` is a Hook that returns a mutable ref object whose `.current` property is initialized to the passed argument (initialValue). The returned object persists for the entire lifecycle of the component. It allows you to access the DOM nodes or store mutable values without triggering a re-render.

### Key Points:
- Creates a mutable ref object.
- `.current` property holds the current value.
- Useful for accessing DOM elements, storing mutable values, and persisting values across renders.
- Does not cause re-renders when its value changes.
- Commonly used for accessing form elements, triggering imperative animations, or storing previous values.

## useCallback

### Description:
`useCallback` is a Hook that returns a memoized callback function. It memoizes the function instance between renders, which helps in preventing unnecessary re-renders of child components that rely on this callback. It is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary re-renders.

### Key Points:
- Memoizes a callback function.
- Returns a memoized version of the callback that only changes if one of the dependencies has changed.
- Helpful in optimizing performance by preventing unnecessary re-renders of child components.
- Accepts a callback function and an optional dependencies array.
- Suitable for passing callbacks to child components or when defining event handlers.
