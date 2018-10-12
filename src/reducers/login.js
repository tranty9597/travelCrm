const initState = {
    user: "",
    pass: ""
}

const login = (state = initState, action) => {

    switch (action.type) {
        case 'LOGIN':
        console.log("reducer",action)
            return {
                ...state,
                user: action.user,
                pass: action.pass
            }

        default:
            return state
    }
}

export default login