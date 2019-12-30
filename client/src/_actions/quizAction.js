import axios from 'axios';
import { setAlert } from "./alertAction";
import { LOAD_QUIZ, SET_QUIZ_LOADING, END_FREE_QUIZ, CLEAR_QUIZ_STATS, ADD_RESULT, ERROR_RESULT } from './types';


export const fetchQuizEasy = () => async dispatch => {
    try {
        const res = await axios.get('/api/quiz/easy');
        console.log(res.data.data)

        dispatch({
            type: LOAD_QUIZ,
            payload: res.data.data,
            questionLength: res.data.data.length
        })

    } catch (err) {
        console.log(err);
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: err.response.data.error
        // })

    }

};

export const fetchQuizHard = () => async dispatch => {
    try {
        const res = await axios.get('/api/quiz/hard');
        console.log(res.data.data)

        dispatch({
            type: LOAD_QUIZ,
            payload: res.data.data,
            questionLength: res.data.data.length
        })

    } catch (err) {
        console.log(err);
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: err.response.data.error
        // })

    }

};

//------- ADD RESULT-----------
export const addResult = (state) => async dispatch => {
    try {
        const res = await axios.post("/api/result", state);
        dispatch({
            type: ADD_RESULT,
            payload: res.data
        });

    } catch (err) {
        const errors = err.response.data.error;
        console.log(errors);

        if (errors.code === 11000) {
            dispatch(setAlert("You Already Saved Your Result Earlier!", "danger"));
        }

        dispatch({
            type: ERROR_RESULT,
            payload: { msg: errors, status: err.response.status }
        });
    }
};

export const getFreeQuestions = () => (dispatch) => {
    dispatch(setQuizLoading());
    axios.get('/api/quiz/abcd')
        .then(res => dispatch({
            type: LOAD_QUIZ,
            payload: res.data
        })
        )
        .catch(err => {
            console.error(err);
        });
};

export const endFreeQuiz = (quizData, history) => (dispatch) => {
    dispatch({
        type: END_FREE_QUIZ,
        payload: quizData
    });
    history.push('/exam/quizSummary');
};

export const clearQuizStats = () => (dispatch) => dispatch({
    type: CLEAR_QUIZ_STATS,
    payload: {}
});



export const setQuizLoading = () => {
    return {
        type: SET_QUIZ_LOADING
    }
};