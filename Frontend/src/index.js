import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import ReactDom from 'react-dom';
import './index2.css';
import App from './App';
import { store } from './redux/store/store';
import { AuthProvider } from './context/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



