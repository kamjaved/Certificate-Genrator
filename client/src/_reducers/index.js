import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import quiz from './quizReducer';
import error from './errorsReducer'
import template from './templateReducer'
import student from './studentReducer'
import course from './courseReducer'



export default combineReducers({
    auth,
    alert,
    quiz,
    error,
    template,
    student,
    course,

})