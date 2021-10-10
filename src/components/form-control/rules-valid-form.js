export const firstname = {
    required: true,
    minLength: 2,
    maxLength: 50
}

export const email = {
    required: true,
    maxLength: 50,
    pattern: /^\s*([\w.%+-]+)@([\w-]+\.)+([\w]{2,})\s*$/i
}

export const password = {
    required: true,
    minLength: 8
}

export const repeat_passwort = (watch) => {
    return {
        required: true,
        validate: value => value === watch('password')
    }
}