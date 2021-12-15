const initialState = {
    token: null
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action
    console.log(state)
    switch (type) {
        case "SET_AUTH_TOKEN":
            return {
                ...state, ...payload
            }
        case "LOGIN_SUCCESS":
            return payload

        case "LOGIN_FAILED":
            return {
                ...payload
            }
        case "SIGNUP_SUCCESS":
            return {
                ...payload
            }
        case "SIGNUP_FAILED":
            return {
                ...payload
            }
        case "REFRESH_SIGNUP":
            return {
                ...state,
                signup: false
            }
        case "LOGOUT":
            return {
                token: null
            }


        default:
            return state
    }

}


export default authReducer