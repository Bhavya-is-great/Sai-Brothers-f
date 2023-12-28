export function SignUpValidation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/

    if (values.email === "") {
        error.email = "Email should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email Not valid"
    } else {
        error.email = ""
    }

    if (values.username === "") {
        error.username = "Name should not be empty"
    }else {
        error.username = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    } else if (!password_pattern.test(values.password)) {
        error.password = "password should contain one Capital letter on small and one number"
    } else {
        error.password = ""
    }

    return error;
}