import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
// import Header from './header/header'
import Footer from './footer/footer'
import FadeLayout from '../fade/fade-transition'
import {colors} from '../../theme'

const Layout = (props) => {

  const classes = useStyles()

  return (
    <FadeLayout>
      <Box className={classes.body}>
        <Box className={classes.header}>
          {/*<Header />*/}
        </Box>
        <Box className={classes.main}>
          { props.children }
        </Box>
        <Box className={classes.footer}>
          <Footer />
        </Box>
      </Box>
    </FadeLayout>
  )
}

const useStyles = makeStyles((theme) => ({
  body: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white
  },
  main: {
    flex: 'auto'
  },
  header: {

  },
  footer: {
    flexShrink: 0
  }
}))

export default Layout