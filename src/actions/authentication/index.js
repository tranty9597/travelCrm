import { BACKEND_URL } from '../../AppConfig';
import { post } from '../../utils/fetch';


export const setUser = (user, token) => ({
    type: 'SET_USER',
    user,
    token
})


export const loginAction = (user, pass) => {
    return dispatch => {
        let url = `${BACKEND_URL}/Auth/Login`;
        let body = JSON.stringify({
            UserName: user,
            Password: pass
        })
        post(url, body).then(
            res => {
                console.log(res)
            },
            rej => {
                console.log(rej)

            }
        )
    }
}


export const logoutAction = () => (
    {
        type: 'LOGOUT',
    }
)
