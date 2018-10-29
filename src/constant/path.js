const DASH_BOARD = "/";
const APPOINTMENT = "/appointment";
const SYSTEM = "/system";
//------------------
const LOG_IN = "/login";
const ADMIN_LOG_IN = "/adminlogin"
//------------------
const SIGN_UP = "/signup";
const COMPANY_INFORMATION = "/companyInformation";
const COMPANY_CONTACT = COMPANY_INFORMATION + "/contact";
const PAYMENT = COMPANY_CONTACT + "/payment";
const CREDIT_CARD_PAYMENT = PAYMENT + "/cc_payment";
//------------------

const PATH = {
    DASH_BOARD,
    APPOINTMENT,
    SYSTEM,
    LOG_IN,
    ADMIN_LOG_IN,
    SIGN_UP,
    COMPANY_INFORMATION,
    COMPANY_CONTACT,
    PAYMENT,
    CREDIT_CARD_PAYMENT
}


const LINK = {
    TERMS: "http://partondemand.com/terms/"
}

export {
    PATH,
    LINK
}