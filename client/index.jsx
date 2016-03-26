/**
 * index.jsx
 *
 * This is the entry point for the app
 */
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

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

