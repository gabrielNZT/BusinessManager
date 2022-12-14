import {LOGIN, 
    HAS_TEMPORARY_PASSWORD, 
    FETCH_USER_DATA, 
    FETCH_COMPANY_NAME,
    FETCH_COMPANY_NAME_CONFIG_PAGE} from '../actionTypes.js'

export function LogIn(user) {
    return {type: LOGIN, user}
}

export function HasTemporaryPassword(){
    return {type: HAS_TEMPORARY_PASSWORD}
}

export function FetchUserData(user){
    return {type: FETCH_USER_DATA, user}
}

export function FetchCompanyName(company){
    return {type: FETCH_COMPANY_NAME, company}
}

export function FetchCompanyNameConfigPage(company){
    return {type: FETCH_COMPANY_NAME_CONFIG_PAGE, company}
}