import { useEffect, useState } from "react";

/**
 * Creates a "trigger" that runs an effect and cleanup whenever the toggle state (trigger) is changed.
 * @param {function} effect Function to be called as the effect.
 * @param {function} cleanup Function to be called as cleanup.
 * @returns Function that can cause callback to be called
 */
export const useTrigger = (effect = () => {}, cleanup = () => {}) => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    effect();
    return () => cleanup();
  }, [cleanup, effect, toggle]);

  const trigger = () => setToggle((curr) => !curr);

  return trigger;
};
