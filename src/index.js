import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from 'react-use-cart';
import reportWebVitals from './reportWebVitals';
import { HashRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <HashRouter basename='/'>
    <CartProvider>
   
      <App />
   
    </CartProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
