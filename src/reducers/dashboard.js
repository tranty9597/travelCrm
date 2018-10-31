import { STATUS } from '../constant';

const initState = {
    serviceCompanyID: "",
    serviceCompanyName: {data: "", error: ""},
    sideBarActiveTab: "",
    appointments: [],
    customers: [],
    getAppointmentsStatus: STATUS.default,
    getCustomersStatus: STATUS.default
}

const dashboard = (state = initState, action) => {
    switch (action.type) {
        case 'DASHBOARD/SET_SERVICE_COMPANY':
            return {
                ...state,
                serviceCompanyID: action.serviceCompanyID,
                serviceCompanyName: action.serviceCompanyName
            }
        case 'DASHBOARD/SET_ACTIVE_SIDE_BAR_TAB':
            return {
                ...state,
                sideBarActiveTab: action.sideBarActiveTab
            }
        case 'APPOINTMENT/SET_GET_APPOINTMENTS_STATUS':
            return {
                ...state,
                getAppointmentsStatus: action.status
            }
        case 'APPOINTMENT/SET_APPOINTMENTS':
            return {
                ...state,
                appointments: action.appointments
            }
        case 'APPOINTMENT/SET_GET_CUSTOMERS_STATUS':
            return {
                ...state,
                getCustomersStatus: action.status
            }
        case 'APPOINTMENT/SET_CUSTOMERS':
            return {
                ...state,
                customers: action.customers
            }
        default:
            return state
    }
}

export default dashboard