import * as types from "../_actions/types";

const initialState = {
    student: null,
    students: [],
    error: {},
    filtered: null,
    loading: true
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_STUDENT:
            return {
                ...state,
                student: payload.data,
                loading: false
            };
        case types.GET_STUDENTS:
            return {
                ...state,
                students: payload,
                loading: false
            };
        case types.GET_ALL_STUDENTS:
            return {
                ...state,
                totalStudents: payload.result,
                loading: false
            };
        case types.ADD_STUDENT:
            return {
                ...state,
                student: payload,
                loading: false
            };
        case types.SET_CURRENT_STUDENT:
            return {
                ...state,
                student: action.payload
            };
        case types.CLEAR_STUDENT:
            return {
                ...state,
                student: null,
                students: [],
                loading: false
            };


        case types.CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case types.DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter(
                    student => student._id !== action.payload
                ),
                loading: false
            };
        case types.STUDENT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
