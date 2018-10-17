import { LOADING_ACTION, LOADING_PROCESS_ACTION, ERROR_ACTION, SET_PAGE_TITLE_ACTION, SET_PAGE_HEADER_ACTION, LOGIN_SUCCESS_ACTION, LOGOUT_ACTION } from "../../redux/constain";

const initGlobalAppReducer = {
    loading: {
        isLoading: true,
        loadingCount: 0,
        loadingProcess: 50,
    },
    error: {
        isError: false,
        message: '',
        title: '',
        log: ''
    },
    authen: {
        isLoggedIn: false,
        session: '',
        userInfo: {}
    },
    page: {
        title: 'React App Title',
        header: 'App Header',
    }
}

export const globalAppReducer = (state = initGlobalAppReducer, action) => {
    switch (action.type) {
        case LOADING_ACTION:{
            const loadingState = loadingActionHelper(state, action.payload);
            return { ...state, loading: loadingState };
        }
        case LOADING_PROCESS_ACTION:{
            const loadingState = loadingProcessActionHelper(state.loading, action.payload);
            return { ...state, loading: loadingState };
        }
        case ERROR_ACTION:
            const { message, title, log = '' } = action.payload;
            return { ...state, error: {isError: true, message: message, title: title, log: log } };
        case LOGIN_SUCCESS_ACTION: 
            const { isLoggedIn, session = '', userInfo} = action.payload;
            return {...state, authen: { isLoggedIn, session, userInfo }}
        case LOGOUT_ACTION: 
            return {...state, authen: initGlobalAppReducer.authen}
        case SET_PAGE_TITLE_ACTION:
            return { ...state, page: { ...state.page, title: action.payload } };
        case SET_PAGE_HEADER_ACTION:
            return { ...state, page: { ...state.page, header: action.payload } };
        default:
            return state
    }
}

const loadingActionHelper = (loadingState, isLoadingStep) => {
    const { isLoading, loadingCount } = loadingState;
    if (isLoadingStep) {
        return { loadingCount: loadingCount + 1, isLoading: true, loadingProcess: 0 };
    } else {
        if (loadingCount > 1) {
            return { loadingCount: loadingCount - 1, isLoading: isLoading, loadingProcess: 0 };
        } else {
            return { loadingCount: 0, isLoading: false, loadingProcess: 0 };
        }
    }
}
const loadingProcessActionHelper = (loadingState, process) => {
    if (process < 100) {
        return { ...loadingState, loadingProcess: process };
    } else {
        return loadingActionHelper(loadingState, false);
    }
}