import {LOGIN} from '../../../store/actionTypes.js'

export function LogIn(user) {
    return {type: LOGIN, user}
}
