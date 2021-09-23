import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import Favicon from 'react-favicon'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './app/store-service'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {defaultTheme} from './theme/index'
import favicon from './img/favicon.ico'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter basename={'/'}>
            <MuiThemeProvider theme={defaultTheme}>
                <Favicon url={favicon}/>
                <CssBaseline/>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app-root'))