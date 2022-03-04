import React, { memo } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    console.log('hello, iam navbar');
    const makeStyle = ({isActive}) => {
        if(isActive === true){
            return{
                backgroundColor: '#f3b542',
                textDecoration: 'none'
            }
        }else{
            return{
                textDecoration: 'none'
            } 
        }

    }
    return (
        <nav className='p-t-1 p-b-1'>
            <div className='layout container'>
                <div className='f-bold f-xl'>
                    <Link to='/' style={{textDecoration: 'none'}}>
                            <span>meal </span><span className='color-2'>app</span>
                    </Link>
                </div>
                <div className='links f-bold row gap-1'>
                    <NavLink to='/' style={makeStyle}>
                        <span>home</span>
                    </NavLink>
                    <NavLink to='/categories' style={makeStyle}>
                        <span>Categories</span>
                    </NavLink>
                    <NavLink to='/random_meal' style={makeStyle}>
                        <span>Random</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default memo(Navbar)