const EMAIL_REGEX = /^[a-z][a-z0-9_]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/g;
const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
const NUMBER_REGEX = /^[0-9]*$/g;

const REGEX = {
    EMAIL_REGEX,
    PHONE_REGEX,
    NUMBER_REGEX
}
export {
    REGEX
}