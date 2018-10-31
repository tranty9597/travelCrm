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
            return {
                ...state,
                user: action.user,
                accessToken: action.accessToken
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
            return {
                ...state,
                username: "",
                password: "",
                loginStatus: STATUS.default,
                loginError: "",
                checkUserError: "",
                usernameError: "",
                passwordError: ""

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

export default login