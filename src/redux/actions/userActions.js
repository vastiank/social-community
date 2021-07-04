import { SET_TOKEN, SET_USERS, SET_USER_DATA } from "../constants/action-types";
import axios from 'axios';
import { urls } from "../../api/urls";

export const setUserData = userData => ({
    type: SET_USER_DATA,
    userData
})

export const setToken = token => ({
    type: SET_TOKEN,
    token
})

export const setUsers = users => ({
    type: SET_USERS,
    users
})

export const loginAction = data => {
    return async (dispatch) => {

        try {
            let status = '';
            const response = await axios.post(`${urls.login}`, data)
            console.log('response data => ', response.data);
            console.log('response token => ', response.data.token)

            if (response.data.token){
                console.log('hay token!')
                dispatch(setToken(response.data.token))
                dispatch(setUserData(data))
                status = true;
            }

            return status;

            
        } catch (error) {

            console.error(error.code)
            /* throw new Error(error); */
            
        }

    }
}

export const getListAction = token => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${urls.getList}`, {
                headers: {'Authorization': `${token}`}
            })
        
            if (response.data.data.length !== 0){
                dispatch(setUsers(response.data.data))
            } else {
                dispatch(setUsers([]))
            }
        } catch (error) {
            console.error(error.code)
        }
    }
}

export const createUser = (data, token) => {
    return async (dispatch) => {
        try {

            const response = await axios.post(`${urls.createUser}`, data, {
                headers: {'Authorization': `${token}`}
            })

            

            return response.data
            
        } catch (error) {

            console.error(`${error.code} - ${error.message}`)
            
        }
    }
}