import { useState } from "react";

/**
 * Gives the user a state and a toggling function.
 * @param {*} initialValue Value to initialize state with.
 * @returns {Array} Current state getter, and state toggler.
 */
const useToggle = (initialValue) => {
  const [currState, setCurrState] = useState(initialValue);

  const toggleState = () => setCurrState(!currState);

  return [currState, toggleState];
}

export default useToggle;
