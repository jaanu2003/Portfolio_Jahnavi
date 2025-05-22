import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.jsx'; // Import your main App component from the nested src
import './src/index.css'; // Import your global styles from the nested src

// Ensure you have a div with id='root' in your index.html
const rootElement = document.getElementById('root') as HTMLElement; // Explicitly cast to HTMLElement

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode> {/* Use as a component */}
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element with ID \'root\' not found in the document.');
}
