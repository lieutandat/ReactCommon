import { combineReducers } from 'redux'
import {globalAppReducer} from '../containers/App/reducer'

export const rootReducer = combineReducers({
    globalApp: globalAppReducer
})



