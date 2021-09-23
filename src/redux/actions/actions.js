import {} from './action-types.js'
//import axios from 'axios'

export const openModal = (dispatch, modal, payload) => {
    dispatch({type: modal, payload})
}