export const loginAction = (user, pass) => (
    {
        type: 'LOGIN',
        payload: { user, pass }
    }
)

export const logoutAction = () => (
    {
        type: 'LOGOUT',
    }
)

