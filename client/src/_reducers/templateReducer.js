import * as types from "../_actions/types";

const initialState = {
    template: null,
    templates: [],
    temp1State: {},
    Temp1formData: {},
    Temp2formData: {},
    Temp3formData: {},
    username: null,
    companyName: null,
    error: {},
    filtered: null,
    loading: true
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_TEMPLATE:
            return {
                ...state,
                template: payload.data,
                loading: false
            };
        case types.GET_TEMPLATES:
            return {
                ...state,
                templates: payload,
                loading: false
            };

        case types.ADD_TEMPLATE:
            return {
                ...state,
                template: payload,
                loading: false
            };
        case types.TEMPLATE1_GENRATE:
            return {
                ...state,
                template: null,
                temp1State: payload,

            }
        case types.SAVE_FORMDATA1:
            return {
                ...state,
                Temp1formData: payload,
                companyName: payload.companyName,
                username: payload.username
            }
        case types.SAVE_FORMDATA2:
            return {
                ...state,
                Temp2formData: payload,
                companyName: payload.companyName,
                username: payload.username
            }

        case types.SAVE_FORMDATA3:
            return {
                ...state,
                Temp3formData: payload,
                companyName: payload.companyName,
                username: payload.username
            }
        case types.SET_CURRENT_TEMPLATE:
            return {
                ...state,
                template: action.payload
            };
        case types.CLEAR_TEMPLATE:
            return {
                ...state,
                template: null,
                templates: [],
                loading: false
            };


        case types.CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case types.DELETE_TEMPLATE:
            return {
                ...state,
                templates: state.templates.filter(
                    template => template._id !== action.payload
                ),
                loading: false
            };
        case types.TEMPLATE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
