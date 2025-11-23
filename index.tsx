import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log('Initializing Diamond Sports App...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("CRITICAL: Could not find root element to mount to");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App successfully mounted.');
} catch (error) {
  console.error("Error mounting React application:", error);
}