import { useState, useEffect } from 'react';

export function useKeyPress(key) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === 'ArrowDown') {
      setKeyPressed(true);
    }
  }

  function upHandler({ key }) {
    if (key === 'ArrowUp') {
      setKeyPressed(true);
    }
  }

  useEffect(() => {
    if (key === 'ArrowDown') {
      window.addEventListener('keydown', downHandler);
      return () => {
        window.removeEventListener('keydown', downHandler);
      };
    }
    if (key === 'ArrowUp') {
      window.addEventListener('keyup', upHandler);
      return () => {
        window.removeEventListener('keyup', upHandler);
      };
    }
  }, []);
  return [keyPressed, setKeyPressed];
}
