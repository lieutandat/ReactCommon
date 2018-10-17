import {
    ERROR_ACTION,
    LOADING_ACTION,
    LOADING_PROCESS_ACTION,
    LOGIN_FAIL_ACTION,
    LOGIN_START_ACTION,
    LOGIN_SUCCESS_ACTION,
    SET_PAGE_HEADER_ACTION,
    SET_PAGE_TITLE_ACTION,
    LOGOUT_ACTION,
} from './constain';


export const loginStartAction = (username, password) => ({
    type: LOGIN_START_ACTION,
    payload: { username: username, password: password }
});

export const loginSuccessAction = (auth) => ({
    type: LOGIN_SUCCESS_ACTION,
    payload: auth
});
export const loginFailAction = (error) => ({
    type: LOGIN_FAIL_ACTION,
    payload: error
});
export const logoutAction = () => ({
    type: LOGOUT_ACTION
});
export const loadingAction = (isLoading) => ({
    type: LOADING_ACTION,
    payload: isLoading
});
export const loadingProcessAction = (process) => ({
    type: LOADING_PROCESS_ACTION,
    payload: process
});
export const errorAction = (error) => ({
    type: ERROR_ACTION,
    payload: error
});
export const setPageTitleAction = (title) => ({
    type: SET_PAGE_TITLE_ACTION,
    payload: title
});
export const setPageHeaderAction = (header) => ({
    type: SET_PAGE_HEADER_ACTION,
    payload: header
});