import {Box, Grid, Container, Hidden} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {font, colors} from '../../../theme'

const Footer = () => {

  const classes = useStyles()

  return(
    <Box className={classes.footer}>
      <Container maxWidth={'lg'} className={classes.container}>
        <Grid container direction={'row'} justify={'space-between'} alignItems={'center'} spacing={0} className={classes.gridContainer}>
          <Grid item xs={12} lg={'auto'}>
            <Box className={classes.rules}>
              <a href='/backend/files/rules.pdf' className={classes.link} target="_blank" rel="noopener noreferrer">
                Правила Акции
              </a>
            </Box>
            <Box className={classes.deal}>
              <a href='/backend/files/agreement.pdf' className={classes.link} target="_blank" rel="noopener noreferrer">
                Пользовательское соглашение
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} lg={'auto'}>
            <Box className={classes.email}>
              <Hidden smDown>
                Пишите нам на&nbsp;<a href={'mailto:support@plus.bdsalads.ru '} className={classes.link} target="_blank" rel="noopener noreferrer">support@plus.bdsalads.ru </a>
              </Hidden>
              <Hidden mdUp>
                <Box>
                  <span style={{display: 'flex', justifyContent: 'center', position: 'relative', top: 7}}>Пиши нам на</span><br/>
                  <a href={'mailto:support@plus.bdsalads.ru '} className={classes.link} target="_blank" rel="noopener noreferrer">support@plus.bdsalads.ru </a>
                </Box>
              </Hidden>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: 100,
    backgroundColor: colors.black,
    fontSize: 16,
    fontFamily: font.default,
    fontWeight: 400,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 120,
      fontSize: 16,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 130,
      fontSize: 16
    }
  },
  container: {
    padding: '0 20px'
  },
  gridContainer: {
    height: 100,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  rules: {
    marginBottom: 10,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      right: 0,
    }
  },
  deal: {
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },
  email: {
    color: colors.white,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },
  link: {
    textDecoration: 'none',
    color: colors.white,
    transition: '.3s',
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      opacity: .6
    }
  }
}))

export default Footer