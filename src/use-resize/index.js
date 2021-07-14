import { useEffect } from "react";

/**
 * Runs callback based on window size.
 * @param {function} cb Function to run when window size changes.
 */
const useResize = (cb) => {
  useEffect(() => {
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, [cb]);
};

export default useResize;
