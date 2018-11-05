import { API, STATUS } from '../../constant';
import { post, get } from '../../utils/axiosHelper';

export const setServiceCompany = (serviceCompanyID, serviceCompanyName) => ({
    type: 'DASHBOARD/SET_SERVICE_COMPANY',
    serviceCompanyID,
    serviceCompanyName
})

export const setActiveSideBarTab = (sideBarActiveTab) => ({
    type: 'DASHBOARD/SET_ACTIVE_SIDE_BAR_TAB',
    sideBarActiveTab
})

export const clearDashboard = () => ({
    type: 'DASHBOARD/CLEAR_DASHBOARD'
})

export const setServiceCompanyFromStorage = (user) => ({
    type: 'DASHBOARD/SET_SERVICE_COMPANY_FROM_STORAGE',
    user
})

//---------------APPOINTMENTS------------------//

export const getAppointments = (pageIndex, pageCount) => {
    return dispatch => {
        dispatch(setGetAppointmentsStatus(STATUS.loading))
        let url = API.GET_APPOINTMENTS.replace("#1", pageIndex).replace("#2", pageCount);
        get(url).then(
            res => {
                console.log(res)
                dispatch(setGetAppointmentsStatus(STATUS.success))
                dispatch(setAppointments(res.data))
            },
            rej => {
                dispatch(setGetAppointmentsStatus(STATUS.error))
                alert('get appointments')
                console.log(rej)
            }
        )
    }
}

export const setAppointments = (appointments) => ({
    type: 'APPOINTMENT/SET_APPOINTMENTS',
    appointments
})

export const setGetAppointmentsStatus = (status) => ({
    type: 'APPOINTMENT/SET_GET_APPOINTMENTS_STATUS',
    status
})


//---------------CUSTOMERS---------------------//

export const addCustomer = (customerName, customerAddress, customerAddress2, customerCity,
    customerZip, customerContact, customerPhone, customerEmail,
    customerStateID, customerTypeID, callBackSuccess) => {
    let body = {
        Name: customerName.data,
        CustomerTypeID: customerTypeID.data,
        Address1: customerAddress.data,
        Address2: customerAddress2.data,
        City: customerCity.data,
        Zip: customerZip.data,
        StateID: customerStateID.data,
        ContactName: customerContact.data,
        ContactPhone: customerPhone.data,
        ContactEmail: customerEmail.data
    }
    return dispatch => {
        dispatch(setAddCustomerStatus(STATUS.loading));

        post(API.INSERT_CUSTOMER, body).then(
            res => {
                dispatch(setAddCustomerStatus(STATUS.success));
                callBackSuccess(res.data);
            },
            rej => {
                dispatch(setAddCustomerStatus(STATUS.error));
                alert(rej)
            }
        )
    }

}
export const getCustomers = (pageIndex, pageCount, customerTypeID) => {
    return dispatch => {
        dispatch(setGetCustomersStatus(STATUS.loading))
        let url = API.GET_CUSTOMERS_LIST.replace("#1", pageIndex === 1 ? null : pageIndex)
        .replace("#2", null).replace("#3", customerTypeID)
        get(url).then(
            res => {
                console.log(res)
                dispatch(setGetCustomersStatus(STATUS.success))
                dispatch(setCustomers(res.data))
            },
            rej => {
                dispatch(setGetCustomersStatus(STATUS.error))
                // alert('get customers')
                console.log(rej)
            }
        )
    }
}
export const setAddCustomerStatus = (status) => ({
    type: 'CUSTOMER/SET_ADD_CUSTOMER_STATUS',
    status
})
export const setGetCustomersStatus = (status) => ({
    type: 'CUSTOMER/SET_GET_CUSTOMERS_STATUS',
    status
})

export const setCustomers = (customers) => ({
    type: 'CUSTOMER/SET_CUSTOMERS',
    customers
})
export const setCustomerName = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_NAME',
    customerName: { data, error }
})
export const setCustomerAddress = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_ADDRESS',
    customerAddress: { data, error }
})
export const setCustomerAddress2 = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_ADDRESS_2',
    customerAddress2: { data, error }

})
export const setCustomerCity = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_CITY',
    customerCity: { data, error }

})
export const setCustomerStateID = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_STATE_ID',
    customerStateID: { data, error }

})
export const setCustomerZip = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_ZIP',
    customerZip: { data, error }

})
export const setCustomerContact = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_CONTACT',
    customerContact: { data, error }

})
export const setCustomerPhone = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_PHONE',
    customerPhone: { data, error }

})
export const setCustomerEmail = (data = "", error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_EMAIL',
    customerEmail: { data, error }

})
export const setCustomerTypeID = (data = 1, error = "") => ({
    type: 'CUSTOMER/SET_CUSTOMER_TYPE_ID',
    customerTypeID: { data, error }

})
export const setCurrentCustomerTypeID = (currentCustomerTypeID) => ({
    type: 'CUSTOMER/SET_CURRENT_CUSTOMER_TYPE_ID',
    currentCustomerTypeID

})
