import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index2.css';
import App from './App';
import { store } from './redux/store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



