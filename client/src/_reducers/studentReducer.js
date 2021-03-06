import * as types from "./../_actions/types";

const initialStudent = {
    student: null,
    students: [],
    error: {},
    filtered: null,
    loading: true
};

export default function (student = initialStudent, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_STUDENT:
            return {
                ...student,
                student: payload,
                loading: false
            };
        case types.GET_STUDENTS:
            return {
                ...student,
                students: payload,
                loading: false
            };
        case types.ADD_STUDENT:
            return {
                ...student,
                student: payload,
                loading: false
            };
        case types.SET_CURRENT_STUDENT:
            return {
                ...student,
                student: action.payload
            };
        case types.CLEAR_STUDENT:
            return {
                ...student,
                student: null,
                students: [],
                loading: false
            };

        // case types.FILTER_STAFF:
        //   return {
        //     ...student,
        //     filtered: student.students.filter(student => {
        //       const regex = new RegExp(`${action.payload}`, "gi");
        //       return (
        //         staff.firstName.match(regex) ||
        //         staff.lastName.match(regex) ||
        //         staff.email.match(regex) ||
        //         staff.mobile.match(regex) ||
        //         staff.username.match(regex)
        //       );
        //     })
        //   };
        case types.CLEAR_FILTER:
            return {
                ...student,
                filtered: null
            };
        case types.DELETE_STUDENT:
            return {
                ...student,
                students: student.students.filter(
                    student => student._id !== action.payload
                ),
                loading: false
            };
        case types.STUDENT_ERROR:
            return {
                ...student,
                error: payload,
                loading: false
            };
        default:
            return student;
    }
}
