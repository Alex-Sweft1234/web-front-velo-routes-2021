import {Redirect, Route} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'

const PrivateRoute = ({ component: Component, key, ...rest }) => {
    const {Auth: {auth}} = useSelector((state) => state, shallowEqual)

    if (!auth) {
        return <Redirect to={{pathname: '/'}} />
    }

    return (
        <Route
            key={key}
            {...rest}
            render={(props) => {
                return <Component {...props} />
            }}
        />
    )
}

export default PrivateRoute
