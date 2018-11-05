import { STATUS } from '../constant';

const initState = {
    serviceCompanyID: "",
    serviceCompanyName: { data: "", error: "" },
    sideBarActiveTab: "",
    appointments: [],
    customers: [],
    getAppointmentsStatus: STATUS.default,
    getCustomersStatus: STATUS.default,
    //------customer-----
    customerName: { data: "", error: "" },
    customerAddress: { data: "", error: "" },
    customerAddress2: { data: "", error: "" },
    customerCity: { data: "", error: "" },
    customerStateID: { data: "", error: "" },
    customerZip: { data: "", error: "" },
    customerContact: { data: "", error: "" },
    customerPhone: { data: "", error: "" },
    customerEmail: { data: "", error: "" },
    customerTypeID: { data: 1, error: "" },
    addCustomerStatus: STATUS.default,
    currentCustomerTypeID: 1
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
        case 'DASHBOARD/SET_SERVICE_COMPANY_FROM_STORAGE':
            let storage = JSON.parse(localStorage.getItem(action.user));
            return {
                ...state,
                serviceCompanyID: storage.serviceCompanyID,
                serviceCompanyName: { data: storage.serviceCompanyName, error: state.serviceCompanyName.error }
            }
        case 'DASHBOARD/CLEAR_DASHBOARD':
            state = initState;
            return {
                ...state,
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
        case 'CUSTOMER/SET_CUSTOMER_NAME':
            return {
                ...state,
                customerName: action.customerName
            }
        case 'CUSTOMER/SET_CUSTOMER_ADDRESS':
            return {
                ...state,
                customerAddress: action.customerAddress
            }
        case 'CUSTOMER/SET_CUSTOMER_ADDRESS_2':
            return {
                ...state,
                customerAddress2: action.customerAddress2
            }
        case 'CUSTOMER/SET_CUSTOMER_CITY':
            return {
                ...state,
                customerCity: action.customerCity
            }
        case 'CUSTOMER/SET_CUSTOMER_STATE_ID':
            return {
                ...state,
                customerStateID: action.customerStateID
            }
        case 'CUSTOMER/SET_CUSTOMER_ZIP':
            return {
                ...state,
                customerZip: action.customerZip
            }
        case 'CUSTOMER/SET_CUSTOMER_CONTACT':
            return {
                ...state,
                customerContact: action.customerContact
            }
        case 'CUSTOMER/SET_CUSTOMER_PHONE':
            return {
                ...state,
                customerPhone: action.customerPhone
            }
        case 'CUSTOMER/SET_CUSTOMER_EMAIL':
            return {
                ...state,
                customerEmail: action.customerEmail
            }
        case 'CUSTOMER/SET_CUSTOMER_TYPE_ID':
            return {
                ...state,
                customerTypeID: action.customerTypeID
            }
        case 'CUSTOMER/SET_ADD_CUSTOMER_STATUS':
            return {
                ...state,
                addCustomerStatus: action.status
            }
        case 'CUSTOMER/SET_CURRENT_CUSTOMER_TYPE_ID':
            return {
                ...state,
                currentCustomerTypeID: action.currentCustomerTypeID
            }
        default:
            return state
    }
}

export default dashboard