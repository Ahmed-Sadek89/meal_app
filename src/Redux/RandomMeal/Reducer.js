import {GET_RANODM_MEAL, GET_RANODM_MEAL_SUCCESS, GET_RANODM_MEAL_ERROR} from './Type';

const initialState = {
    data: [],
    loading: false,
    error: false
};

const randomMealReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case GET_RANODM_MEAL: 
            return {
                ...state,
                loading: true,
            };
        
        case GET_RANODM_MEAL_SUCCESS: 
            return{
                data: payload,
                loading: false,
                error: false
            };

        case GET_RANODM_MEAL_ERROR: 
            return{
                ...state,
                loading: false,
                error: true
            }
        
        default: return state
    }
}

export default randomMealReducer;