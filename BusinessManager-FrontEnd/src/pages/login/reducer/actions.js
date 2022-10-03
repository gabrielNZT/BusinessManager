import {LOGIN, HAS_TEMPORARY_PASSWORD, FETCH_USER_DATA} from '../../../store/actionTypes.js'

export function LogIn(user) {
    return {type: LOGIN, user}
}

export function HasTemporaryPassword(){
    return {type: HAS_TEMPORARY_PASSWORD}
}

export function FetchUserData(user){
    return {type: FETCH_USER_DATA, user}
}