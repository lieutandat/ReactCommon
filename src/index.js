import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App/App'
import { configureStore } from './store';
import {initPageAction} from './redux/actions'
const store = configureStore();

window.init = (initPage) => {
    store.dispatch(initPageAction(initPage))
}

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));
 registerServiceWorker();
