# @soleilyasmina's React Hooks

This package contains hooks that [@soleilyasmina](https://github.com/soleilyasmina) uses frequently.

[![npm version](https://img.shields.io/npm/v/@soleilyasmina/hooks.svg?style=flat-square)](https://www.npmjs.org/package/@soleilyasmina/hooks)

## Table of Contents

- [Installing](#installing)
- [Usage](#usage)
- [usePrevState](#useprevstate)
- [useResize](#useresize)
- [Credits](#credits)

## Installing

This package can be installed either via NPM or Yarn.

With npm:

```sh
npm install @soleilyasmina/hooks
```

With yarn:

```sh
yarn add @soleilyasmina/hooks
```

## Usage

These hooks can be implement into any React functional component by importing them from the package:

```js
import { usePrevState, useResize, useTrigger } from "@soleilyasmina/hooks";
```

## usePrevState

To create a state with an automatically updated previous state, implement `usePrevState`:

```jsx
import { usePrevState } from "@soleilyasmina/hooks";

const Counter = () => {
  const [count, prevCount, setCount] = usePrevState(0, 0);

  return (
    <div>
      <span>{count}</span>
      <span>{prevCount}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
```

## useResize

To create an effect that runs depending on the window's current size, implement `useResize`.

```jsx
import { useState } from "react";
import { useResize } from "@soleilyasmina/hooks";

const Menu = () => {
  const [visible, setVisible] = useState(true);
  const [hamburger, setHamburger] = useState(false);

  useResize(() => {
    if (window.innerWidth > 425) {
      setVisible(true);
      setHamburger(false);
    } else {
      setVisible(false);
    }
  });

  return (
    <header>
      <h1>Sitename</h1>
      <span style={{ display: visible ? "none" : "inline" }}>+</span>
      <nav style={{ display: visible || hamburger ? "flex" : "none" }}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
    </header>
  );
};

export default Menu;
```

## Credits

This package was inspired by [useHooks](https://usehooks.com).
