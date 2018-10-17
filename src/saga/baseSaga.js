import { put } from 'redux-saga/effects'
import { loadingAction, errorAction } from "../redux/actions";

export function* requestData(data, requestMethod = () => {}) {
    try {
      yield putLoading(true);
      return yield requestMethod(data)
    } catch (e) {
        console.log('Catch requestDataSaga: ', e)
        yield putError(e)
    } finally {
      yield putLoading(false);
    }
}

function* putError(error) {
    const parseError =  error.error
    const  message = parseError ? parseError.message : 'Something wrong';
    const title = parseError ? parseError.title : 'Error Warning';
    yield put(errorAction({message: message, title: title}))
}

function* putLoading (isLoading) {
  yield put(loadingAction(isLoading))
}
