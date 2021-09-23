import {SIGNUP_MODAL, SIGNIN_MODAL, CLOSE_MODAL} from '../actions/action-types.js'

const initialState = {
    modal: null,
    show: false
}

export default function ModalRoot(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_MODAL:
            return {
                modal: 'SIGNUP',
                show: true
            }
        case SIGNIN_MODAL:
            return {
                modal: 'SIGNIN',
                show: true
            }
        case CLOSE_MODAL:
            return {
                modal: null,
                show: false
            }
        default:
            return state
    }
}