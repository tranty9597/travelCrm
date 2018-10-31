import { API, STATUS } from '../../constant';
import { post } from '../../utils/axiosHelper';

export const setServiceCompanyID = (serviceCompanyID) => ({
    type: 'DASHBOARD/SET_SERVICE_COMPANY_ID',
    serviceCompanyID
})   

export const setActiveSideBarTab = (sideBarActiveTab) => ({
    type: 'DASHBOARD/SET_ACTIVE_SIDE_BAR_TAB',
    sideBarActiveTab
})  