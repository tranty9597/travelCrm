import { STATUS } from '../constant';


const initState = {
    address: { data: "", error: "" },
    address2: { data: "", error: "" },
    city: { data: "", error: "" },
    state: { data: "", error: "" },
    zip: { data: "", error: "" },
    cName: { data: "", error: "" },
    contactName: { data: "", error: "" },
    contactEmail: { data: "", error: "" },
    contactPhone: { data: "", error: "" },
}

const systemSetting = (state = initState, action) => {

    switch (action.type) {
        case 'SYSTEM_SETTING/SET_ADDRESS':
            return {
                ...state,
                address: action.address,
            }
        case 'SYSTEM_SETTING/SET_ADDRESS_2':
            return {
                ...state,
                address2: action.address2,
            }
        case 'SYSTEM_SETTING/SET_CITY':
            return {
                ...state,
                city: action.city,
            }
        case 'SYSTEM_SETTING/SET_STATE_ID':
            return {
                ...state,
                state: action.state,
            }
        case 'SYSTEM_SETTING/SET_ZIP':
            return {
                ...state,
                zip: action.zip,
            }
        case 'SYSTEM_SETTING/SET_COMPANY_NAME':
            return {
                ...state,
                cName: action.cName,
            }
        case 'SYSTEM_SETTING/SET_CONTACT_NAME':
            return {
                ...state,
                contactName: action.contactName,
            }
        case 'SYSTEM_SETTING/SET_CONTACT_EMAIL':
            return {
                ...state,
                contactEmail: action.contactEmail,
            }
        case 'SYSTEM_SETTING/SET_CONTACT_PHONE':
            return {
                ...state,
                contactPhone: action.contactPhone,
            }
        case 'SYSTEM_SETTING/CLEAR_SYSTEM_SETTING':
            state = initState;
            console.log(state);
            return {
                ...state,
            }
        case 'SYSTEM_SETTING/SET_SERVICE_COMPANY_DATA':
            return {
                ...state,
                ...action
            }
        default:
            return state
    }
}

export default systemSetting