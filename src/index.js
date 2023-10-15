import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "flag-icons/css/flag-icons.min.css";
import { Provider as StoreProvider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StoreProvider>
);