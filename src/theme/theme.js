import {createTheme} from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import '../styles/font.css'
import font from './font'
import colors from './colors'

const {
    spacing,
    breakpoints: { down, up, values },
} = createTheme()


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: [font.default].join(','),
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [font.default],
            },
        },
        MuiIconButton: {
            root: {
                lineHeight: 1,
                '&.popoverButton': {
                    //color: _palette.text.secondary,
                    border: '1px solid #fff',
                    borderRadius: spacing(2),
                },
            },
            label: {},
            colorSecondary: {
                '& span': {
                    //color: _palette.text.secondary,
                },
                '&.popoverButton': {
                    backgroundColor: '#cf0a2c',
                    border: '0 none',
                },
            },
        },
        MuiBackdrop: {
            root: {
                // backdropFilter: 'blur(2px)',
            },
        },
        MuiPickersDay: {
            daySelected: {
                '& span': {
                    color: '#fff',
                },
            },
        },
        MuiDialog: {
            paper: {
                width: '100%',
                backgroundColor: colors.white,
                borderRadius: 20,
                color: colors.blue,
                boxSizing: 'border-box',
                boxShadow: 'inset 0 0 15px rgba(0,0,0,.1)',
            },
            paperFullScreen: {
                height: 'auto',
            },
        },
        MuiDialogContent: {
            root: {
                paddingLeft: 0,
                paddingRight: 0,
                paddingBottom: 0,
                textAlign: 'center',
                color: colors.blue,
                fontWeight: 400,
                fontSize: 25,
                fontFamily: font.default,
                [down('sm')]: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                },

                '& .text': {
                    color: '#fff',
                },

                '& .link': {
                    fontSize: '100%',
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#F5CB28',
                    },
                },
                '&>*:last-child': {
                    marginBottom: spacing(0),
                },
                '& .fields': {
                    textAlign: 'center',
                    //color: _palette.text.secondary,
                    backgroundColor: 'transparent',
                    paddingTop: spacing(2),
                    '& fieldset': {
                        // borderColor: '#f4d48c!important',
                    },

                    [down('sm')]: {},
                    [down('xs')]: {
                        // paddingTop: spacing(4),
                    },

                    '& .field_row>*': {
                        [up('md')]: {
                            '&:first-child:not(:last-child)': {
                                paddingRight: spacing(1),
                            },
                            '&:last-child:not(:first-child)': {
                                paddingLeft: spacing(1),
                            },
                        },
                    },
                    '&.fields-bottom': {
                        // костыль
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                    },
                    '&.fields-top:first-child:not(:last-child)': {
                        // костыль
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        marginBottom: -1,
                    },
                },
                '& .actions': {
                    // width: "75%",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },
            },
        },
        MuiDialogTitle: {
            root: {
                position: 'relative',
                backgroundColor: 'transparent',
                color: colors.blue,
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',

                [down('sm')]: {
                    fontSize: 20,
                },
            },
        },
        MuiContainer: {
            root: {},
        },
        MuiPickersBasePicker: {
            pickerView: {
                margin: '0 auto',
            },
        },
        MuiPickersToolbarButton: {
            toolbarBtn: {
                '& h2': {
                    margin: 0,
                    padding: '0 1rem',
                },
            },
        },

        MuiButton: {
            root: {
                zIndex: 1,
                fontWeight: 600,
                fontFamily: font.default,
                '&:hover': {
                    borderColor: colors.white,
                    color: colors.white,
                    textShadow: 'none',
                },
                '&:active,&.active': {},
                '&$disabled': {},
            },
            sizeLarge: {
                fontSize: 21,
                height: 70,
                lineHeight: 1,
                fontWeight: 600,
                border: '3px solid #FFFFFF',
                '&:hover': {
                    border: '3px solid #FFFFFF',
                },
                [down('sm')]: {
                    fontSize: 18,
                    height: 60,
                },
                [down('xs')]: {
                    fontSize: 16,
                    height: '50px!important',
                },
            },
            textPrimary: {
                fontSize: 18,
                color: colors.gold,
                background: 'transparent',
                textDecoration: 'underline!important',
                '&:hover': {
                    backgroundColor: colors.gold + '!important',
                    color: colors.black
                },
            },

            outlinedSecondary: {
                borderRadius: 70,
                paddingLeft: 30,
                paddingRight: 30,
                color: '#fff',
                fontSize: 16,
                height: 50,
                fontWeight: 600,
                border: '2px solid #FFFFFF',
                background: '#FD2121',
                '&:hover': {
                    border: '2px solid #FFFFFF',
                    color: '#FD2121',
                    background: '#fff!important',
                },
            },
            outlinedPrimary: {
                borderRadius: 0,
                paddingLeft: 50,
                paddingRight: 50,
                color: colors.gold,
                fontSize: 22,
                minHeight: 50,
                fontWeight: 600,
                borderWidth: 2,
                borderColor: colors.gold,
                background: colors.black,
                transition: '.5s',
                '&:hover': {
                    paddingLeft: 50,
                    paddingRight: 50,
                    borderWidth: 2,
                    borderColor: colors.gold,
                    background: 'linear-gradient(103.86deg, #9F7F39 21.8%, #E2D386 47.95%, #9F7F39 77.62%)',
                    color: colors.black,
                },
                [down('md')]: {
                    fontSize: 21,
                }
            },
            containedPrimary: {
                fontSize: 18,
                borderRadius: 30,
                minWidth: 170,
                backgroundColor: colors.blue,
                color: colors.white,
                minHeight: 60,
                fontWeight: 600,
                transition: '.5s',
                [down('sm')]: {
                    fontSize: 18,
                },
                '&:hover':{
                    backgroundColor: colors.blue,
                    opacity: .8,
                },
                '&$disabled': {
                    opacity: '.8',
                    color: '#CBD1D4',
                    background: '#fff',
                },
            },
            label: {
                textTransform: 'none'
            }
        },
        MuiAppBar: {
            root: {
                width: 'auto',
            },
            colorPrimary: {
                backgroundColor: 'transparent',
            },
        },
        MuiSelect: {
            iconFilled: {
                fontSize: '1.5rem',
                color: '#000',
            },
        },
        MuiMenuItem: {
            root: {
                '&$selected': {

                },
            },
            gutters: {

            },
        },
        MuiSvgIcon: {
            root: {
                fontSize: '100%',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#173373',
                maxWidth: 330,
            },
        },
        /* форма */
        MuiCheckbox: {
            root: {
                padding: 10,
            },
            colorPrimary: {
                //color: _palette.text.secondary,
                '&$checked': {
                    color: colors.blue,
                },
                '&$disabled': {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
        },
        MuiSnackbarContent: {
            root: {
                backgroundColor: '#fff',
                //color: _palette.text.secondary,
                flexWrap: 'nowrap',
                fontSize: 12,
                borderRadius: 2,
                alignItems: 'center',
                lineHeight: 1.25,
                textAlign: 'center',
                boxShadow: 'none',
            },
            message: {
                flex: '0 0 100%',

                fontWeight: 400,
            },
            action: {},
        },
        MuiFormHelperText: {
            root: {
                left: 0,
                bottom: 0,
                position: 'absolute',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                width: '100%',
                whiteSpace: 'nowrap',
                lineHeight: 1.1,
                fontSize: 11,
                color: 'red',
                transform: 'translate(10px, 8px)',
                fontFamily: font.default,
                '&$error': {
                    color: 'red',
                },
                '&.checkbox-help': {
                    bottom: 0,
                    position: 'relative',
                },
            },
            contained: {
                marginLeft: 0,
                marginRight: 0,
            },
        },
        MuiFormControl: {
            root: {
                paddingBottom: 17,
                marginTop: 0,
                marginBottom: 5,
                maxWidth: '100%',
                '& label': {
                    fontWeight: 500,
                },
            },
        },
        MuiPagination: {
            root: {
                backgroundColor: colors.white,
                borderRadius: 30,
                padding: '8px 7px',
                boxShadow: '2px 1px 8px rgba(50, 129, 255, 0.12)',
                display: 'inline-block'
            },
        },

        MuiPaginationItem: {
            root: {
                fontSize: 18,
                fontFamily: font.default,
                fontWeight: 400,
                minWidth: 25,
                width: 30,
                height: 35,
                color: colors.blue,
                borderRadius: '50%',
                transition: '.3s',
                [down('md')]: {
                    fontSize: 16,
                },
                [down('xs')]: {
                    fontSize: 14,
                    width: 25,
                    height: 30,
                },
                '&$selected': {
                    fontWeight: 600,
                    color: colors.blue,
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: '.3s',
                    background: 'transparent!important',
                    '&$textSecondary': {
                        //color: _palette.text.secondary,
                        backgroundColor: colors.white,
                    },
                    '&$textPrimary': {
                        //color: _palette.text.secondary,
                        backgroundColor: colors.white,
                    },
                    '&:hover': {
                        background: 'transparent!important',
                    }
                },
                '&$disabled': {
                    // visibility: 'hidden',
                },
                '&$textSecondary': {
                    color: colors.white,
                },
                '&:hover': {
                    transaction: 'none',
                    backgroundColor: 'transparent!important',
                },
            },
            outlined: {
                // backgroundColor: '#ffffff',
                border: 'none',
                //color: _palette.primary,
                fontSize: '133%',
                height: 40,
                width: 40,
                borderRadius: 10,
                [down('xs')]: {
                    height: 29,
                    width: 29,
                },
                '&$sizeSmall': {
                    color: '#fff!important',
                },
                '&$disabled': {
                    visibility: 'visibility',
                },
                '&$selected': {
                    color: '#fff',
                    textDecoration: 'none!important',
                    //backgroundColor: _palette.primary,
                    borderRadius: 10,
                    '&$textSecondary': {
                        //color: _palette.secondary,
                    },
                    '&$sizeSmall': {
                        background: '#fff!important',
                        //color: _palette.primary + '!important',
                    },
                },
            },
            ellipsis: {
                color: 'initial',
            },
            icon: {
                fontSize: '150%',
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: 10,
                borderWidth: 3,
                fontSize: 20,
                color: colors.gray,
                padding: 0,
                height: 50,
                minHeight: 50,
                '&:hover $notchedOutline': {
                    borderColor: colors.gray,
                    borderWidth: 2,
                },
                '&$focused $notchedOutline': {
                    borderColor: colors.gray,
                    borderWidth: 2,
                },
                '&$error $notchedOutline': {
                    borderColor: colors.gray,
                    borderWidth: 2,
                },
                '&$disabled $notchedOutline': {
                    borderWidth: 2,
                },
            },
            multiline: {
                height: 'auto',
                minHeight: 60,
                maxHeight: 'none',
            },
            notchedOutline: {
                borderRadius: 10,
                borderColor: colors.gray,
                borderWidth: 2,
                top: 0,
                '& legend': {
                    display: 'none',
                },
            },
            input: {
                fontSize: 16,
                color: colors.black,
                padding: '5px 20px',
                height: 'auto',
                lineHeight: 1,
                '&$disabled': {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
                '&:-internal-autofill-selected': {
                    background: 'transparent',
                    '-webkit-box-shadow': 'inset 0 0 0 50px #ffffff!important',
                    '-webkit-text-fill-color': '000000!important',
                },
                '&:-webkit-autofill': {
                    background: 'transparent',
                    '-webkit-box-shadow': 'inset 0 0 0 50px #ffffff!important',
                    '-webkit-text-fill-color': '000000!important',
                },
            },
            adornedEnd: {
                paddingRight: 0,
            },
        },
        MuiFilledInput: {
            root: {
                fontSize: '18px!important',
                fontWeight: 400,
                minHeight: 50,
                color: '#0B2436',
                border: `1.5px solid #40517A`,
                marginBottom: 15,
                borderRadius: '8px!important',

                background: 'none #fff!important',
                '&:before, &:after': {
                    content: 'none!important',
                },
                '&:hover': {
                    backgroundColor: '#fff',
                },
                '&$error': {
                    color: 'red',
                    fontWeight: 600,
                    borderColor: '#FD2121',
                },
                '&$focused': {
                    backgroundColor: '#fff',
                },
            },
            input: {
                fontWeight: 500,
                fontSize: 16,
                padding: '0 10px',

                '&:-internal-autofill-selected': {
                    background: 'transparent',
                    '-webkit-box-shadow': 'inset 0 0 0 50px #fff!important',
                    '-webkit-text-fill-color': '#000!important',
                },
                '&:-webkit-autofill': {
                    background: 'transparent',
                    '-webkit-box-shadow': 'inset 0 0 0 50px #fff!important',
                    '-webkit-text-fill-color': '#000!important',
                },
            },
        },
        MuiInputBase: {
            root: {
                borderColor: '#fff!important',
            },
            input: {
                fontFamily: font.default,
                '&:-internal-autofill-selected': {
                    background: 'transparent',
                    '-webkit-box-shadow': 'inset 0 0 0 50px #000000!important',
                    '-webkit-text-fill-color': '#000000!important',
                },
                '&:-webkit-autofill': {
                    background: 'transparent',
                    '-webkit-box-shadow': 'inset 0 0 0 50px #000000!important',
                    '-webkit-text-fill-color': '#000000!important',
                },
            },
        },
        MuiAccordion: {
            root: {
                boxShadow: '0 0 0 1.5px ' + colors.gray,
                marginBottom: 15,
                transition: '.3s',
                '&$expanded': {
                    marginBottom: 17,
                    boxShadow: '0 2px 2px 3px ' + colors.gray,
                },
                '&:before': {
                    display: 'none'
                }
            },
            rounded: {
                borderRadius: 10,
                '&:last-child': {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                },
                '&:first-child': {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },
            }
        },
        MuiAccordionSummary: {
            root: {
                paddingLeft: 25,
                paddingRight: 25,
                minHeight: 70,
                [down('sm')]: {
                    fontSize: 22,
                },
                '&$expanded': {
                    color: colors.black,
                    minHeight: 'none',
                    borderWeight: 1.5,
                },
            },
            content: {
                color: colors.black,
                fontWeight: 600,
                fontSize: 24,
                fontFamily: font.default,
                transition: '.3s',
                [down('md')]: {
                    fontSize: 20,
                }
            },
            expandIcon: {
                color: colors.blue,
                padding: 10,
                fontSize: 28,
                backgroundColor: colors.white,
                transition: '.3s',
                '&:hover': {
                    backgroundColor: colors.white,
                },
                '&$expanded': {
                    color: colors.white,
                    backgroundColor: colors.blue,
                },
            },
        },
        MuiAccordionDetails: {
            root: {
                fontSize: 18,
                lineHeight: 1.3,
                fontWeight: 400,
                color: colors.black,
                display: 'block',
                fontFamily: font.default,
                padding: '20px 60px 20px 25px',
                marginBottom: 0,
                backgroundColor: '#F8F8F8',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                transition: '.3s',
                [down('md')]: {
                    fontSize: 16,
                },
                '& a': {},
            },
        },
        MuiInputLabel: {
            root: {
                transformOrigin: 'left center',
                zIndex: 2,
                color: 'rgba(1, 1, 1, .3)',
                fontFamily: font.default,
                '&$focused': {
                    transform: 'translate(0px, -20px)',
                },
                fontWeight: 400,
                paddingLeft: 0,
                paddingRight: 0,
                '&$error': {
                    color: 'rgba(1, 1, 1, .3)',
                },
            },
            formControl: {
                transform: 'translate(0px, 17px)',
            },
            outlined: {
                fontSize: 16,
                color: 'rgba(1, 1, 1, .3)',
                transform: 'translate(20px, 18px)',
                '&$shrink': {
                    fontSize: 11,
                    backgroundColor: colors.white,
                    padding: '0 2px',
                    transform: 'translate(15px, -40%)',
                    color: 'rgba(1, 1, 1, .2)',
                    opacity: 1,
                },
            },
            filled: {
                fontSize: '16px',
                '&$shrink': {
                    transform: 'translate(10px, 17%)',
                },
            },
        },
        MuiFormLabel: {
            root: {
                '&$disabled': {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
                '&focused': {
                    color: '#fff',
                },
            },
        },
        MuiFormControlLabel: {
            root: {
                marginLeft: 0,
                color: '#fff',
                '& a': {
                    color: 'inherit',
                    textDecoration: 'underline',
                },
            },
            label: {
                display: 'flex',
                alignItems: 'center',
                '&$disabled': {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
        },
        MuiAutocomplete: {
            inputRoot: {},
            input: {},
            endAdornment: {
                color: '#fff',
                top: 0,
                transform: 'translate(0, 25%)',
            },
            clearIndicator: {
                color: '#fff',
            },
            popupIndicator: {
                color: '#fff',
            },
            noOptions: {
                display: 'none',
            },
        },
        MuiDialogActions: {
            root: {
                justifyContent: 'center',
                '& button': {

                    fontSize: 20,
                    color: '#fff',
                    background: '#526070',
                    fontWeight: 400,
                    '&:hover': {
                        background: '#526070',
                    },
                },
            },
        },
        MuiPickersModal: {
            dialogRoot: {
                background: '#fff',
                width: 'auto',
                borderRadius: 0,
            },
            dialog: {
                fontSize: 21,
                color: '#000',
            },
        },
        MuiPopover: {
            paper: {
                //maxWidth: 300,
                backgroundColor: '#fff',
                color: '#000',
                fontSize: '85%',
                width: 'auto',
            },
        },
        MuiTypography: {
            colorPrimary: {
                color: '#fff',
            },
            colorSecondary: {
                //color: _palette.text.secondary,
            },
            h2: {
                textAlign: 'center',
                color: '#fff',
                textTransform: 'uppercase',
                marginTop: spacing(12),
                marginBottom: spacing(4),
                fontSize: 32,
                fontWeight: 700,
                [down('sm')]: {
                    fontSize: 24,
                },
            },
            subtitle2: {
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: 18,
                marginBottom: 10,

            },
        },
        MuiPaper: {
            outlined: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
                backgroundColor: '#102659',
                boxShadow: 'none',
                borderRadius: 10,
                padding: spacing(2),
                color: '#fff',
                fontWeight: 400,
                textAlign: 'center',
                [down('sm')]: {
                    height: 'auto',
                },
                '& span': {
                    fontSize: 16,
                },
                '& a': {
                    cursor: 'pointer',
                    fontSize: 13,
                    textTransform: 'uppercase',
                    color: '#fff',
                    display: 'block',


                    padding: 15,
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: 8,
                    textDecoration: 'none',
                    textAlign: 'center',
                },
                '& h1, & h2': {
                    marginTop: spacing(1),
                    textTransform: 'uppercase',
                    color: '#fff',
                    fontWeight: 600,

                },
                '& h1': {fontSize: 50, marginBottom: 0},
                '& h2': {},
            },
            elevation1: {
                boxShadow: 'none',
            },
            elevation4: {
                boxShadow: 'none',
            },
        },
        MuiTab: {
            root: {
                boxShadow: 'none',
                margin: '0 30px',
                maxWidth: 185,
                maxHeight: 80,
                [down('sm')]: {
                    margin: '0 5px',
                    maxWidth: 140,
                    maxHeight: 80,
                }
            },
            wrapper: {
                padding: '0 2em',
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: 42,
                fontFamily: font.default,
                transform: 'scale(.7, 1)',
                color: colors.white,
                [down('sm')]: {
                    fontSize: 28,
                    padding: '0 0.4em',
                },

            },

            textColorInherit: {
                borderRadius: 0,
                opacity: 0.5,
                background: 'rgba(255, 255, 255, 0.15)',
                '&[aria-selected^=\'true\']': {
                    background: 'rgba(255, 255, 255, 0.2)',
                },
            },
        },
        PrivateTabIndicator: {
            root: {
                background: `none`,
            },
            colorSecondary: {backgroundColor: 'transparent'},
        },
        MuiTableCell: {
            root: {
                font: font.default,
            },
        },
    },
})

export default theme