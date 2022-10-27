import { FETCH_PRODUCT, FETCH_PRODUCT_LIST, FETCH_USER, FETCH_USER_LIST } from "../../../store/actionTypes";

export function CurrentProduct(product) {
    return {type: FETCH_PRODUCT, product}
}

export function FetchUserList(userList) {
    return {type: FETCH_USER_LIST, userList}
}

export function FetchProductList(productList) {
    return {type: FETCH_PRODUCT_LIST, productList}
}

export function CurrentUser(user) {
    return {type: FETCH_USER, user}
}