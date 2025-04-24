const commentreducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case "FETCH_ALL_COMMENTS":
            return { ...state, data: action.payload };

        case "FETCH_COMMENTS":
            return { ...state, data: action.payload };

        case "POST_COMMENT":
            return { ...state, data: [...state.data, action.payload] };

        case "EDIT_COMMENT":
            return {
                ...state,
                data: state.data.map((comment) =>
                    comment._id === action.payload._id ? action.payload : comment
                ),
            };

        case "DELETE_COMMENT":
            return {
                ...state,
                data: state.data.filter((comment) => comment._id !== action.payload._id),
            };

        default:
            return state;
    }
};

export default commentreducer;
