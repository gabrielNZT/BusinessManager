import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import auth from '../pages/login/reducer/reducer.js'
import list from '../pages/listUser/reducer/reducer.js'

const sagaMiddleware = createSagaMiddleware()
const allReducers = combineReducers({
    auth: auth,
    list: list
})
const store = createStore(allReducers,
    applyMiddleware(sagaMiddleware))

export default store;
