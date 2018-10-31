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

//---------------APPOINTMENTS------------------//

export const getAppointments = (pageIndex, pageCount) => {
    return dispatch => {
        dispatch(setGetAppointmentsStatus(STATUS.loading))
        let url = API.GET_APPOINTMENTS.replace("#1", pageIndex).replace("#2", pageCount);
        get(url).then(
            res => {
                console.log(res)
                dispatch(setGetAppointmentsStatus(STATUS.success))
                // dispatch(setAppointments(res.data))
            },
            rej => {
                dispatch(setGetAppointmentsStatus(STATUS.error))
                alert('get appointment')
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

