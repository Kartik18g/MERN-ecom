import axios from "axios"
import toast from "react-hot-toast"

export const deleteProduct = (productId) => {

    return {
        type: "DELETE_PRODUCT",
        payload: { productId }
    }
}

export const addProduct = (product) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8080/api/v1/product/add', product)
        console.log(res)
        dispatch({
            type: "ADD_PRODUCT",
            payload: { product }
        })
        toast.success('Product added')

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

export const getProducts = (name, description) => async (dispatch) => {
    const res = await axios.get('http://localhost:8080/api/v1/product/all')
    const { products } = res.data
    dispatch({
        type: "GET_PRODUCTS",
        payload: { products }
    })
}

