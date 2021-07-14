import { useState } from "react";

/**
 * Gives the user a state and its last updated value
 * @param {*} initialValue Value to initialize state with.
 * @param {*} initialPrevValue Value to initalize prevState with.
 * @returns {Array} Current state getter, previous state getter, and current state setter.
 */
export const usePrevState = (initialValue, initialPrevValue = null) => {
  const [currState, _setCurrState] = useState(initialValue);
  const [prevState, setPrevState] = useState(initialPrevValue);

  const setCurrState = (newValue) => {
    setPrevState(currState);
    _setCurrState(newValue);
  } 

  return [currState, prevState, setCurrState];
}
