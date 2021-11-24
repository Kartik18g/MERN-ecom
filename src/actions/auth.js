import jwt from 'jsonwebtoken'

export const loginUser = (email, password) => {
    // VERIFY EMAIL AND PASSWORD
    // create and sign a JWT
    const users = JSON.parse(localStorage.getItem('users'))
    const user = users.find(u => u.email === email)

    if (user.password === password) {
        const token = jwt.sign({ email: user.email }, 'SECRET')
        return {
            type: "LOGIN_SUCCESS",
            payload: { token }
        }
    } else {
        window.alert("INCORRECT CREDS")
        return {
            type: "LOGIN_FAILED",
            payload: { token: null }
        }
    }
}