import { API, STATUS } from '../../constant';
import { post } from '../../utils/axiosHelper';


export const loginAct = (user, pass) => {
    return dispatch => {
        let body = {
            UserName: user,
            Password: pass
        }
        dispatch(setLoginStatus(STATUS.loading))
        post(API.LOG_IN, body).then(
            res => {
                if (res.data.isError) {
                    dispatch(setLoginStatus(STATUS.error, res.data.message))
                } else {
                    dispatch(setLoginStatus(STATUS.success))
                }
            },
            rej => {
                dispatch(setLoginStatus(STATUS.error, "rejected"))
                alert('Login')
                console.log(rej)
            }
        )
    }
}

export const setLoginStatus = (status, error = "") => ({
    type: 'SET_LOG_IN_STATUS',
    status,
    error
})

export const setUser = (user, token) => ({
    type: 'SET_USER',
    user,
    token
})

export const logoutAct = () => (
    {
        type: 'LOG_OUT',
    }
)