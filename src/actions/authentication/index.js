import { API, STATUS } from '../../constant';
import { post } from '../../utils/axiosHelper';


export const loginAct = (user, pass, callBackSuccess) => {
    return dispatch => {
        let body = {
            username: user,
            password: pass
        }
        dispatch(setLoginStatus(STATUS.loading))
        post(API.LOG_IN, body).then(
            res => {
                let { data } = res;

                if (data.isError) {
                    dispatch(setLoginStatus(STATUS.error))
                } else {
                    console.log('s==========ß', data)
                    dispatch(setLoginStatus(STATUS.success))
                    callBackSuccess()
                    dispatch(setUser(data.user))
                }
            },
            rej => {
                dispatch(setLoginStatus(STATUS.error))
                alert(rej)
            }
        )
    }
}

export const setLoginStatus = (status) => ({
    type: 'LOG_IN/SET_LOG_IN_STATUS',
    status
})

export const setUserName = (username, error = "") => ({
    type: 'LOG_IN/SET_USER_NAME',
    username,
    error
})

export const setPassword = (password, error = "") => ({
    type: 'LOG_IN/SET_PASSWORD',
    password,
    error
})

export const setUser = (user) => ({
    type: 'LOG_IN/SET_USER',
    payload: user
})

export const clearLogIn = (user) => ({
    type: 'LOG_IN/CLEAR_LOG_IN',
    user
})