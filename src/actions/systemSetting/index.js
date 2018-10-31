import { API, STATUS } from '../../constant';
import { post } from '../../utils/axiosHelper';

export const setAddress = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_ADDRESS',
    address: { data: data, error: error }
})

export const setAddress2 = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_ADDRESS_2',
    address2: { data: data, error: error }
})

export const setCity = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_CITY',
    city: { data: data, error: error }
})

export const setStateID = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_STATE_ID',
    state: { data: data, error: error }
})

export const setZip = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_ZIP',
    zip: { data: data, error: error }
})

export const setCompanyName = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_COMPANY_NAME',
    cName: { data: data, error: error }
})

export const setContactName = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_CONTACT_NAME',
    contactName: { data: data, error: error }
})

export const setContactEmail = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_CONTACT_EMAIL',
    contactEmail: { data: data, error: error }
})

export const setContactPhone = (data = "", error = "") => ({
    type: 'SYSTEM_SETTING/SET_CONTACT_PHONE',
    contactPhone: { data: data, error: error }
})

export const clearSystemSetting = () => ({
    type: 'SYSTEM_SETTING/CLEAR_SYSTEM_SETTING'
})

export const setServiceCompanyData = (contactEmail,
    contactName,
    contactPhone,
    address,
    address2,
    city,
    state,
    zip,
    cName) => ({
        type: 'SYSTEM_SETTING/SET_SERVICE_COMPANY_DATA',
        contactEmail,
        contactName,
        contactPhone,
        address,
        address2,
        city,
        state,
        zip,
        cName
    })