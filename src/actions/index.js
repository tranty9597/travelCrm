export const loginAction = (user, pass) => (
    {
        type: 'LOGIN',
        user, 
        pass
    })

export const logoutAction = () => (
    {
        type: 'LOGOUT',

    })
