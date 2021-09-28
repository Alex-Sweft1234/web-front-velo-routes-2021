import {AUTH_SUCCESS, AUTH_FAILURE, AUTH_REQUEST, LOGOUT} from '../actions/action-types.js'

const initialState = {
    data: null,
    loading: false,
    auth: false
}

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                data: null,
                loading: true,
                auth: false,
            }
        case AUTH_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                auth: true
            }
        case AUTH_FAILURE:
            return {
                data: action.payload,
                loading: false,
                auth: false
            }
        case LOGOUT:
            return {
                data: null,
                loading: false,
                auth: false
            }
        default:
            return state
    }
}