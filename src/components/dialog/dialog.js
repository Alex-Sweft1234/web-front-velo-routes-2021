import clsx from 'clsx'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {openModal} from '../../redux/actions/actions'
import {CLOSE_MODAL, SIGNUP_MODAL} from '../../redux/actions/action-types'
import {Box, Dialog, DialogContent, DialogTitle, IconButton, makeStyles} from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import Close from '@material-ui/icons/Close'
import {isWidthDown} from '@material-ui/core/withWidth'
import withWidth from '@material-ui/core/withWidth/withWidth'
import ReactHtmlParser from 'react-html-parser'
import {colors, font} from '../../theme'

const Modal = ({width, maxWidth, name = 'default', className, title, children, close = true, onClose = () => {}}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {ModalRoot: {show}} = useSelector((state) => state, shallowEqual)
  const small = isWidthDown('xs', width)

  const onCloseModal = () => {
    openModal(dispatch, CLOSE_MODAL)
    onClose()
  }

  return (
      <Dialog
          maxWidth={maxWidth}
          className={clsx(className, classes.receiptModal)}
          scroll="body"
          disableBackdropClick={true}
          open={show}
          onClose={onCloseModal}
          fullScreen={small}
      >
        <DialogTitle disableTypography={true}>
          <Box className={classes.title} pt={4}>
            {ReactHtmlParser(title)}
          </Box>
        </DialogTitle>
        {close && (
            <Box className={classes.buttonDialogCloseContainer}>
              <IconButton onClick={onCloseModal} size="medium" className={classes.buttonDialogClose}>
                <Close className={classes.icon} />
              </IconButton>
            </Box>
        )}
        <DialogContent>{children}</DialogContent>
      </Dialog>
  )
}

const useStyles = makeStyles((theme) => ({
  receiptModal: {
    '& .MuiDialog-paperWidthSm': {
      overflow: 'hidden',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        maxWidth: 400,
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      }
    }
  },
  buttonDialogCloseContainer: {
    textAlign: 'right',
    position: 'absolute',
    right: 5,
    top: 5,
    overflow: 'hidden',
    width: theme.spacing(10),
    height: theme.spacing(10),

    [theme.breakpoints.down('sm')]: {
      right: 0,
      top: 0,
    },
  },
  buttonDialogClose: {
    color: colors.white,
    fontWeight: 200,
  },
  icon: {
    fontSize: 40,
    color: colors.pink,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  title: {
    fontSize: 42,
    fontWeight: 600,
    fontFamily: font.default,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  }
}))

export default withWidth()(Modal)
