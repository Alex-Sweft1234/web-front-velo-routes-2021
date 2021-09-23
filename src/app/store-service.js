import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from '../redux/root-reducer'
import reduxThunk from 'redux-thunk'

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose

const loggerMiddleware = store => next => action => {
    //console.log('Middleware', store.getState())
    return next(action)
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
    loggerMiddleware,
    reduxThunk
)))

export default store