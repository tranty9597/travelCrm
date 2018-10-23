const DASH_BOARD = "/";
//------------------
const LOG_IN = "/login";
//------------------
const SIGN_UP = "/signup";
const COMPANY_INFORMATION = "/companyInformation";
const COMPANY_CONTACT = COMPANY_INFORMATION + "/contact";
const PAYMENT = COMPANY_CONTACT + "/payment";
const CREDIT_CARD_PAYMENT = PAYMENT + "/cc_payment";
//------------------

const PATH = {
    DASH_BOARD,
    LOG_IN,
    SIGN_UP,
    COMPANY_INFORMATION,
    COMPANY_CONTACT,
    PAYMENT,
    CREDIT_CARD_PAYMENT
}


const LINK = {
    TERMS: "google.com"
}

export {
    PATH,
    LINK
}