import jwt from 'jsonwebtoken'
import axios from 'axios'
import { toast } from 'react-hot-toast'



export const loginUser = (email, password) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:8080'

        const res = await axios.post(`${base_Url}/api/v1/auth/login`, {
            email, password
        })
        const { token, message } = res.data

        if (token) {
            toast.success('Login Success')
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { token }
            })
        } else {
            toast.error(message)
            dispatch({
                type: "LOGIN_FAILED",
                payload: { token: null }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};