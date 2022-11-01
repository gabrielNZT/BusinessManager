import { CLICK_SEARCH_FIELDS, DELETE_PRODUCT_LIST, DELETE_USER_LIST, FETCH_PRODUCT, FETCH_PRODUCT_LIST, FETCH_USER, FETCH_USER_LIST } from "../../../store/actionTypes"

const INITIAL_STATE = {
    productList: [],
    userList: [],
    currentUser: {},
    currentProduct: {},
    HideSearchFields: false
}

function list(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PRODUCT:
            return { ...state, currentProduct: action.product }
        case FETCH_USER:
            return { ...state, currentUser: action.user }
        case FETCH_USER_LIST:
            return { ...state, userList: action.userList }
        case FETCH_PRODUCT_LIST:
            return { ...state, productList: action.productList }
        case DELETE_PRODUCT_LIST:
            return { ...state, productList: state.productList.filter(product => product.key !== action.product_id) }
        case DELETE_USER_LIST:
            return { ...state, userList: state.userList.filter(user => user.key !== action.user_id) }
        case CLICK_SEARCH_FIELDS:
            return {...state, HideSearchFields: !state.HideSearchFields}
        default:
            return state
    }
}
export default list