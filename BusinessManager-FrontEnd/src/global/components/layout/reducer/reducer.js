import { CHANGE_COLLAPSED } from "../../../../store/actionTypes"

const INITIAL_STATE = {
    collapsed: false
}

function siderCollapsed(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }
}
export default siderCollapsed