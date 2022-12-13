import { CLICK_SEARCH_FIELDS, DELETE_PRODUCT_LIST, DELETE_USER_LIST, FETCH_PRODUCT, FETCH_PRODUCT_LIST, FETCH_USER, FETCH_USER_LIST, SET_TABLE_PARAMS } from "../actionTypes"

const INITIAL_STATE = {
    productList: {
        products: [],
        count: 0
    },
    userList: {
        users: [],
        count: 0
    },
    currentUser: {},
    currentProduct: {},
    tableParams: {
        pagination: {
            current: 1,
            pageSize: 10
        },
        filter: null,
        sorter: {
            order: 'ascend',
            filter: 'name'
        }
    },
    hideSearchFields: true
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
            return { ...state, userList: state.userList.users.filter(user => user.key !== action.user_id) }
        case CLICK_SEARCH_FIELDS:
            return { ...state, hideSearchFields: !state.hideSearchFields }
        case SET_TABLE_PARAMS:
            return { ...state, tableParams: action.tableParams }
        default:
            return state
    }
}
export default list