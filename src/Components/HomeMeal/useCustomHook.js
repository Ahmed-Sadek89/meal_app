import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { getMeal } from '../../Redux/HomepageMeal/Action';

const useCustomHook = () => {
    const [meal, setMeal ] = useState('');
    const dispatch = useDispatch();

    const getMealFromAPI = (e) => {
        e.preventDefault()
        if(meal === ''){return null} 
        dispatch(getMeal(meal))
    }
    return { meal, setMeal, getMealFromAPI }
}

export default useCustomHook