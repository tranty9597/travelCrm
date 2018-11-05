import { STATUS } from '../constant';


const initState = {
    accessToken: "",
    user: "",
    username: "",
    password: "",
    loginStatus: STATUS.default,
    loginError: "",
    checkUserError: "",
    usernameError: "",
    passwordError: ""
}

const login = (state = initState, action) => {

    switch (action.type) {
        case 'LOG_IN/SET_LOG_IN_STATUS':
            return {
                ...state,
                loginStatus: action.status,
                loginError: action.error
            }
        case 'LOG_IN/SET_USER':
            setStorage(
                action.user,
                action.username,
                action.accessToken,
                action.expiresInSec,
                action.serviceCompanyID,
                action.serviceCompanyName
            );
            return {
                ...state,
                user: action.user,
                username: action.username,
                accessToken: action.accessToken,
            }
        case 'LOG_IN/SET_USER_NAME':
            return {
                ...state,
                username: action.username,
                usernameError: action.error
            }
        case 'LOG_IN/SET_PASSWORD':
            return {
                ...state,
                password: action.password,
                passwordError: action.error
            }
        case 'LOG_IN/CLEAR_LOG_IN':
            clearStorage(action.user);
            state = initState;
            return {
                ...state,
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: ""
            }
        default:
            return state
    }
}

const setStorage = (user, username, accessToken, expiresInSec, serviceCompanyID, serviceCompanyName) => {
    let oldExpiresInSec = JSON.parse(localStorage.getItem(user)).expiresInSec;
    let now = Math.round(new Date().getTime());
    if (oldExpiresInSec) {
        if (oldExpiresInSec < now) {
            expiresInSec = now + expiresInSec;
        }
    } else {
        expiresInSec = now + expiresInSec;
    }
    localStorage.setItem(
        'user',
        user
    )
    localStorage.setItem(
        user,
        JSON.stringify({
            user,
            username,
            accessToken,
            expiresInSec,
            serviceCompanyID,
            serviceCompanyName
        })
    )
}

const clearStorage = (user) => {
    localStorage.setItem(user, null);
}

export default login