import * as types from "../_actions/types";

const initialState = {
    question: null,
    questions: [],
    totalQuestions: null,
    error: {},
    filtered: null,
    loading: true
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_QUESTION:
            return {
                ...state,
                question: payload.data,
                loading: false
            };
        case types.GET_QUESTIONS:
            return {
                ...state,
                questions: payload,
                loading: false
            };
        case types.GET_ALL_QUESTIONS:
            return {
                ...state,
                totalQuestions: payload.result,
                loading: false
            };
        case types.ADD_QUESTION:
            return {
                ...state,
                question: payload,
                loading: false
            };
        case types.SET_CURRENT_QUESTION:
            return {
                ...state,
                question: action.payload
            };
        case types.CLEAR_QUESTION:
            return {
                ...state,
                question: null,
                questions: [],
                loading: false
            };


        case types.CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case types.DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(
                    question => question._id !== action.payload
                ),
                loading: false
            };
        case types.QUESTION_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
