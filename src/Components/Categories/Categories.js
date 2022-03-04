import React, { memo } from 'react'
import ItemsLoading from '../../General/ItemsLoading/ItemsLoading';
import NotFound from '../NotFound.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Categories = (props) => {
  console.log('hello, iam Categories ');
  const {data, loading, error} = props.categories;
  const { categories } = data;

  return (
    <div className='container categories'>
        {
          error === true && <p style={{color: 'red'}} className='text-center f-xxl'>something went wrong...</p>
        }
        <div className=' row gap-3'>
          {
            loading === true ? <ItemsLoading /> : 
            categories?.map((index) => {
              return(
                <div key={index.idCategory} className='categoryContent col-xs-12 col-md-6 col-lg-4'>
                  <LazyLoadImage
                    src={index.strCategoryThumb } 
                    alt={index.strCategory} 
                    className='b-radius-default lazyLoading'
                    effect='blur'
                    placeholderSrc={NotFound}
                  />
                  <p className='f-md text-center'>{index.strCategory}</p>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default memo(Categories)