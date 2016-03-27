import {compose, createStore} from 'redux';
import todoApp from '../reducers';

import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

const reducer = compose(
  mergePersistedState()
)(todoApp);

const storage = compose(
  filter(['todos', 'visibilityFilter'])
)(adapter(window.localStorage));

const createPersistentStore = compose(
  persistState(storage, 'redux-localstorage')
)(createStore);

 
const store = createPersistentStore(reducer);

// let store = createStore(todoApp, window.STATE_FROM_SERVER);
const dispatch = store.dispatch;

// export default store;
export { store, dispatch };
