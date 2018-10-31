import { BACKEND_URL } from '../AppConfig';

const API = {
    CHECK_USER_NAME: `${BACKEND_URL}/User/CheckUserName`,
    LOG_IN: `${BACKEND_URL}/Auth/Login`,
    SIGN_UP: `${BACKEND_URL}/ServiceCompany/Create`
}

export { API }