import React from 'react';
import dotenv from 'dotenv';
import ReactDOM from 'react-dom/server';
import App from './components/App';

dotenv.config();

const app = (
  <App />
);

const tussi = ReactDOM.renderToString(app);

console.log(tussi);
