import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './componentes/pages/servicePage/ServicePage.css'
import './componentes/pages/ServiceChoose/ServiceChoose.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import './componentes/pages/authenticate/Login.css'
import './componentes/pages/authenticate/Register.css'
import './componentes/pages/authenticate/RecoverPassword.css'
import './componentes/pages/homepage/home.css'
import './componentes/pages/header/header.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
