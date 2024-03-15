import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Replace with the actual path to your App component
import { Provider } from 'react-redux';
import store from './Store/Store'
import { HashRouter as Router } from 'react-router-dom';

if (!localStorage.getItem('incompleteTasks') || !localStorage.getItem('activeTasks') || !localStorage.getItem('finishedTasks') || !localStorage.getItem('allTasks')) {
    localStorage.setItem('incompleteTasks', JSON.stringify([]))
    localStorage.setItem('activeTasks', JSON.stringify([]))
    localStorage.setItem('finishedTasks', JSON.stringify([]))
    localStorage.setItem('allTasks', JSON.stringify([]))
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
