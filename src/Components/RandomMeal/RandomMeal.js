import React, { memo } from 'react'
import OneItemLoading from '../../General/OneItemLoading/OneItemLoading';
import NotFound from '../NotFound.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';
import { getRandomMeal } from '../../Redux/RandomMeal/Action';


const RandomMeal = (props) => {
  console.log('hello, iam RandomMeal');
  const {loading, error, data} = props.randomMeal;
  const {meals} = data
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <div className='randomMealContent'>
        {/* <OneItemLoading /> */}
        <div className=''>
        {
          error === true && <p style={{color: 'red'}} className='text-center f-xxl'>something went wrong...</p>
        }
        {
          loading === true ? <OneItemLoading /> : 
          meals?.map((index) => {
            return(
              <div key={index.idMeal} className='m-t-2 m-b-2'>
                <LazyLoadImage
                  src={index.strMealThumb ? index.strMealThumb : NotFound} 
                  alt={index.strMeal} 
                  className='b-radius-default lazyLoading randomMealContent-image'
                  effect='blur'
                  placeholderSrc={NotFound}
                />
                <p className='randomMealContent-title m-t-1 m-b-1'>{index.strMeal}</p>
                <button
                  onClick={(() => dispatch(getRandomMeal()))}
                  className='randomMealContent-btn f-bold b-radius-default m-t-1 m-b-1 p-t-1 p-b-1 p-r-3 p-l-3' 
                >
                  Generate Another Meal  
                </button>
                <div className='f-lg color-2'>Instruction</div>
                <div className='randomMealContent-body'>{index.strInstructions}</div>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default memo(RandomMeal)