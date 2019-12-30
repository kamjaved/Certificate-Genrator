import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Question
export const getCurrentQuestion = id => async dispatch => {
    try {
        const res = await axios.get(`/api/quiz/${id}`);
        console.log(res.data.data.question);

        dispatch({
            type: types.GET_QUESTION,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: types.QUESTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Get all questions
export const getQuestions = (page) => async dispatch => {
    // const page=
    try {
        const res = await axios.get(`/api/quiz/?page=${page}`);
        console.log(res.data);
        dispatch({
            type: types.GET_QUESTIONS,
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
export const getAllTotalQuestion = () => async dispatch => {
    // const page=
    try {
        const res = await axios.get(`/api/quiz/totalno`);
        console.log(res.data.result);
        dispatch({
            type: types.GET_ALL_QUESTIONS,
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

// Add Question
export const addQuestion = (formData, history) => async dispatch => {
    console.log(formData);
    try {
        const res = await axios.post("/api/quiz", formData);
        dispatch({
            type: types.ADD_QUESTION,
            payload: res.data
        });
        history.push("/admin/viewquestion");

        dispatch(setAlert("Question Added!", "success"));
    } catch (err) {
        const errors = err.response.data.error;
        console.log(errors);

        if (errors.code === 11000) {
            dispatch(setAlert("Question already exists!", "danger"));
        }

        dispatch({
            type: types.QUESTION_ERROR,
            payload: { msg: errors, status: err.response.status }
        });
    }
};

// Edit Question
export const editQuestion = (formData, history, id) => async dispatch => {
    try {
        const res = await axios.patch(`/api/quiz/${id}`, formData);

        dispatch({
            type: types.GET_QUESTION,
            payload: res.data
        });

        history.push("/admin/viewquestion");

        dispatch(setAlert("Question Updated", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: types.QUESTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Delete Question
export const deleteQuestion = id => async dispatch => {
    if (window.confirm("Are you sure?")) {
        try {
            await axios.delete(`/api/quiz/${id}`);
            dispatch({
                type: types.DELETE_QUESTION,
                payload: id
            });
            dispatch(setAlert("Question Deleted!", "danger"));
        } catch (err) {
            dispatch({
                type: types.QUESTION_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }
};

//Set Current question
export const setCurrentQuestion = question => async dispatch => {
    dispatch({
        type: types.SET_CURRENT_QUESTION,
        payload: question
    });
};

// Clear question
export const clearQuestion = () => async dispatch => {
    dispatch({ type: types.CLEAR_QUESTION });
};

//Filter admin
export const filterQuestion = text => async dispatch => {
    dispatch({ type: types.FILTER_QUESTION, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
    dispatch({ type: types.CLEAR_FILTER });
};


