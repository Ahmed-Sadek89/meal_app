// redux
import { applyMiddleware, combineReducers, createStore } from "redux";
// saga
import createSagaMiddleware from "redux-saga";
import Saga from './Saga/Saga';
// reducers 
import categoriesReducer from "./Categories/Reducer";
import mealReducer from "./HomepageMeal/Reducer";
import randomMealReducer from "./RandomMeal/Reducer";


const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = combineReducers({
    meal: mealReducer,
    categories: categoriesReducer,
    randomMeal: randomMealReducer
});

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
    rootReducer
    //enhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Saga);

export default Store;
