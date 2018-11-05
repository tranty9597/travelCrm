import { API, STATUS } from '../../constant';
import { post } from '../../utils/axiosHelper';


export const signUpServiceCompany = (
    user,
    pass,
    fName,
    lName,
    email,
    contactEmail,
    contactName,
    contactPhone,
    address,
    address2,
    city,
    state,
    zip,
    cName,
    callBackSuccess
) => {
    return dispatch => {
        let body = {
            User: {
                UserName: user,
                Password: pass,
                FirstName: fName,
                LastName: lName,
                Email: email,
                Phone: contactPhone,
                Address1: address,
                Address2: address2,
                City: city,
                StateID: state,
                Zip: zip
            },
            ServiceCompany: {
                Name: cName,
                Address1: address,
                Address2: address2,
                City: city,
                StateID: state,
                Zip: zip,
                ContactName: contactName,
                ContactEmail: contactEmail,
                ContactPhone: contactPhone
            }
        }
        dispatch(setSignUpStatus(STATUS.loading));

        post(API.SIGN_UP, body).then(
            res => {
                dispatch(setSignUpStatus(STATUS.success));
                callBackSuccess(res.data);
            },
            rej => {
                dispatch(setSignUpStatus(STATUS.error));
                alert(rej)
            }
        )
    }
}

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
                dispatch(setCheckUserStatus(STATUS.error));
                dispatch(setUserName(user, rej.message));
            }
        )
    }
}

export const setServiceCompanyID = (serviceCompanyID) => ({
    type: 'SIGN_UP/SET_SERVICE_COMPANY_ID',
    serviceCompanyID
})

export const setSignUpStatus = (status) => ({
    type: 'SIGN_UP/SET_SIGN_UP_STATUS',
    status
})

export const setCheckUserStatus = (status) => ({
    type: 'SIGN_UP/SET_CHECK_USER_STATUS',
    status
})

export const setUserName = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_USER_NAME',
    user: { data: data, error: error }
})

export const setPass = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_PASS',
    pass: { data: data, error: error }
})

export const setConfirmPass = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_CONFIRM_PASS',
    cfPass: { data: data, error: error }
})

export const setAddress = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_ADDRESS',
    address: { data: data, error: error }
})

export const setAddress2 = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_ADDRESS_2',
    address2: { data: data, error: error }
})

export const setFirstName = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_FIRST_NAME',
    fName: { data: data, error: error }
})

export const setLastName = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_LAST_NAME',
    lName: { data: data, error: error }
})

export const setEmail = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_EMAIL',
    email: { data: data, error: error }
})

export const setCity = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_CITY',
    city: { data: data, error: error }
})

export const setStateID = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_STATE_ID',
    state: { data: data, error: error }
})

export const setZip = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_ZIP',
    zip: { data: data, error: error }
})

export const setPhone = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_PHONE',
    phone: { data: data, error: error }
})

export const setCompanyName = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_COMPANY_NAME',
    cName: { data: data, error: error }
})

export const setContactName = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_CONTACT_NAME',
    contactName: { data: data, error: error }
})

export const setContactEmail = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_CONTACT_EMAIL',
    contactEmail: { data: data, error: error }
})

export const setContactPhone = (data = "", error = "") => ({
    type: 'SIGN_UP/SET_CONTACT_PHONE',
    contactPhone: { data: data, error: error }
})

export const clearSignUp = () => ({
    type: 'SIGN_UP/CLEAR_SIGN_UP'
})