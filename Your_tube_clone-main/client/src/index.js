import * as api from "./Api"; // ✅ RIGHT



// Add comment
export const postcomment = (commentdata) => async (dispatch) => {
    try {
        const { data } = await api.postcomment(commentdata);
        dispatch({ type: "POST_COMMENT", payload: data });
        dispatch(getallcomment());
    } catch (error) {
        console.log(error);
    }
};

// Edit comment
export const editcomment = (commentdata) => async (dispatch) => {
    try {
        const { id, commentbody } = commentdata;
        const { data } = await api.editcomment(id, commentbody);
        dispatch({ type: "EDIT_COMMENT", payload: data });
        dispatch(getallcomment());
    } catch (error) {
        console.log(error);
    }
};

// Delete comment
export const deletecomment = (id) => async (dispatch) => {
    try {
        await api.deletecomment(id);
        dispatch(getallcomment());
    } catch (error) {
        console.log(error);
    }
};

// Get all comments
export const getallcomment = () => async (dispatch) => {
    try {
        const { data } = await api.getallcomment();
        dispatch({ type: "FETCH_ALL_COMMENTS", payload: data });
    } catch (error) {
        console.log(error);
    }
};

// 🔥 Get comments for a specific video
export const getcomment = (videoid) => async (dispatch) => {
    try {
        const { data } = await api.getallcomment(videoid);
        dispatch({ type: "FETCH_COMMENTS", payload: data });
    } catch (error) {
        console.log(error);
    }
};
