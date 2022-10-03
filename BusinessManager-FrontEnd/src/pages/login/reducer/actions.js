import {LOGIN, HAS_TEMPORARY_PASSWORD} from '../../../store/actionTypes.js'

export function LogIn(user) {
    return {type: LOGIN, user}
}

export function HasTemporaryPassword(){
    return {type: HAS_TEMPORARY_PASSWORD}
}
