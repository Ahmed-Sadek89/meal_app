import {GET_MEAL, GET_MEAL_SUCCESS, GET_MEAL_ERROR} from './Type';

export const getMeal = (payload) => {
    return{
        type: GET_MEAL,
        payload
    }
}

export const getMealSuccess = (payload) => {
    return{
        type: GET_MEAL_SUCCESS,
        payload
    }
}

export const getMealError = (payload) => {
    return{
        type: GET_MEAL_ERROR,
        payload
    }
}