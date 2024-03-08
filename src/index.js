import React from 'react';
import ReactDOM from 'react-dom/client';
// import { SQLiteProvider } from 'react-sqlite-hook'; // Import from your SQLite library
import App from './App'; // Replace with the actual path to your App component
import { Provider } from 'react-redux';
import store from './Store/Store'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
