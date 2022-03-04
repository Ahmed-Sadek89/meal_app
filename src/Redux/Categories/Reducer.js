import {GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR} from './Type';

const initialState = {
    data: [],
    loading: false,
    error: false
};

const categoriesReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case GET_CATEGORIES: 
            return {
                ...state,
                loading: true,
            };
        
        case GET_CATEGORIES_SUCCESS: 
            return{
                data: payload,
                loading: false,
                error: false
            };

        case GET_CATEGORIES_ERROR: 
            return{
                ...state,
                loading: false,
                error: true
            }
        
        default: return state
    }
}

export default categoriesReducer;