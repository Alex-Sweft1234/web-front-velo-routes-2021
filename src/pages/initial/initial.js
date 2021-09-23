import {useWindowDimensions} from '../../components'
import {Box, Button, Container, Grid, makeStyles} from '@material-ui/core'
import {FadeContainer} from '../../components'
import Fade from 'react-reveal/Fade'
import {colors, font} from '../../theme'
import fon from'../../img/initial-fon.jpg.webp'
import {useDispatch} from 'react-redux'
import {openModal} from '../../redux/actions/actions'
import {SIGNUP_MODAL, SIGNIN_MODAL} from '../../redux/actions/action-types'
//import logo from'../../img/initial-velo.png.webp'

const InitialPage = () => {

    const classes = useStyles()

    const {width, height} = useWindowDimensions()

    const dispatch = useDispatch()

    const openSignUp = () => {
        openModal(dispatch, SIGNUP_MODAL)
    }

    const openSignIn = () => {
        openModal(dispatch, SIGNIN_MODAL)
    }

    return (
        <FadeContainer>
            <Box width='100%' height={height} minHeight={700} className={classes.page}>
                <Box
                    width='100%'
                    height={height}
                    minHeight={700}
                    display='flex'
                    alignItems='center'
                    className={classes.container}
                >
                    <Container maxWidth={'md'}>
                        <Fade top cascade duration={1000} delay={600}>
                            {/*<Box width='100%' display='flex' justifyContent='center'>*/}
                            {/*    <img src={logo} className={classes.logo} alt='...'/>*/}
                            {/*</Box>*/}
                            <Box className={classes.title}>
                                Поделись своими любимыми вело маршрутами<br/>
                                Расскажи нам интересные истории о вело заездах
                            </Box>
                            <Grid container direction={'row'} justify={'space-evenly'} alignItems={'flex-start'} spacing={0}>
                                <Grid item xs={12} md={'auto'}>
                                    <Button classes={{root: classes.button}} onClick={openSignIn}>
                                        Войти
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={'auto'}>
                                    <Button classes={{root: classes.button}} onClick={openSignUp}>
                                        Зарегистрироваться
                                    </Button>
                                </Grid>
                            </Grid>
                        </Fade>
                    </Container>
                </Box>
            </Box>
        </FadeContainer>
    )
}

const useStyles = makeStyles((theme) => ({
    page: {
        zIndex: 99,
        backgroundImage: 'url('+ fon +')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
    },
    container: {
        zIndex: 100,
        fontFamily: font.default,
        backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    logo: {
        width: 256,
        height: 'auto',
        marginBottom: 20
    },
    title: {
        fontSize: 34,
        fontWeight: 600,
        color: colors.white,
        textAlign: 'center',
        lineHeight: 1.5,
        marginBottom: 40
    },
    button: {
        minHeight: 80,
        width: 330,
        backgroundColor: colors.blue,
        color: colors.white,
        fontSize: 22,
        borderRadius: 50,
        transition: '.5s',
        '&:hover': {
            backgroundColor: colors.white,
            color: colors.blue,
            // opacity: .9,
            // boxShadow: '2px 1px 8px rgba(255, 255, 255, 0.3)',
        }
    }
}))

export default InitialPage