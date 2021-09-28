import {combineReducers} from 'redux'
import Auth from './reducers/auth'
import ModalRoot from './reducers/modal-root'

export default combineReducers({
    Auth,
    ModalRoot
})