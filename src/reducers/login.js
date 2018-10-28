const initState = {
    user: "",
    pass: ""
}

const login = (state = initState, action) => {

    switch (action.type) {
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