import './style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  document.body.innerHTML = '<div style="padding:40px;text-align:center;color:red;font-size:18px;">Erreur: Impossible de monter l\'application. Rechargez la page.</div>';
}
