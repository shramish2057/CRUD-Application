import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <ReactNotification />
      <App />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);


