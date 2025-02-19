import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';  // Add your global styles here
import App from './App';  // Your main App component

// Use ReactDOM.createRoot instead of ReactDOM.render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
