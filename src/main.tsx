// Safe wrapper for window.fetch assignment in sandbox environments
(function() {
  let currentFetch = window.fetch;
  const descriptor = {
    configurable: true,
    enumerable: true,
    get() {
      return currentFetch;
    },
    set(value: any) {
      currentFetch = value;
    }
  };

  const tryDefine = (obj: any) => {
    if (!obj) return false;
    try {
      const desc = Object.getOwnPropertyDescriptor(obj, 'fetch');
      if (desc && !desc.configurable) {
        return false;
      }
      Object.defineProperty(obj, 'fetch', descriptor);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Try defining on window instance, its prototype, Window.prototype, and globalThis
  tryDefine(window);
  tryDefine(Object.getPrototypeOf(window));
  tryDefine(Window.prototype);
  tryDefine(globalThis);
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

