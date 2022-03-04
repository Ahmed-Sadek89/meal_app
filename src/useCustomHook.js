import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMeal } from './Redux/RandomMeal/Action';
import { getCategories } from './Redux/Categories/Action';
import { getMeal } from './Redux/HomepageMeal/Action';

const useCustomHook = () => {
    const meal = useSelector(({meal}) => meal);
    const categories = useSelector(({categories}) => categories);
    const randomMeal = useSelector(({randomMeal}) => randomMeal);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCategories())
      dispatch(getRandomMeal())
      dispatch(getMeal(''))
    }, [dispatch]);

    return [meal, categories, randomMeal]
}

export default useCustomHook