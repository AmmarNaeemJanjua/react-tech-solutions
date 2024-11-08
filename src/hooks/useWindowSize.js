import { useState, useLayoutEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return windowSize;
}
