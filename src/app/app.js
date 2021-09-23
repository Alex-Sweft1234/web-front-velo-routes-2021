import {BrowserRouter as Router, Route} from 'react-router-dom'
import {MainPage, InitialPage} from '../pages'
import ModalRootApp from './modal-root-app'

const App = () => {
    return(
        <>
            <ModalRootApp/>
            <Router basename="/">
                <Route key="initial" path="/" component = {InitialPage} exact/>
                <Route key="main" path="/main" component = {MainPage}/>
            </Router>
        </>
    )
}

export default App