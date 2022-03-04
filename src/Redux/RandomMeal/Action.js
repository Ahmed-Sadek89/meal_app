import {GET_RANODM_MEAL, GET_RANODM_MEAL_SUCCESS, GET_RANODM_MEAL_ERROR} from './Type';

export const getRandomMeal = (payload) => {
    return{
        type: GET_RANODM_MEAL,
        payload
    }
}

export const getRandomMealSuccess = (payload) => {
    return{
        type: GET_RANODM_MEAL_SUCCESS,
        payload
    }
}

export const getRandomMealError = (payload) => {
    return{
        type: GET_RANODM_MEAL_ERROR,
        payload
    }
}