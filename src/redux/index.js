import { combineReducers } from 'redux'
import {globalAppReducer} from '../containers/App/reducer'
import { dynamicReducer } from '../containers/initPage/reducer';
import {reducer as reduxFormReducer} from 'redux-form'
export const rootReducer = combineReducers({
    globalApp: globalAppReducer,
    dynamicPage: dynamicReducer,
    form: reduxFormReducer
})



