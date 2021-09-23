import {useState} from 'react'
import clsx from 'clsx'
import {Grid, Drawer, AppBar, makeStyles, Link} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import useReactRouter from 'use-react-router'
import {shallowEqual, useSelector} from 'react-redux'
import {Menu as MenuIcon, Close as CloseIcon} from '@material-ui/icons'
import {animateScroll as scroll, Link as ScrollLink} from 'react-scroll'
import MyLink from '../my-link'
import StopAction from '../../../stop-action/stop-action'
import Fade from 'react-reveal/Fade'
import font from '../../../../theme/font'
import colors from '../../../../theme/colors'


const MobileHeader = () => {

  const classes = useStyles()
  const {history} = useReactRouter()
  const [open, setOpen] = useState(false)

  const {auth: {auth}} = useSelector((state) => state, shallowEqual)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleClick = (key) => {
    if (window.location.pathname !== '') {
      history.push(`/#${key}`)
      setOpen(false)
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
    <>
      <AppBar className={classes.menu} position="fixed">
        <Grid container direction={'row'} justify={'space-between'} alignItems={'center'} spacing={0} className={classes.gridContainer}>
          <Grid item xs={'auto'}>
            <Link component={MyLink} to='/' className={classes.iconLink}>
              {/*<img alt={'AdRush'} src={rush} className={classes.rushImg} />*/}
            </Link>
          </Grid>
          <Grid item xs={'auto'}>
            <IconButton
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide, classes.iconButton)}
              style={{paddingLeft: 0, paddingRight: 0}}
            >
              <MenuIcon style={{color: colors.gold, fontSize: 38}} />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>

      <Drawer
        className={classes.drawer}
        anchor="top"
        open={open}
        classes={{paper: classes.drawerPaper}}
      >
        <Grid container direction={'row'} justify={'space-between'} alignItems={'center'} spacing={0} className={classes.gridContainer}>
          <Grid item xs={'auto'}>
            <Link component={MyLink} to='/' >
              {/*<img alt={'AdRush'} src={rush} className={classes.rushImg} />*/}
              {/*{auth && (<img alt={'FixPrice'} src={price} className={classes.priceImg} />)}*/}
            </Link>
          </Grid>
          <Grid item xs={'auto'}>
            <IconButton onClick={ handleDrawerClose } className={classes.iconButton}>
              <CloseIcon style={{color: colors.gold, fontSize: 35}} />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container direction={'column'} justify={'space-between'} alignItems={'center'} spacing={0} className={classes.gridItems}>
          <Grid item xs={'auto'} className={classes.menuItem}>
            <Link
              component={MyLink}
              onClick={() => {
                  scrollToTop()
                  setOpen(false)
                }
              }
              to={'/'}
              className={classes.link}
            >
              <Fade top delay={700} duration={1050}>Главная</Fade>
            </Link>
          </Grid>
          {Object.entries(scrollLinks).map(([key, val], index) => (
            <Grid key={key} item xs={'auto'} className={classes.menuItem}>
              <Link
                component={ScrollLink}
                className={classes.link}
                onClick={() => {
                  handleClick(key)
                  setOpen(false)
                }}
                activeClass='active'
                to={key}
                spy
                hashSpy
                smooth
                duration={600}
              >
                <Fade top delay={600 - ((index + 1) * 100)} duration={1000 - ((index + 1) * 50)}>{val}</Fade>
              </Link>
            </Grid>
          ))}
          <Grid item xs={'auto'} className={classes.menuItem}>
            <Link component={MyLink} to='/faq' onClick={() => setOpen(false)} className={classes.link}>
              <Fade top delay={200} duration={850}>FAQ</Fade>
            </Link>
          </Grid>
          {!auth && (
            <StopAction stopText={' '}>
              <Grid item xs={'auto'} className={classes.menuItemButton} style={{marginTop: 65}}>
                <Link
                  component={MyLink}
                  onClick={() => {
                    scrollToTop()
                    setOpen(false)
                  }}
                  to={'/signup'}
                  className={classes.linkButton}
                >
                  <span style={{transform: 'scale(.7, 1)'}}>Регистрация</span>
                </Link>
              </Grid>
            </StopAction>
          )}
          {!auth && (
            <Grid item xs={'auto'} className={classes.menuItemButton}>
              <Link component={MyLink} onClick={() => {
                setOpen(false)
                scrollToTop()
              }} to={'?signin'} className={classes.linkButton} style={{border: 'none'}}>
                <span style={{transform: 'scale(.7, 1)'}}>Войти</span>
              </Link>
            </Grid>
          )}
          {auth && (
            <Grid item xs={'auto'} className={classes.menuItem}>
              <Link component={MyLink} to='/lk' onClick={() => setOpen(false)} className={classes.link}>
                <Fade top delay={100} duration={800}>Личный кабинет</Fade>
              </Link>
            </Grid>
          )}
          {auth && (
            <Grid item xs={'auto'} className={classes.menuItemButton} style={{marginTop: 65}}>
              <Link component={MyLink} to='/logout' className={classes.linkButton}>
                <span style={{transform: 'scale(.7, 1)'}}>Выход</span>
              </Link>
            </Grid>
          )}
        </Grid>
      </Drawer>
    </>
  )
}

const drawerHeight = 610

const useStyles = makeStyles((theme) => ({
  menu: {
    width: '100%',
    minHeight: 75,
    backgroundColor: colors.black,
    [theme.breakpoints.down('sm')]: {
      minHeight: 70,
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 60,
    }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    height: drawerHeight,
    width: '100%',
    backgroundColor: colors.black,
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgba(0, 0, 0, .7)'
    }
  },
  drawerPaper: {
    height: drawerHeight,
    maxWidth: '100%',
    backgroundColor: colors.black,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colors.gold
  },
  gridContainer: {
    padding: '0 15px 0 15px'
  },
  gridItems: {
    marginTop: 40
  },
  rushImg: {
    width: 160,
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 130,
      height: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: 110,
      height: 'auto',
    }
  },
  priceImg: {
    width: 160,
    height: 'auto',
    transition: '.3s',
    marginLeft: 30,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 10,
      width: 130,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 5,
      width: 115,
    }
  },
  menuItem: {
    height: 55,
    fontSize: 34,
    fontWeight: 400,
    fontFamily: font.PDF_reg,
    color: colors.blue,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
    '& a': {
      '&.active': {
        textDecoration: 'none',
        color: colors.gold,
        '&:hover': {
          color: colors.gold
        }
      },
    },
  },
  menuItemButton: {
    marginTop: 15,
    height: 55,
    fontSize: 18,
    fontWeight: 600,
    fontFamily: font.PDF_reg,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
  },
  iconButton: {
    paddingLeft: 0,
    paddingRight: 0
  },
  link: {
    '-webkit-tap-highlight-color': 'transparent',
    textDecoration: 'none',
    color: colors.white,
    transition: '.3s',
    transform: 'scale(.7, 1)',
    '&:hover': {
      textDecoration: 'none',
    }
  },
  linkButton: {
    '-webkit-tap-highlight-color': 'transparent',
    borderRadius: 0,
    borderColor: colors.gold,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    backgroundColor: colors.black,
    color: colors.gold,
    width: 330,
    height: 50,
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      width: 280,
    }
  },
  iconLink: {
    '-webkit-tap-highlight-color': 'transparent',
  }
}))

export default MobileHeader