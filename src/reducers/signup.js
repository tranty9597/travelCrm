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
    checkUserError: ""
}

const login = (state = initState, action) => {

    switch (action.type) {
        case 'SET_CHECK_USER_STATUS':
            return {
                ...state,
                checkUserStatus: action.status,
                checkUserError: action.error
            }
        case 'SET_USER_NAME':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_PASS':
            return {
                ...state,
                pass: action.pass,
            }
        case 'SET_CONFIRM_PASS':
            return {
                ...state,
                cfPass: action.cfPass,
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email,
            }
        case 'SET_ADDRESS':
            return {
                ...state,
                address: action.address,
            }
        case 'SET_ADDRESS_2':
            return {
                ...state,
                address2: action.address2,
            }
        case 'SET_FIRST_NAME':
            return {
                ...state,
                fName: action.fName,
            }
        case 'SET_LAST_NAME':
            return {
                ...state,
                lName: action.lName,
            }
        case 'SET_CITY':
            return {
                ...state,
                city: action.city,
            }
        case 'SET_STATE_ID':
            return {
                ...state,
                state: action.state,
            }
        case 'SET_ZIP':
            return {
                ...state,
                zip: action.zip,
            }
        case 'SET_PHONE':
            return {
                ...state,
                phone: action.phone,
            }
        case 'SET_COMPANY_NAME':
            return {
                ...state,
                cName: action.cName,
            }
        case 'SET_CONTACT_NAME':
            return {
                ...state,
                contactName: action.contactName,
            }
        case 'SET_CONTACT_EMAIL':
            return {
                ...state,
                contactEmail: action.contactEmail,
            }
        case 'SET_CONTACT_PHONE':
            return {
                ...state,
                contactPhone: action.contactPhone,
            }
        default:
            return state
    }
}

export default login