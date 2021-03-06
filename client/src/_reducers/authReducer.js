import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "../_actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    role: null,
    studentid: null,
    companyName: null,
    logoURL: null,
    regisNo: null,
    loading: true,
    user: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload.data,
                role: payload.data.role,
                companyName: payload.data.companyName,
                logoURL: payload.data.logoURL,
                regisNo: payload.data.regisNo,
                studentid: payload.data.studentid,

            };

        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };

        default:
            return state;
    }
}
