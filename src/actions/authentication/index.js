import { API, STATUS } from '../../constant';
import { post } from '../../utils/axiosHelper';


export const loginAct = (user, pass, serviceCompanyID, serviceCompanyName, callBackSuccess) => {
    return dispatch => {
        let body = {
            UserName: user,
            Password: pass
        }
        dispatch(setLoginStatus(STATUS.loading))
        post(API.LOG_IN, body).then(
            res => {
                if (res.data.isError) {
                    dispatch(setLoginStatus(STATUS.error))
                    dispatch(setUserName(user, res.data.message))
                } else {
                    dispatch(setLoginStatus(STATUS.success))
                    callBackSuccess()
                    dispatch(clearLogIn())
                    dispatch(setUser(
                        user,
                        res.data.data.displayName,
                        res.data.data.accessToken,
                        res.data.data.expiresInSec,
                        serviceCompanyID,
                        serviceCompanyName
                    ))
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

export const setUser = (user, username, accessToken, expiresInSec, serviceCompanyID, serviceCompanyName) => ({
    type: 'LOG_IN/SET_USER',
    user,
    username,
    accessToken,
    expiresInSec,
    serviceCompanyID,
    serviceCompanyName
})

export const clearLogIn = (user) => ({
    type: 'LOG_IN/CLEAR_LOG_IN',
    user
})