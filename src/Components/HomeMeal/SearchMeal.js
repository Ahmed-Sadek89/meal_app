import React, { memo } from 'react'
import useCustomHook from './useCustomHook'

const SearchMeal = () => {
    console.log('hello, iam searhMeal comming from HomeMeal')
    const {meal, setMeal, getMealFromAPI} = useCustomHook();
    return (
        <form onSubmit={getMealFromAPI} className='m-t-2 m-b-2'>
            <input
                type='text'
                required
                className='b-radius-default p-t-1 p-b-1 p-l-1'
                style={{color: '#000'}}
                placeholder='Enter your favorite meal...'
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
            />
            <button type='submit' className='b-radius-default p-1 color-1 bg-2 f-md m-l-1 m-r-1'>
                Search Meal
            </button>
        </form>
    )
}

export default memo(SearchMeal)