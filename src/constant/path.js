const DASH_BOARD = "/";
const APPOINTMENT = "/appointment";
const CUSTOMER = "/customer";
const SYSTEM_SETTING = "/systemSetting";
const USER_PROFILE = "/userprofile";
const TECHNICIAN = "/technician";
//------------------
const LOG_IN = "/login";
const ADMIN_LOG_IN = "/adminlogin"
//------------------
const SIGN_UP = "/signup";
const COMPANY_INFORMATION = SIGN_UP + "/companyInformation";
const COMPANY_CONTACT = COMPANY_INFORMATION + "/contact";
const PAYMENT = COMPANY_CONTACT + "/payment";
const CC_PAYMENT = PAYMENT + "/cc_payment";
//------------------

const PATH = {
    DASH_BOARD,
    APPOINTMENT,
    CUSTOMER,
    LOG_IN,
    ADMIN_LOG_IN,
    SIGN_UP,
    COMPANY_INFORMATION,
    COMPANY_CONTACT,
    PAYMENT,
    CC_PAYMENT,
    USER_PROFILE,
    TECHNICIAN,
    SYSTEM_SETTING
}


const LINK = {
    TERMS: "http://partondemand.com/terms/"
}

export {
    PATH,
    LINK
}