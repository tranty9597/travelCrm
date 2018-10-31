import { STATUS } from '../constant';


const initState = {
    user: { data: "", error: "" },
    pass: { data: "", error: "" },
    cfPass: { data: "", error: "" },
    email: { data: "", error: "" },
    address: { data: "", error: "" },
    address2: { data: "", error: "" },
    fName: { data: "", error: "" },
    lName: { data: "", error: "" },
    city: { data: "", error: "" },
    state: { data: "", error: "" },
    zip: { data: "", error: "" },
    phone: { data: "", error: "" },
    cName: { data: "", error: "" },
    contactName: { data: "", error: "" },
    contactEmail: { data: "", error: "" },
    contactPhone: { data: "", error: "" },
    checkUserStatus: STATUS.default,
    signUpStatus: STATUS.default,
    checkUserError: ""
}

const signup = (state = initState, action) => {

    switch (action.type) {
        case 'SIGN_UP/SET_SIGN_UP_STATUS':
            return {
                ...state,
                signUpStatus: action.status
            }
        case 'SIGN_UP/SET_CHECK_USER_STATUS':
            return {
                ...state,
                checkUserStatus: action.status
            }
        case 'SIGN_UP/SET_USER_NAME':
            return {
                ...state,
                user: action.user,
            }
        case 'SIGN_UP/SET_PASS':
            return {
                ...state,
                pass: action.pass,
            }
        case 'SIGN_UP/SET_CONFIRM_PASS':
            return {
                ...state,
                cfPass: action.cfPass,
            }
        case 'SIGN_UP/SET_EMAIL':
            return {
                ...state,
                email: action.email,
            }
        case 'SIGN_UP/SET_ADDRESS':
            return {
                ...state,
                address: action.address,
            }
        case 'SIGN_UP/SET_ADDRESS_2':
            return {
                ...state,
                address2: action.address2,
            }
        case 'SIGN_UP/SET_FIRST_NAME':
            return {
                ...state,
                fName: action.fName,
            }
        case 'SIGN_UP/SET_LAST_NAME':
            return {
                ...state,
                lName: action.lName,
            }
        case 'SIGN_UP/SET_CITY':
            return {
                ...state,
                city: action.city,
            }
        case 'SIGN_UP/SET_STATE_ID':
            return {
                ...state,
                state: action.state,
            }
        case 'SIGN_UP/SET_ZIP':
            return {
                ...state,
                zip: action.zip,
            }
        case 'SIGN_UP/SET_PHONE':
            return {
                ...state,
                phone: action.phone,
            }
        case 'SIGN_UP/SET_COMPANY_NAME':
            return {
                ...state,
                cName: action.cName,
            }
        case 'SIGN_UP/SET_CONTACT_NAME':
            return {
                ...state,
                contactName: action.contactName,
            }
        case 'SIGN_UP/SET_CONTACT_EMAIL':
            return {
                ...state,
                contactEmail: action.contactEmail,
            }
        case 'SIGN_UP/SET_CONTACT_PHONE':
            return {
                ...state,
                contactPhone: action.contactPhone,
            }
        case 'SIGN_UP/CLEAR_SIGN_UP':
            state = initState;
            return {
                ...state,
            }
        default:
            return state
    }
}

export default signup