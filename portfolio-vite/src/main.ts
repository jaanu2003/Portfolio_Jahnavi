import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Updated import path
import './index.css'; // Updated import path

// Ensure you have a div with id='root' in your index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element with ID \'root\' not found in the document.');
}
