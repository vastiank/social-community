import { SET_USER_DATA } from "../constants/action-types";

const getInitialState = () => ({
    users: [],
    userData: [],
})

const userReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, userData: action.userData}
        default:
            return state;
    }

}

export default userReducer;