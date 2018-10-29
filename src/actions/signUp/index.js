import { API, STATUS } from '../../constant';
import { post } from '../../utils/axiosHelper';


export const checkUserAct = (user, callBackSuccess) => {
    return dispatch => {
        let body = {
            userName: user,
        }
        dispatch(setCheckUserStatus(STATUS.loading))
        post(API.CHECK_USER_NAME, body).then(
            res => {
                if (res.data.isError) {
                    dispatch(setCheckUserStatus(STATUS.error));
                    dispatch(setUserName(user, res.data.message));
                } else {
                    dispatch(setCheckUserStatus(STATUS.success));
                    dispatch(setUserName(user, ""));
                    callBackSuccess();
                }
            },
            rej => {
                dispatch(setCheckUserStatus(STATUS.error, "rejected"))
                alert('checkUserAct')
                console.log(rej)
            }
        )
    }
}

export const setCheckUserStatus = (status) => ({
    type: 'SET_CHECK_USER_STATUS',
    status
})

export const setUserName = (data = "", error = "") => ({
    type: 'SET_USER_NAME',
    user: { data: data, error: error }
})

export const setPass = (data = "", error = "") => ({
    type: 'SET_PASS',
    pass: { data: data, error: error }
})

export const setConfirmPass = (data = "", error = "") => ({
    type: 'SET_CONFIRM_PASS',
    cfPass: { data: data, error: error }
})

export const setAddress = (data = "", error = "") => ({
    type: 'SET_ADDRESS',
    address: { data: data, error: error }
})

export const setAddress2 = (data = "", error = "") => ({
    type: 'SET_ADDRESS_2',
    address2: { data: data, error: error }
})

export const setFirstName = (data = "", error = "") => ({
    type: 'SET_FIRST_NAME',
    fName: { data: data, error: error }
})

export const setLastName = (data = "", error = "") => ({
    type: 'SET_LAST_NAME',
    lName: { data: data, error: error }
})

export const setEmail = (data = "", error = "") => ({
    type: 'SET_EMAIL',
    email: { data: data, error: error }
})

export const setCity = (data = "", error = "") => ({
    type: 'SET_CITY',
    city: { data: data, error: error }
})

export const setStateID = (data = "", error = "") => ({
    type: 'SET_STATE_ID',
    state: { data: data, error: error }
})

export const setZip = (data = "", error = "") => ({
    type: 'SET_ZIP',
    zip: { data: data, error: error }
})

export const setPhone = (data = "", error = "") => ({
    type: 'SET_PHONE',
    phone: { data: data, error: error }
})

export const setCompanyName = (data = "", error = "") => ({
    type: 'SET_COMPANY_NAME',
    cName: { data: data, error: error }
})

export const setContactName = (data = "", error = "") => ({
    type: 'SET_CONTACT_NAME',
    contactName: { data: data, error: error }
})

export const setContactEmail = (data = "", error = "") => ({
    type: 'SET_CONTACT_EMAIL',
    contactEmail: { data: data, error: error }
})

export const setContactPhone = (data = "", error = "") => ({
    type: 'SET_CONTACT_PHONE',
    contactPhone: { data: data, error: error }
})