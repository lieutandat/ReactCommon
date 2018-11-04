import { put, takeEvery } from 'redux-saga/effects'
import { LOGIN_START_ACTION, DYNAMIC_SUBMIT_ACTION } from '../redux/constain';
import { requestData } from './baseSaga';
import { userLoginApi, dynamicPostAPI } from '../utils/services';
import { loginSuccessAction, loginFailAction } from '../redux/actions';

function* loginAuth(action) {
  const response = yield requestData(action.payload, userLoginApi)
  console.log("loginAuthSaga: ", response)
  if(response) {
      // yield put(loginSuccessAction(response));
      yield put(loginSuccessAction({isLoggedIn: true, session : '', userInfo: {}}));
  } else {
      // yield put(loginFailAction({}))
      yield put(loginSuccessAction({isLoggedIn: true, session : '', userInfo: {}}));
  }
  
}

function* dynamicSaga(action) {
  console.log("dynamicSaga start: ", action.payload)
  const response = yield requestData({...action.payload}, dynamicPostAPI)
  console.log("dynamicSaga: ", response)
  // if(response) {
  //     // yield put(loginSuccessAction(response));
  //     yield put(loginSuccessAction({isLoggedIn: true, session : '', userInfo: {}}));
  // } else {
  //     // yield put(loginFailAction({}))
  //     yield put(loginSuccessAction({isLoggedIn: true, session : '', userInfo: {}}));
  // }
  
}

export function* mySaga() {
  yield takeEvery(LOGIN_START_ACTION, loginAuth);
  yield takeEvery(DYNAMIC_SUBMIT_ACTION, dynamicSaga)
}

