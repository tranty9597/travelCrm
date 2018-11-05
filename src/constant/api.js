import { BACKEND_URL } from '../AppConfig';

const API = {
    CHECK_USER_NAME: `${BACKEND_URL}/CompanyUser/CheckUserName`,
    LOG_IN: `${BACKEND_URL}/Auth/Login`,
    SIGN_UP: `${BACKEND_URL}/ServiceCompany/Create`,
    GET_APPOINTMENTS: `${BACKEND_URL}/Appointment/Search?pageIndex=#1&pageCount=#2`,
    GET_CUSTOMERS_DROP_DOWN: `${BACKEND_URL}/Customer/GetCustomerList`,
    GET_CUSTOMERS_LIST: `${BACKEND_URL}/Customer/Search?pageIndex=#1&pageCount=#2&Data.#3`,
    INSERT_CUSTOMER: `${BACKEND_URL}/Customer/Save`,
}

export { API }