import { useState, useEffect } from 'react';

const useReducedMotion = (defaultVal = true) => {
  const [reducedMotion, setReducedMotion] = useState(defaultVal);

  function queryChangeHandler(event: Event) {
    const mediaQuery = event.target as MediaQueryList;
    setReducedMotion(mediaQuery.matches);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery) {
      setReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener('change', queryChangeHandler);
      return () => mediaQuery.removeEventListener('change', queryChangeHandler);
    }
  }, []);

  return reducedMotion;
};

export default useReducedMotion;
