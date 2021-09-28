import {} from './action-types.js'
//import axios from 'axios'

export const openModal = (dispatch, modal, data) => {
    dispatch({type: modal, payload: data})
}

export const authAction = (dispatch, status, data) => {
    dispatch({type: status, payload: data})
}