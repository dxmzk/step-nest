import AppException from "./AppException";
declare const Errors: {
    PWD_PARAM: AppException;
    PWD_ERR: AppException;
    ACCOUNT_PARAM: AppException;
    ACCOUNT_REPEAT: AppException;
    ACCOUNT_OUTOF: AppException;
    ACCOUNT_ERROR: AppException;
    ACCOUNT_NOT: AppException;
    LOGIN_ERROR: AppException;
    PARAM_ERROR: AppException;
};
export default Errors;
