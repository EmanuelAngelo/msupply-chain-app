import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot
import App from './App';
import './index.css';

// Substitua ReactDOM.render por createRoot
const container = document.getElementById('root');
const root = createRoot(container); // Crie uma raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);