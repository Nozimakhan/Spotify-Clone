import { createStore } from 'redux';
import { likeReducer } from '../reducer/likeReducer';

const store = createStore(likeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;