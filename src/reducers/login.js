import { STATUS } from '../constant';


const initState = {
    accessToken: "",
    user: "",
    pass: "",
    checkUserStatus: STATUS.default,
    loginStatus: STATUS.default,
    loginError: "",
    checkUserError: ""
}

const login = (state = initState, action) => {

    switch (action.type) {
        case 'SET_CHECK_USER_STATUS':
            return {
                ...state,
                checkUserStatus: action.status,
                checkUserError: action.error
            }
        case 'SET_LOG_IN_STATUS':
            return {
                ...state,
                loginStatus: action.status,
                loginError: action.error
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: "",
                pass: ""
            }
        default:
            return state
    }
}

export default login