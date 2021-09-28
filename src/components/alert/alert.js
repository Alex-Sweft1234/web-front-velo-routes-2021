import {Box, Collapse, IconButton, makeStyles} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import CloseIcon from '@material-ui/icons/Close'

const AlertCostum = ({onClose = () => {}, show = false, errorMessage = '', severity = ''}) => {
    const classes = useStyles()
    return(
        <Box width='100%'>
            <Collapse in={show}>
                <Alert
                    className={classes.alert}
                    severity={severity}
                    action={
                        <IconButton
                            color="inherit"
                            size="small"
                            onClick={onClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {errorMessage}
                </Alert>
            </Collapse>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    alert: {
        borderRadius: '10px!important',
        '& .MuiAlert-icon': {
            padding: 0,
            display: 'flex',
            alignItems: 'center'
        }
    }
}))

export default AlertCostum