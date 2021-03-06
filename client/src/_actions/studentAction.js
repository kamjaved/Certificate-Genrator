import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current student
export const getCurrentStudent = id => async dispatch => {
    try {
        const res = await axios.get(`/api/student/${id}`);
        console.log(res.data);

        dispatch({
            type: types.GET_STUDENT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: types.STUDENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Get all Students
export const getStudents = () => async dispatch => {
    try {
        const res = await axios.get("/api/student");
        console.log(res.data.data);
        dispatch({
            type: types.GET_STUDENTS,
            payload: res.data.data
        });
    } catch (err) {
        console.log(err);
        // dispatch({
        //   type: types.STUDENT_ERROR,
        //   payload: { msg: err.response.data, status: err.response.status }
        // });
    }
};

// Add student
export const addStudent = (formData, history) => async dispatch => {
    try {
        const res = await axios.post("/api/student", formData);
        dispatch({
            type: types.ADD_STUDENT,
            payload: res.data
        });
        history.push("/student/view-student");

        dispatch(setAlert("Student Added!", "success"));
    } catch (err) {
        const errors = err.response.data.error;
        console.log(errors);

        if (errors.code === 11000) {
            dispatch(setAlert("Student already exists!", "danger"));
        }

        dispatch({
            type: types.STUDENT_ERROR,
            payload: { msg: errors, status: err.response.status }
        });
    }
};

// Edit student
export const editStudent = (formData, history, id) => async dispatch => {
    try {
        const res = await axios.patch(`/api/student/${id}`, formData);

        dispatch({
            type: types.GET_STUDENT,
            payload: res.data
        });

        history.push("/student/view-student");

        dispatch(setAlert("Student Updated", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: types.STUDENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Delete student
export const deleteStudent = id => async dispatch => {
    if (window.confirm("Are you sure?")) {
        try {
            await axios.delete(`/api/student/${id}`);
            dispatch({
                type: types.DELETE_STUDENT,
                payload: id
            });
            dispatch(setAlert("Student Deleted!", "danger"));
        } catch (err) {
            dispatch({
                type: types.STUDENT_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }
};

//Set Current student
export const setCurrentStudent = student => async dispatch => {
    dispatch({
        type: types.SET_CURRENT_STUDENT,
        payload: student
    });
};

// Clear student
export const clearStudent = () => async dispatch => {
    dispatch({ type: types.CLEAR_STUDENT });
};

//Filter student
export const filterstate = text => async dispatch => {
    dispatch({ type: types.FILTER_STUDENT, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
    dispatch({ type: types.CLEAR_FILTER });
};
