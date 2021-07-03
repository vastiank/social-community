import {combineReducers} from 'redux'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    //reducers
    userReducer,
})

export default rootReducer;