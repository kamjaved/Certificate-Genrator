import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import quiz from './quizReducer';
import error from './errorsReducer'
import template from './templateReducer'



export default combineReducers({
    auth,
    alert,
    quiz,
    error,
    template,

})