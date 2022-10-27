import { FETCH_PRODUCT, FETCH_PRODUCT_LIST, FETCH_USER, FETCH_USER_LIST } from "../../../store/actionTypes"

const INITIAL_STATE = {
    productList: [],
    userList: [],
    currentUser: {},
    currentProduct: {}
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
        default:
            return state
    }
}
export default list