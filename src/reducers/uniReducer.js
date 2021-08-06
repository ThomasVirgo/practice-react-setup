const initState = {
    unis: [],
}

const uniReducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOAD_UNIS':
            return ({
                ...state,
                unis: action.payload,
                error: false
             })
        case 'DELETE_UNIS':
            return { ...state, unis: [] }
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default uniReducer;