import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import auth from '../pages/login/reducer/reducer.js'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(auth,
    applyMiddleware(sagaMiddleware))

export default store;
