import {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {Signin} from '../../api/service'
import {email as emailRules, password as passwordRules} from '../../components/form-control/rules-valid-form'
import {email as emailHelperText, password as passwordHelperText} from '../../components/form-control/helper-text-valid-form'
import useReactRouter from 'use-react-router'
import {useDispatch} from 'react-redux'
import {authAction, openModal} from '../../redux/actions/actions'
import {AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, CLOSE_MODAL} from '../../redux/actions/action-types'
import {TextField, Button, Box, IconButton} from '@material-ui/core'
import {Alert} from '../../components'
import {VisibilityOutlined, VisibilityOffOutlined} from '@material-ui/icons'
import InputAdornment from '@material-ui/core/InputAdornment'

const SignInForm = () => {

    const dispatch = useDispatch()
    const {history} = useReactRouter()

    const [errorMessage, setErrorMessage] = useState(undefined)
    const [showPas, setShowPas] = useState(false)
    const [alert, setAlert] = useState(false)

    const handleClickShowPassword = () => {
        setShowPas(!showPas)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    //react-hook-form
    const {
        handleSubmit,
        control,
        formState: {errors}
    } = useForm({mode: 'onBlur'})

    const onSubmit = data => {

        authAction(dispatch, AUTH_REQUEST)

        const signinData = {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        }

        Signin(signinData).then(
            res => {
                if(typeof res.data.registered !== 'undefined' && res.data.registered) {
                    authAction(dispatch, AUTH_SUCCESS)
                    openModal(dispatch, CLOSE_MODAL)
                    history.push('/main')
                } else {
                    authAction(dispatch, AUTH_FAILURE)
                    if(res.data.error.message === 'EMAIL_NOT_FOUND') {
                        setErrorMessage('Учетная запись с введенным адресом эл. почты не зарегистрирована.')
                        setAlert(true)
                    } else if(res.data.error.message === 'INVALID_PASSWORD'){
                        setErrorMessage('Неверный пароль. Попробуйте еще раз.')
                        setAlert(true)
                    } else if(res.data.error.message === 'USER_DISABLED'){
                        setErrorMessage('Учетная запись пользователя отключена администратором.')
                        setAlert(true)
                    }
                }
            }
        )
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {/*email*/}
            <Controller
                control={control}
                name='email'
                defaultValue=''
                rules={emailRules}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextField
                        fullWidth
                        label='E-mail'
                        color='primary'
                        variant='outlined'
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        helperText={emailHelperText(errors)}
                    />
                )}
            />
            {/*password*/}
            <Controller
                control={control}
                name='password'
                defaultValue=''
                rules={passwordRules}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextField
                        fullWidth
                        type={showPas ? 'text' : 'password'}
                        label='Пароль'
                        color='primary'
                        variant='outlined'
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPas ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        helperText={passwordHelperText(errors)}
                    />
                )}
            />
            {/*alert*/}
            <Alert
                severity='error'
                errorMessage={errorMessage}
                show={alert}
                onClose={() => {
                    setAlert(false)
                }}
            />
            {/*submit button*/}
            <Box mt={3}>
                <Button fullWidth type='submit' variant='contained' color='primary'>
                    Войти
                </Button>
            </Box>
        </form>
    )
}

export default SignInForm