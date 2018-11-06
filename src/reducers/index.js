import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
import dashboard from './dashboard';
import systemSetting from './systemSetting';
import travel from './travel';

export default combineReducers({
    login,
    signup,
    dashboard,
    systemSetting,
    travel
})