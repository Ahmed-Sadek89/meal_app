import {all} from 'redux-saga/effects';
import dataHandler from './Handler';

export default function* Saga(){
    yield all([dataHandler()])
} 