import axios from 'axios'

const ls = require('local-storage')

const {API_URL, API_AUTH} = window.APP_CONFIG

const _url = (url) => `${API_URL}/${url.replace(/^\/+/, '')}`

export const Signup = async(data) => {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_AUTH}`
    return await axios.post(url, data).then(
        (res) => {
            // ls.set('private_token', res.data.idToken)
            // ls.set('refresh_token', res.data.refreshToken)
            return res
        }
    ).catch(e => {
            if (e.response === undefined) {
                return {
                    status: 0,
                    message: {error: ['Сервис временно не доступен. Пожалуйста, попробуйте позже']},
                }
            } else if (e.response.status === 400) {
                return e.response
            }
        }
    )
}

export const Signin = async(data) => {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_AUTH}`
    return await axios.post(url, data).then(
        (res) => {
            ls.set('private_token', res.data.idToken)
            ls.set('refresh_token', res.data.refreshToken)
            return res
        }
    ).catch(e => {
            if (e.response === undefined) {
                return {
                    status: 0,
                    message: {error: ['Сервис временно не доступен. Пожалуйста, попробуйте позже']},
                }
            } else if (e.response.status === 400) {
                return e.response
            }
        }
    )
}