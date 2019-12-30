import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";



//----------------STUDENT ACTIONS-----------------------


// Get current Question
export const getCurrentStudent = id => async dispatch => {
    try {
        const res = await axios.get(`/api/user/${id}`);
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


//Get all student
export const getStudents = (page) => async dispatch => {
    try {
        const res = await axios.get(`/api/user/getstudent/?page=${page}`);
        console.log(res.data);
        dispatch({
            type: types.GET_STUDENTS,
            payload: res.data.data
        });
    } catch (err) {
        console.log(err);
        // dispatch({
        //   type: types.question_ERROR,
        //   payload: { msg: err.response.data, status: err.response.status }
        // });
    }
};

//Get Total No Result questions
export const getAllTotalStudents = () => async dispatch => {

    try {
        const res = await axios.get(`/api/user/totalno`);
        console.log(res.data.result);
        dispatch({
            type: types.GET_ALL_STUDENTS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        // dispatch({
        //   type: types.question_ERROR,
        //   payload: { msg: err.response.data, status: err.response.status }
        // });
    }
};


// Edit Student
export const editStudent = (formData, history, id) => async dispatch => {
    try {
        const res = await axios.patch(`/api/user/${id}`, formData);

        dispatch({
            type: types.GET_STUDENT,
            payload: res.data
        });

        history.push("/admin/viewstudent");

        dispatch(setAlert("Question Updated", "success"));
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

//Set Current Student
export const setCurrentStudent = student => async dispatch => {
    dispatch({
        type: types.SET_CURRENT_STUDENT,
        payload: student
    });
};

//Delete Student
export const deleteStudent = id => async dispatch => {
    if (window.confirm("Are you sure?")) {
        try {
            await axios.delete(`/api/user/${id}`);
            dispatch({
                type: types.DELETE_QUESTION,
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

// Clear Student
export const clearStudent = () => async dispatch => {
    dispatch({ type: types.CLEAR_STUDENT });
};



// Clear Filter
export const clearFilter = () => async dispatch => {
    dispatch({ type: types.CLEAR_FILTER });
};