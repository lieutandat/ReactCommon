import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from '../redux';
import mySaga from '../saga/saga';

export const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(sagaMiddleWare)
        )
    )
    sagaMiddleWare.run(mySaga)

    return store
}