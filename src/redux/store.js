import {createStore, applyMiddleware} from 'react-redux';
import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;