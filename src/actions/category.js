import jwt from 'jsonwebtoken'
import axios from 'axios'
import { toast } from 'react-hot-toast'



export const addCategory = (name, description) => async (dispatch) => {

    try {
        const base_Url = 'https://9bef-2405-201-5804-18b2-c1db-cc61-a363-8d3e.ngrok.io'

        const res = await axios.post(`${base_Url}/api/v1/category/add`, {
            name, description
        })
        console.log(res)
        const { category, message } = res.data

        if (category) {
            toast.success(message)
            dispatch({
                type: "ADD_CATEGORY",
            })
        } else {
            toast.error(message)
            dispatch({
                type: "ADD_CATEGORY_FAILED",
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};
