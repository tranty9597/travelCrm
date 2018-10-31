import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
import dashboard from './dashboard';

export default combineReducers({
    login,
    signup,
    dashboard
})