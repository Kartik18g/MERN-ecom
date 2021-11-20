const initialState = {
    token: 'asdfasdfas'
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }

}


export default authReducer