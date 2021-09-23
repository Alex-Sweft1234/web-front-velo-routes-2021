import {useSelector, shallowEqual} from 'react-redux'
import {Signin, Signup} from '../pages'

const ModalRootApp = () => {

    const {ModalRoot: {modal, show}} = useSelector((state) => state, shallowEqual)

    return(
        <>
            {(modal === 'SIGNUP' && show) ? <Signup/> : null}
            {(modal === 'SIGNIN' && show) ? <Signin/> : null}
        </>
    )
}

export default ModalRootApp