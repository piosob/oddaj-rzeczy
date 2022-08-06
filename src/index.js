import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContexProvider } from './components/store/auth-contex';
import App from './App';
import './scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);
