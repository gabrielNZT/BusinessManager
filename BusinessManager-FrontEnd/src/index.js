import React from 'react';
import ReactDOM from 'react-dom/client';
import './global/globalStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css'
import App from './App';
import store from './store/store.js'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
