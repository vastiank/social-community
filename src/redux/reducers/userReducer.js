import { SET_TOKEN, SET_USERS, SET_USER_DATA } from "../constants/action-types";

const getInitialState = () => ({
    users: [],
    userData: [],
    token: '',
})

const userReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, userData: action.userData}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOKEN:
            return {...state, token: action.token}
        default:
            return state;
    }

}

export default userReducer;