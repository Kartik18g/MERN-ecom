const initialState = {
    products: []
}
const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }

}


export default productsReducer