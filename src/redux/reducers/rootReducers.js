import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
    foodReducer,
    cartReducer,
    userReducer
});

export default rootReducers;