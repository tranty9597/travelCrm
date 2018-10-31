import { STATUS } from '../constant';

const initState = {
    serviceCompanyID: "",
    sideBarActiveTab: ""
}

const dashboard = (state = initState, action) => {
    switch (action.type) {
        case 'DASHBOARD/SET_SERVICE_COMPANY_ID':
            return {
                ...state,
                serviceCompanyID: action.serviceCompanyID
            }
        case 'DASHBOARD/SET_ACTIVE_SIDE_BAR_TAB':
            return {
                ...state,
                sideBarActiveTab: action.sideBarActiveTab
            }
        default:
            return state
    }
}

export default dashboard