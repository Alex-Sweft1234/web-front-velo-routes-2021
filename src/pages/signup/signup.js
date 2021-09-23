import {Box, Grid} from '@material-ui/core'
import {Dialog} from '../../components'
import SignUpForm from './signup-form'

const Signup = () => {
    return(
        <Dialog title='Регистрация' maxWidth='sm'>
            <Box pt={2} pb={8}>
                <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={8}>
                        <SignUpForm/>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    )
}

export default Signup