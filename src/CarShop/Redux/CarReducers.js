const initialState = {
    carList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_ITEM':
            let data = action.carList
            state.carList.push(data)
            return { ...state }
        default:
            return state
    }
}
