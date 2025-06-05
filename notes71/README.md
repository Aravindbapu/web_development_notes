# Notes71 - React Hooks & State

This directory contains notes and examples about Hooks and State in React.

## What are Hooks?
Hooks are special functions introduced in React 16.8 that let you use state and other React features in functional components, without writing a class.

### Commonly Used Hooks
- **useState:** Lets you add state to functional components.
- **useEffect:** Lets you perform side effects in function components (like data fetching, subscriptions, etc).
- **useContext:** Lets you use the React context API.
- **useRef:** Lets you persist values across renders without causing a re-render.
- **useReducer:** An alternative to useState for complex state logic.

## Example: useState
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Example: useEffect
```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## State in React
- State is a built-in object that stores property values that belong to a component.
- When the state object changes, the component re-renders.
- In functional components, use the `useState` hook to manage state.

## More Resources
- [React Docs: State and Lifecycle](https://react.dev/learn/state-a-components-memory)
- [React Docs: Using the State Hook](https://react.dev/reference/react/useState)
- [React Docs: Using the Effect Hook](https://react.dev/reference/react/useEffect)

Feel free to add more examples and notes as you learn!
