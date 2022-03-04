import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container text-center error'>
        <p className='color-2 f-lg f-bold m-b-2 m-t-2'>404, Not Found !</p>
        <Link to="/" className='bg-3 b-radius-default p-1' style={{textDecoration: 'none'}}>Back To Main</Link>
    </div>
  )
}

export default Error