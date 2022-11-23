import { CLICK_SEARCH_FIELDS, DELETE_PRODUCT_LIST, DELETE_USER_LIST, FETCH_PRODUCT, FETCH_PRODUCT_LIST, FETCH_USER, FETCH_USER_LIST, SET_TABLE_PARAMS } from "../../../store/actionTypes";

export function CurrentProduct(product) {
    return { type: FETCH_PRODUCT, product }
}

export function FetchUserList(userList) {
    return { type: FETCH_USER_LIST, userList }
}

export function FetchProductList(productList) {
    return { type: FETCH_PRODUCT_LIST, productList }
}

export function CurrentUser(user) {
    return { type: FETCH_USER, user }
}

export function DeleteUserFromList(user_id) {
    return { type: DELETE_USER_LIST, user_id }
}

export function DeleteProductFromList(product_id) {
    return { type: DELETE_PRODUCT_LIST, product_id }
}

export function SetTableParams(tableParams) {
    return { type: SET_TABLE_PARAMS, tableParams }
}

export function ClickSearchField() {
    return { type: CLICK_SEARCH_FIELDS }
}