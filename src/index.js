import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from 'web3uikit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider appId='FqOKQIDb7GwR5G7Mz0XNyafHQmzhz6jEYRyOK5Yo' serverUrl='https://ldl9axusdgck.usemoralis.com:2053/server'>
      <NotificationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>
);


reportWebVitals();
