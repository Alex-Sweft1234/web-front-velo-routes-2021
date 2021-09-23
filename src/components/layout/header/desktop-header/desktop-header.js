import {Grid, Container, AppBar, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import MyLink from '../my-link'
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll'
import useReactRouter from 'use-react-router'
import colors from '../../../../theme/colors'
import font from '../../../../theme/font'
import logoW from '../../../../img/logo-white.png.webp'
import logoB from '../../../../img/logo-black.png.webp'

const DesktopHeader = () => {

  const classes = useStyles()

  const {history} = useReactRouter()

  const handleClick = (key) => {
    if (window.location.pathname !== '') {
      history.push(`/#${key}`)
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const scrollLinks = {
    rules: 'Правила',
    prizes: 'Призы',
    winners: 'Победители',
  }

  return(
    <AppBar className={classes.appBar} position="absolute">
      <Container maxWidth={'lg'} className={classes.container}>
        <Grid container direction={'row'} justify={'space-between'} alignItems={'center'} spacing={1} className={classes.gridContainer}>
          <Grid item xs={'auto'}>
            <Link component={MyLink} onClick={() => scrollToTop()} to='/' className={classes.iconLink}>
              <img alt={'Белая Дача'} src={window.location.pathname === '/' ? logoW : logoB} className={classes.logoImg}/>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Grid container direction={'row'} justify={'space-between'} alignItems={'center'} spacing={0} className={classes.menuContainer}>
              <Grid item xs={12} md={'auto'} lg={'auto'} className={classes.menuItem}>
                <Link component={MyLink} onClick={() => scrollToTop()} to={'/'} className={classes.link}>
                  Главная
                </Link>
              </Grid>
              {Object.entries(scrollLinks).map(([key, val]) => (
                <Grid key={key} item xs={12} md={'auto'} lg={'auto'} className={classes.menuItem}>
                  <Link
                    component={ScrollLink}
                    className={classes.link}
                    onClick={() => handleClick(key)}
                    activeClass='active'
                    to={key}
                    spy
                    hashSpy
                    smooth
                    duration={600}
                  >
                    {val}
                  </Link>
                </Grid>
              ))}
              <Grid item xs={12} md={'auto'} lg={'auto'} className={classes.menuItem}>
                <Link component={MyLink} to='/faq' className={classes.link}>
                  FAQ
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: '100%',
    height: 100,
    [theme.breakpoints.down('lg')]: {
      height: 100,
    }
  },
  container: {
    padding: '0 10px'
  },
  gridContainer: {
    height: 100
  },
  menuContainer: {},
  logo: {},
  logoImg: {
    width: 448,
    height: 'auto',
    transition: '.3s',
    '&:hover': {
      opacity: .8
    }
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: font.default,
    '& a': {
      '&.active': {
        padding: '12px 20px',
        backgroundColor: colors.pink,
        borderRadius: 30,
        textDecoration: 'none',
        color: colors.white,
        transition: '.5s',
        '&:hover': {
          opacity: .8
        },
      },
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  link: {
    color: colors.black,
    '-webkit-tap-highlight-color': 'transparent',
    textDecoration: 'none',
    transition: '.3s',
    '&:hover': {
      textDecoration: 'none',
      opacity: .6
    },
  },
  iconLink: {
    '-webkit-tap-highlight-color': 'transparent',
  }
}))

export default DesktopHeader