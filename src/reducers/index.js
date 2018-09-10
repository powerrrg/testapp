import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import StackReducer from './StackReducer';


export default combineReducers({
    auth: AuthReducer,
    stack: StackReducer,
});