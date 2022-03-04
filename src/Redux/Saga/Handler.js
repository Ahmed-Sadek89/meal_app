// saga
import {all, put, call, takeLeading} from 'redux-saga/effects';
// from Api folder
import { getHomePageMealAPI, getCategoriesAPI, getRandomMealAPI } from '../../Api/Api';
// from Redux folder
// HomepageMeal
import {GET_MEAL} from '../HomepageMeal/Type';
import { getMealSuccess, getMealError} from '../HomepageMeal/Action';
// Categories
import {GET_CATEGORIES} from '../Categories/Type';
import { getCategoriesSuccess, getCategoriesError} from '../Categories/Action';
// RandomMeal
import { GET_RANODM_MEAL } from '../RandomMeal/Type';
import { getRandomMealError, getRandomMealSuccess } from '../RandomMeal/Action';


// handle meal
function* getMealSaga(action){
    try{
        //console.log(action.payload) // to show what is/are data return to api
        const data = yield call(getHomePageMealAPI, action.payload);
        yield put(getMealSuccess(data))
    }catch(err){
        yield put(getMealError(err.message));
    }
}

function* getMealWatcher(){
    yield takeLeading(GET_MEAL, getMealSaga);
}

// handle categories
function* categoriesSaga(){
    try{
        const data = yield call(getCategoriesAPI);
        yield put(getCategoriesSuccess(data))
    }catch(err){
        yield put(getCategoriesError(err.message));
    }
}

function* categoriesWatcher(){
    yield takeLeading(GET_CATEGORIES, categoriesSaga)
}

// handle random meal
function* randomMealSaga(){
    try{
        const data = yield call(getRandomMealAPI);
        yield put(getRandomMealSuccess(data));
    }catch(err){
        yield put(getRandomMealError(err.message));
    }
}

function* randomMealWatcher(){
    yield takeLeading(GET_RANODM_MEAL, randomMealSaga)
}

// handler
export default function* dataHandler(){
    //console.log('dataHandler')
    yield all([
        getMealWatcher(),
        categoriesWatcher(),
        randomMealWatcher()
    ])
} 