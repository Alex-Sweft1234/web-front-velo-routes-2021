export const email = (errors) => {
    return (
        (errors?.email?.type === "required" && <p>Поле не заполнено</p>) ||
        (errors?.email?.type === "pattern" && <p>Указан некорректный e-mail</p>) ||
        (errors?.email?.type === "maxLength" && <p>Макс. длинна поля 50 символов</p>)
    )
}

export const password = (errors) => {
    return (
        (errors?.password?.type === "required" && <p>Поле не заполнено</p>) ||
        (errors?.password?.type === "minLength" && <p>Мин. длинна пароля 8 символов</p>)
    )
}
export const repeat_password = (errors) => {
    return (
        (errors?.repeatpassword?.type === "required" && <p>Поле не заполнено</p>) ||
        (errors?.repeatpassword?.type === "validate" && <p>Пароли не совпадают</p>)
    )
}