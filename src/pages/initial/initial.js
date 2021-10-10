import {useWindowDimensions} from '../../components'
import {Box, Button, Container, Grid, makeStyles} from '@material-ui/core'
import {FadeContainer} from '../../components'
import Fade from 'react-reveal/Fade'
import Zoom from '@material-ui/core/Zoom'
import {colors, font} from '../../theme'
import fon from'../../img/initial-fon.jpg.webp'
import {useDispatch} from 'react-redux'
import {openModal} from '../../redux/actions/actions'
import {SIGNUP_MODAL, SIGNIN_MODAL} from '../../redux/actions/action-types'
//import logo from'../../img/initial-velo.png.webp'

const InitialPage = () => {

    const classes = useStyles()
    const {height} = useWindowDimensions()
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
                    minHeight={800}
                    display='flex'
                    alignItems='center'
                    className={classes.container}
                >
                    <Container maxWidth={'md'}>
                        {/*<Box width='100%' display='flex' justifyContent='center'>*/}
                        {/*    <img src={logo} className={classes.logo} alt='...'/>*/}
                        {/*</Box>*/}
                        <Grid container direction={'row'} justify={'space-evenly'} alignItems={'flex-start'} spacing={1}>
                            <Grid item xs={12} sm={'auto'} style={{display: 'flex', justifyContent: 'center'}}>
                                <Button classes={{root: classes.button}} onClick={openSignIn}>
                                    Войти
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={'auto'} style={{display: 'flex', justifyContent: 'center'}}>
                                <Button classes={{root: classes.button}} onClick={openSignUp}>
                                    Зарегистрироваться
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction={'row'} justify={'center'} alignItems={'center'} spacing={1}>
                            <Grid item xs={11} md={9}>
                                <Zoom in={true} timeout={{enter: 700}}>
                                    <Box className={classes.title}>
                                        Если любишь велосипеды,<br/>
                                        поделись своими любимыми маршрутами и<br/>
                                        расскажи нам интересные истории о велопоездках !
                                    </Box>
                                </Zoom>
                            </Grid>
                        </Grid>
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
        fontSize: 24,
        fontWeight: 600,
        color: colors.white,
        textAlign: 'center',
        lineHeight: 1.5,
        borderRadius: 30,
        padding: '25px 0',
        backgroundColor: 'rgba(255, 255, 255, .15)'
    },
    button: {
        minHeight: 70,
        width: 330,
        backgroundColor: colors.blue,
        color: colors.white,
        fontSize: 22,
        borderRadius: 30,
        marginBottom: 40,
        transition: '.5s',
        '&:hover': {
            transform: 'translate(0px, 5px)',
            backgroundColor: colors.white,
            color: colors.blue
        }
    }
}))

export default InitialPage