import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
import dashboard from './dashboard';
import systemSetting from './systemSetting';

export default combineReducers({
    login,
    signup,
    dashboard,
    systemSetting
})