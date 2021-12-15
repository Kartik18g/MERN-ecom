const initialState = {
    categories: []
}
const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_CATEGORY":
            return state
        case "ADD_CATEGORY_FAILED":
            return state
        default:
            return state
    }

}


export default categoriesReducer