import {GET_MEAL, GET_MEAL_SUCCESS, GET_MEAL_ERROR} from './Type';

const initialState = {
    data: [],
    loading: false,
    error: false
};

const mealReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case GET_MEAL: 
            return {
                ...state,
                loading: true,
            };
        
        case GET_MEAL_SUCCESS: 
            return{
                data: payload,
                loading: false,
                error: false
            };

        case GET_MEAL_ERROR: 
            return{
                ...state,
                loading: false,
                error: true
            }
        
        default: return state
    }
}

export default mealReducer;