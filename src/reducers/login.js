const initState = {
    user: "",
    pass: ""
}

const login = (state = initState, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user,
                pass: action.pass
            }
        case 'LOGOUT':
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