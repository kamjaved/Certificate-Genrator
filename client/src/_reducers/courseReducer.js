import * as types from "./../_actions/types";

const initialCourse = {
    course: null,
    courses: [],
    error: {},
    filtered: null,
    loading: true
};

export default function (course = initialCourse, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_COURSE:
            return {
                ...course,
                course: payload,
                loading: false
            };
        case types.GET_COURSES:
            return {
                ...course,
                courses: payload,
                loading: false
            };
        case types.ADD_COURSE:
            return {
                ...course,
                course: payload,
                loading: false
            };
        case types.SET_CURRENT_COURSE:
            return {
                ...course,
                course: action.payload
            };
        case types.CLEAR_COURSE:
            return {
                ...course,
                course: null,
                courses: [],
                loading: false
            };

        // case types.FILTER_STAFF:
        //   return {
        //     ...course,
        //     filtered: course.courses.filter(course => {
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
                ...course,
                filtered: null
            };
        case types.DELETE_COURSE:
            return {
                ...course,
                courses: course.courses.filter(
                    course => course._id !== action.payload
                ),
                loading: false
            };
        case types.COURSE_ERROR:
            return {
                ...course,
                error: payload,
                loading: false
            };
        default:
            return course;
    }
}
