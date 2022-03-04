import React, { memo } from 'react'
import SearchMeal from './SearchMeal'
import NotFound from '../NotFound.webp'
import ItemsLoading from '../../General/ItemsLoading/ItemsLoading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const HomeMeal = (props) => {
    console.log('hello, iam HomeMeal')
    const  {data, loading, error} = props.meals;
    const {meals} = data
    return (
      <div className='container homeMeal'>
        {/* 1-- form */}
        <SearchMeal />
        {/* 2-- get data according to form */}
        {
          error === true && <p style={{color: 'red'}} className='text-center f-xxl'>something went wrong...</p>
        }
        {
          meals === null && <p className='text-center color-2 f-xxl'>no meals found...</p>
        }
        <div className='mealContent row gap-2'>
          {
            loading === true ? <ItemsLoading pageName='homeMeal' /> : 
            meals?.map((index) => {
              return(
                // ? index.strMealThumb : NotFound
                <div key={index.idMeal} className='myMeal col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                  <LazyLoadImage
                    src={index.strMealThumb } 
                    alt={index.strMeal} 
                    className='b-radius-default lazyLoading'
                    effect='blur'
                    placeholderSrc={NotFound}
                  />
                  <p className='f-md text-center'>{index.strMeal}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  
}

export default memo(HomeMeal)