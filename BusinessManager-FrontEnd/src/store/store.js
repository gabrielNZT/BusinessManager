import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import auth from './login/reducer.js'
import list from './listUser/reducer.js'
import siderCollapsed from '../global/components/layout/reducer/reducer.js'

const sagaMiddleware = createSagaMiddleware()
const allReducers = combineReducers({
    auth: auth,
    list: list,
    siderCollapsed: siderCollapsed
})
const store = createStore(allReducers,
    applyMiddleware(sagaMiddleware))

export default store;
