import {GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR} from './Type';

export const getCategories = (payload) => {
    return{
        type: GET_CATEGORIES,
        payload
    }
}

export const getCategoriesSuccess = (payload) => {
    return{
        type: GET_CATEGORIES_SUCCESS,
        payload
    }
}

export const getCategoriesError = (payload) => {
    return{
        type: GET_CATEGORIES_ERROR,
        payload
    }
}