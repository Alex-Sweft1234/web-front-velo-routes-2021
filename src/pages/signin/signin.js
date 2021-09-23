import {Box, Grid} from '@material-ui/core'
import {Dialog} from '../../components'
import SignInForm from './signin-form'

const Signin = () => {
    return(
        <Dialog title='Авторизация' maxWidth='sm'>
            <Box pt={2} pb={8}>
                <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={8}>
                        <SignInForm/>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    )
}

export default Signin