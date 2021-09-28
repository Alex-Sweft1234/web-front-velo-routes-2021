import {Route} from 'react-router-dom'
import {MainPage, InitialPage} from '../pages'
import ModalRootApp from './modal-root-app'

const App = () => {
    return(
        <>
            <ModalRootApp/>
            <Route key="initial" path="/" component = {InitialPage} exact/>
            <Route key="main" path="/main" component = {MainPage} exact/>
        </>
    )
}

export default App