export const deleteProduct = (productId) => {

    return {
        type: "DELETE_PRODUCT",
        payload: { productId }
    }
}

export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: { product }
    }
}