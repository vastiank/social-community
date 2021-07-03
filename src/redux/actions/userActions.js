import { SET_TOKEN, SET_USER_DATA } from "../constants/action-types";
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

export const loginAction = data => {
    return async (dispatch) => {

        try {
            const response = await axios.post(`${urls.login}`, data)
            
            console.log('response data => ', response.data);
            console.log('response token => ', response.data.token)

            if (response.data.token){
                console.log('hay token!')
                dispatch(setToken(response.data.token))
                dispatch(setUserData(data))
            } else {
                return {
                    message: 'Error en autenticacion, intente nuevamente'
                }
            }

            
        } catch (error) {

            console.error(error.code)
            /* throw new Error(error); */
            
        }

    }
}