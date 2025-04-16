// src/index.js หรือ src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import Navbar from './components/Navbar';
// import อื่นๆ ตามที่คุณมี

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
  </React.StrictMode>
);