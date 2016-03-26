import {createStore} from 'redux';
import todoApp from '../reducers';
// let store = createStore(todoApp);
let store = createStore(todoApp, window.STATE_FROM_SERVER);
const dispatch = store.dispatch;

// export default store;
export { store, dispatch };
