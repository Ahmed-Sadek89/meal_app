import React, { memo } from 'react'

const Footer = () => {
    console.log('hello, iam footer')
    return (
        <footer className='text-center p-t-2 p-b-2'>
            <p className='f-sm'>copyright © 2022</p>
            <a className='color-2' rel="noreferrer" target='_blank' href='https://ahmed-sadek89.github.io/s-a-d-e-k/'>
                Ahmed Sadek
            </a>
        </footer>
    )
}

export default memo(Footer)