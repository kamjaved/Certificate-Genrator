import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current course
export const getCurrentCourse = id => async dispatch => {
    try {
        const res = await axios.get(`/api/course/${id}`);
        console.log(res.data);

        dispatch({
            type: types.GET_COURSE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: types.COURSE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Get all Courses
export const getCourses = () => async dispatch => {
    try {
        const res = await axios.get("/api/course");
        console.log(res.data.data);
        dispatch({
            type: types.GET_COURSES,
            payload: res.data.data
        });
    } catch (err) {
        console.log(err);
        // dispatch({
        //   type: types.COURSE_ERROR,
        //   payload: { msg: err.response.data, status: err.response.status }
        // });
    }
};

// Add course
export const addCourse = (formData, history) => async dispatch => {
    try {
        const res = await axios.post("/api/course", formData);
        dispatch({
            type: types.ADD_COURSE,
            payload: res.data
        });
        history.push("/course/view-course");

        dispatch(setAlert("Course Added!", "success"));
    } catch (err) {
        const errors = err.response.data.error;
        console.log(errors);

        if (errors.code === 11000) {
            dispatch(setAlert("Course already exists!", "danger"));
        }

        dispatch({
            type: types.COURSE_ERROR,
            payload: { msg: errors, status: err.response.status }
        });
    }
};

// Edit course
export const editCourse = (formData, history, id) => async dispatch => {
    try {
        const res = await axios.patch(`/api/course/${id}`, formData);

        dispatch({
            type: types.GET_COURSE,
            payload: res.data
        });

        history.push("/course/view-course");

        dispatch(setAlert("Course Updated", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: types.COURSE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Delete course
export const deleteCourse = id => async dispatch => {
    if (window.confirm("Are you sure?")) {
        try {
            await axios.delete(`/api/course/${id}`);
            dispatch({
                type: types.DELETE_COURSE,
                payload: id
            });
            dispatch(setAlert("Course Deleted!", "danger"));
        } catch (err) {
            dispatch({
                type: types.COURSE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }
};

//Set Current course
export const setCurrentCourse = course => async dispatch => {
    dispatch({
        type: types.SET_CURRENT_COURSE,
        payload: course
    });
};

// Clear course
export const clearCourse = () => async dispatch => {
    dispatch({ type: types.CLEAR_COURSE });
};

//Filter course
export const filterstate = text => async dispatch => {
    dispatch({ type: types.FILTER_COURSE, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
    dispatch({ type: types.CLEAR_FILTER });
};
