/**
 * index.jsx
 *
 * This is the entry point for the app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './stores';


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('render-target')
  );
};

/**
 * On start up, we will bind changes
 * to our render to changes in our store
 */
Meteor.startup(function () {
  store.subscribe( render );
  render();
});

