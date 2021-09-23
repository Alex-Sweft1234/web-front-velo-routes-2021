import {useForm, Controller} from 'react-hook-form'
import {makeStyles, TextField, FormControl, FormGroup, FormControlLabel, Checkbox, Button, Box, FormHelperText} from '@material-ui/core'
import {Check} from '@material-ui/icons'
import {colors, font} from '../../theme'

const SignInForm = () => {

    const classes = useStyles()

    //react-hook-form
    const {
        handleSubmit,
        control,
        formState: {errors}
    } = useForm({mode: 'onBlur'})

    const onSubmit = data => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {/*email*/}
            <Controller
                control={control}
                name='email'
                defaultValue=''
                rules={{
                    required: true,
                    maxLength: 50,
                    pattern: /^\s*([\w.%+-]+)@([\w-]+\.)+([\w]{2,})\s*$/i
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextField
                        fullWidth
                        label='E-mail'
                        color='primary'
                        variant='outlined'
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        helperText={
                            (errors?.email?.type === "required" && <p>Поле не заполнено</p>) ||
                            (errors?.email?.type === "pattern" && <p>Указан некорректный e-mail</p>) ||
                            (errors?.email?.type === "maxLength" && <p>Макс. длинна поля 50 символов</p>)
                        }
                    />
                )}
            />
            {/*submit button*/}
            <Box mt={2}>
                <Button fullWidth type='submit' variant='contained' color='primary'>
                    Войти
                </Button>
            </Box>
        </form>
    )
}

const useStyles = makeStyles((theme) => ({
    label: {
        color: 'rgba(1, 1, 1, .3)',
    },
    select: {
        fontSize: 16,
        color: colors.black,
        fontFamily: font.default,
        '& .MuiSelect-outlined.MuiSelect-outlined': {
            paddingTop: 10
        },
        '& .MuiSelect-icon': {
            marginTop: 0,
            marginRight: 10,
            fontSize: 25
        },
        '& .MuiSelect-select:focus': {
            backgroundColor: 'transparent!important'
        },
    },
    icon: {
        width: 26,
        height: 26,
        color: colors.white,
        borderRadius: 4,
        border: '2px solid' + colors.blue,
        backgroundColor: colors.white,
    },
    checkedIcon: {
        width: 22,
        height: 22,
        color: colors.white,
        borderRadius: 2,
        backgroundColor: colors.blue,
        fontWeight: 900,
    },
    checkboxLabelContent: {
        marginLeft: 10,
        textAlign: 'left',
        textTransform: 'initial',
        color: colors.black,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.3,
        fontFamily: font.default,
        display: 'inline-block',
        transition: '.3s',
        [theme.breakpoints.down('md')]: {
            fontSize: 15,
            marginLeft: 5,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
        '& a': {
            color: colors.blue,
            transition: '.3s',
            '&:hover': {
                opacity: .8
            }
        },
    },
    formControl: {
        alignItems: 'flex-start'
    },
    helperText: {
        marginLeft: 46,
        [theme.breakpoints.down('md')]: {
            marginLeft: 41,
        }
    }
}))

export default SignInForm