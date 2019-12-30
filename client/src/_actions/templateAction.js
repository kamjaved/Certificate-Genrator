import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";



//----------------TEMPLATE ACTIONS-----------------------


// Get current Template
export const getCurrentTemplate = id => async dispatch => {
    try {
        const res = await axios.get(`/api/temp/${id}`);
        console.log(res.data);

        dispatch({
            type: types.GET_TEMPLATE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: types.TEMPLATE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


//Get all template
export const getTemplates = (page) => async dispatch => {
    try {
        const res = await axios.get(`/api/temp/?page=${page}`);
        console.log(res.data);
        dispatch({
            type: types.GET_TEMPLATES,
            payload: res.data.data
        });
    } catch (err) {
        console.log(err);
        // dispatch({
        //   type: types.template_ERROR,
        //   payload: { msg: err.response.data, status: err.response.status }
        // });
    }
};


// Add Template
export const addTemplate = (formData, history) => async dispatch => {
    console.log(formData);
    try {
        const res = await axios.post("/api/temp", formData);
        dispatch({
            type: types.ADD_TEMPLATE,
            payload: res.data
        });


        dispatch(setAlert("Template Added!", "success"));
    } catch (err) {
        const errors = err.response.data.error;
        console.log(errors);

    }
};
// -----SAVE FORMDATA TEMPLATE --------
export const saveformData = (formData, history) => async dispatch => {

    console.log(formData);
    try {
        const res = await (formData);
        console.log(res);
        dispatch({
            type: types.SAVE_FORMDATA,
            payload: res
        });

        const timer = setTimeout(() => {
            history.push("/certificate/view-template1");
        }, 3000)
        return () => clearTimeout(timer);
    } catch (err) {


    }
};

//Genrate Certficate 
export const genrateTemp1 = (tempformdata, history) => async (dispatch) => {
    dispatch({
        type: types.TEMPLATE1_GENRATE,
        payload: tempformdata
    });
    history.push("/certificate/view-template-1");
}


//Get Total No Result templates
export const getAllTotalTemplates = () => async dispatch => {

    try {
        const res = await axios.get(`/api/temp/totalno`);
        console.log(res.data.result);
        dispatch({
            type: types.GET_ALL_TEMPLATES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        // dispatch({
        //   type: types.template_ERROR,
        //   payload: { msg: err.response.data, status: err.response.status }
        // });
    }
};


// Edit Template
export const editTemplate = (formData, history, id) => async dispatch => {
    try {
        const res = await axios.patch(`/api/temp/${id}`, formData);

        dispatch({
            type: types.GET_TEMPLATE,
            payload: res.data
        });

        history.push("/course/view-course");

        dispatch(setAlert("Template Updated", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: types.TEMPLATE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Set Current Template
export const setCurrentTemplate = template => async dispatch => {
    dispatch({
        type: types.SET_CURRENT_TEMPLATE,
        payload: template
    });
};

//Delete Template
export const deleteTemplate = id => async dispatch => {
    if (window.confirm("Are you sure?")) {
        try {
            await axios.delete(`/api/temp/${id}`);
            dispatch({
                type: types.DELETE_QUESTION,
                payload: id
            });
            dispatch(setAlert("Template Deleted!", "danger"));
        } catch (err) {
            dispatch({
                type: types.TEMPLATE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }
};

// Clear Template
export const clearTemplate = () => async dispatch => {
    dispatch({
        type: types.CLEAR_TEMPLATE,
        payload: {}
    });
};



// Clear Filter
export const clearFilter = () => async dispatch => {
    dispatch({ type: types.CLEAR_FILTER });
};