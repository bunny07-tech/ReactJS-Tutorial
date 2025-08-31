import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { store } from './Store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { Counter } from './Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Provider store={store}>
      <Counter />
     </Provider>
  </React.StrictMode>
);

reportWebVitals();
