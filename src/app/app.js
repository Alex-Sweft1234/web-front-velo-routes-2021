import {Route} from 'react-router-dom'
import {PrivateRoute} from '../components'
import {MainPage, InitialPage} from '../pages'
import ModalRootApp from './modal-root-app'

const App = () => {



    return(
        <>
            <ModalRootApp/>
            <Route key="initial" path="/" component = {InitialPage} exact/>
            <PrivateRoute key="main" path="/main" component = {MainPage} exact/>
        </>
    )
}

export default App